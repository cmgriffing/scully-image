"use strict";

const { JSDOM } = require("jsdom");
const sharp = require("sharp");
const { promisify } = require("util");
const fs = require("fs");
const https = require("https");

const scullyTransferStateStartString = "/** ___SCULLY_STATE_START___ */";

const scullyTransferStateEndString = "/** ___SCULLY_STATE_END___ */";

module.exports = {
  scullyImageSharpPlugin: async (html, route) => {
    console.log("TESTING THE LOGGING");
    const dom = new JSDOM(html);
    const doc = dom.window.document;

    const imgElements = doc.querySelectorAll(
      "scully-image, scully-blur-image, scully-traced-image, scully-sqip-image"
    );

    console.log({ imgElements: imgElements.length });

    const transferStateElement = doc.getElementById("ScullyIO-transfer-state");

    doc.body.removeChild(transferStateElement);

    console.log("TRANSFERSTATE", transferStateElement.innerHTML);

    const transferStateString = transferStateElement.innerHTML;

    if (transferStateString === "") {
      console.log(
        "bailing out of scully image since we have no transferstate",
        transferStateString
      );
      doc.body.appendChild(transferStateElement);
      // If transferState is empty we quit out.
      return dom.serialize();
    }

    const {
      transferState,
      startOfTransferStateString,
      endOfTransferStateString,
    } = extractTransferStateFromString(transferStateString);

    if (!transferState.scullyImageUrlMap) {
      console.log(
        "bailing out of scully image since we have no scully image specific transferstate"
      );
      // If transferState is empty we quit out.
      doc.body.appendChild(transferStateElement);
      return dom.serialize();
    }

    const scullyImageUrlMap = {};

    const sqip = require("sqip").default;

    const { trace } = require("potrace");
    const potrace = promisify(trace);

    await Promise.all(
      Array.from(imgElements).map(async (img) => {
        // TODO: get child img element from lib-scully-image element
        console.log({ img });
        const preloaderType = img.getAttribute("data-type");
        console.log({ preloaderType });
        const src = img.getAttribute("src");

        if (!scullyImageUrlMap[src + preloaderType]) {
          const promise = new Promise(async (resolve, reject) => {
            console.log("img", img.style.height);
            const imageBody = await getUrl(src);
            console.log({ imageBody });
            const resizedBuffer = await sharp(imageBody)
              .resize({ width: 42 })
              .png()
              .toBuffer();

            console.log("before base64: ");
            const base64 = await bufferToDataUri(resizedBuffer, "png");
            fs.writeFileSync("./scratch.png", imageBody);
            console.log("before sqip: ");
            const sqipBuffer = await sqip({
              input: "./scratch.png",
              plugins: [
                {
                  name: "primitive",
                  options: { numberOfPrimitives: 8, mode: 0 },
                },
                "svgo",
                "data-uri",
              ],
            }).catch((e) => {
              console.log("sqip error", e);
            });
            console.log("sqip", sqipBuffer);
            const tracedSVG = await potrace(imageBody);
            // TODO: The key needs to take size into account for specificity
            try {
              scullyImageUrlMap[src + preloaderType] = {
                src,
                base64,
                tracedSVG,
                sqip: sqipBuffer.metadata.dataURIBase64,
              };
              img.setAttribute(
                "src",
                scullyImageUrlMap[src + preloaderType][preloaderType]
              );

              const preloaderElement = img.querySelector(".preloaded-image");
              if (preloaderType === "base64") {
                preloaderElement.setAttribute("src", base64);
              } else if (preloaderType === "tracedSVG") {
                preloaderElement.setAttribute(
                  "src",
                  "data:image/svg+xml;utf8," +
                    scullyImageUrlMap[src + preloaderType][preloaderType]
                );
              } else if (preloaderType === "sqip") {
                preloaderElement.setAttribute(
                  "src",
                  scullyImageUrlMap[src + preloaderType][preloaderType]
                );
              }

              transferState.scullyImageUrlMap = scullyImageUrlMap;

              const newTransferStateString = `${startOfTransferStateString}${JSON.stringify(
                transferState
              )}${endOfTransferStateString}`;

              transferStateElement.innerHTML = newTransferStateString;

              doc.body.appendChild(transferStateElement);
              resolve(scullyImageUrlMap[src + preloaderType]);
            } catch (lastError) {
              console.log({ lastError });
              reject(lastError);
            }
          });
          scullyImageUrlMap[src + preloaderType] = promise;
          return await promise;
        } else {
          console.log("Image already parsed");
          const imageData = await scullyImageUrlMap[src + preloaderType];
          // if (!imageData.base64) {
          //   imageData = await imageData;
          // }
          img.setAttribute("src", imageData[preloaderType]);
        }
      })
    );

    const serializedDom = dom.serialize();

    // console.log({ serializedDom });

    return serializedDom;
  },
};

function getUrl(url) {
  return new Promise((resolve, reject) => {
    console.log({ url });
    https.get(url, function (response) {
      // Continuously update stream with data
      const body = [];
      response.on("data", function (d) {
        body.push(d);
      });
      response.on("end", function () {
        resolve(Buffer.concat(body));
      });
    });
  });
}

async function bufferToDataUri(buffer, format) {
  var string = await buffer.toString("base64");
  return `data:image/${format};base64,${string}`;
}

function extractTransferStateFromString(transferStateString) {
  console.log({ transferStateString });
  const transferStateStartIndex =
    transferStateString.indexOf(scullyTransferStateStartString) +
    scullyTransferStateStartString.length;
  const startOfTransferStateString = transferStateString.substring(
    0,
    transferStateStartIndex
  );

  const transferStateEndIndex = transferStateString.indexOf(
    scullyTransferStateEndString
  );
  const endOfTransferStateString = transferStateString.substring(
    transferStateEndIndex
  );

  const transferState = JSON.parse(
    transferStateString.substring(
      transferStateStartIndex,
      transferStateEndIndex
    )
  );
  return {
    transferState,
    startOfTransferStateString,
    endOfTransferStateString,
  };
}

// debug only
process.on("uncaughtException", function (err) {
  console.log("uncaughtException", err);
  process.exit(1);
});

process.on("unhandledRejection", (error) => {
  console.log("unhandledRejection", error.message);
  process.exit(1);
});
