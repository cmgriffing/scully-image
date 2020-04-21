"use strict";

const { JSDOM } = require("jsdom");
const { promisify } = require("util");
const fs = require("fs");
const https = require("https");
const path = require("path");

const UUID_NAMESPACE = "363f57fa-aa19-425d-9be4-204658e11a5f";

const svgoOptions = {
  multipass: true,
  floatPrecision: 0,
  plugins: [
    {
      removeViewBox: false,
    },
    {
      addAttributesToSVGElement: {
        attributes: [
          {
            preserveAspectRatio: `none`,
          },
        ],
      },
    },
  ],
};

let scullyImageConfig = {
  assetsPath: "./assets",
  defaultPreloaderOptions: {
    base64: {},
    tracedSVG: {},
    sqip: {},
  },
};
try {
  const scullyImageConfigPath = path.resolve(
    process.cwd(),
    "scully-image.config.json"
  );
  // TODO: Do a proper defaults override instead of naive replacement
  scullyImageConfig = require(scullyImageConfigPath);
} catch (e) {
  console.log("No Scully Image config found. Using defaults.");
}

const scullyTransferStateStartString = "/** ___SCULLY_STATE_START___ */";

const scullyTransferStateEndString = "/** ___SCULLY_STATE_END___ */";

module.exports = {
  scullyImageSharpPlugin: async (html, route) => {
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

    if (!transferStateString || transferStateString === "") {
      console.log(
        "bailing out of scully image since we have no transferstate",
        transferStateString
      );
      doc.body.appendChild(transferStateElement);
      // If transferState is empty we quit out.
      return html;
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
      return html;
    }
    console.log("imageUrlMap", transferState.scullyImageUrlMap);

    const scullyImageUrlMap = {};

    await Promise.all(
      Array.from(imgElements).map(async (img) => {
        const uuidv5 = require("uuid").v5;
        const imagemin = require("imagemin");
        const imageminPngquant = require("imagemin-pngquant");
        const sharp = require("sharp");
        // TODO: get child img element from lib-scully-image element
        console.log({ img });
        const preloaderType = img.getAttribute("data-type");
        console.log({ preloaderType });
        const src = img.getAttribute("src");
        const pluginOptionsString = img.getAttribute("data-plugin-options");
        const pluginOptions = JSON.parse(pluginOptionsString);

        const pixelHeight = +img.getAttribute("ng-reflect-pixel-height");
        const pixelWidth = +img.getAttribute("ng-reflect-pixel-width");

        const fluidMaxWidth = +img.getAttribute("ng-reflect-fluid-max-width");
        const fluidMaxHeight = +img.getAttribute("ng-reflect-fluid-max-height");

        console.log("height and width values: ", {
          pixelHeight,
          pixelWidth,
          fluidMaxHeight,
          fluidMaxWidth,
        });
        const scullyPreloaderImageMapKey =
          src +
          preloaderType +
          pluginOptionsString +
          pixelHeight +
          pixelWidth +
          fluidMaxHeight +
          fluidMaxWidth;

        const scullyFullImageMapKey =
          src +
          "full" +
          pluginOptionsString +
          pixelHeight +
          pixelWidth +
          fluidMaxHeight +
          fluidMaxWidth;

        let imageBody;

        if (!scullyImageUrlMap[scullyFullImageMapKey]) {
          imageBody = imageBody || (await getImageData(src));

          const options = {};
          if (pixelHeight > 0) {
            options.height = pixelHeight;
          }
          if (pixelWidth > 0) {
            options.width = pixelWidth;
          }
          if (fluidMaxHeight > 0) {
            options.height = fluidMaxHeight;
          }
          if (fluidMaxWidth > 0) {
            options.width = fluidMaxWidth;
          }

          if (Object.keys(options).length > 0) {
            const resizedBuffer = await sharp(imageBody)
              .resize(options)
              .png()
              .toBuffer();

            const outputFolderPath = path.resolve(
              `./dist/static/`,
              scullyImageConfig.assetsPath,
              "scully-image"
            );

            try {
              if (!fs.existsSync(outputFolderPath)) {
                fs.mkdirSync(outputFolderPath);
              }
            } catch (err) {
              console.error("error making scully image output folder", err);
            }

            const filenameUUID = uuidv5(scullyFullImageMapKey, UUID_NAMESPACE);

            const filePath = path.relative(
              process.cwd(),
              path.resolve(`${outputFolderPath}/${filenameUUID}.png`)
            );

            const optimizedBuffer = await imagemin.buffer(resizedBuffer, {
              plugins: [
                imageminPngquant({
                  speed: 1,
                  quality: [0.3, 0.65],
                }),
              ],
            });

            console.log(
              `Saved ${
                resizedBuffer.byteLength - optimizedBuffer.byteLength
              } bytes from compressing PNG.`
            );

            fs.writeFileSync(filePath, optimizedBuffer);

            const fileUrl = `/assets/scully-image/${filenameUUID}.png`;

            scullyImageUrlMap[scullyFullImageMapKey] = fileUrl;
          }
        }

        if (!scullyImageUrlMap[scullyPreloaderImageMapKey]) {
          const promise = new Promise(async (resolve, reject) => {
            console.log("img", img.style.height);
            imageBody = imageBody || (await getImageData(src));
            console.log({ imageBody });

            const processedImage = await processImageIntoPreloader(
              imageBody,
              preloaderType,
              pluginOptions,
              {
                imagemin,
                imageminPngquant,
              }
            );

            // TODO: The key needs to take size into account for specificity
            try {
              scullyImageUrlMap[scullyPreloaderImageMapKey] = processedImage;
              img.setAttribute(
                "src",
                scullyImageUrlMap[scullyPreloaderImageMapKey]
              );

              const preloaderElement = img.querySelector(".preloaded-image");
              if (preloaderType === "base64") {
                preloaderElement.setAttribute("src", processedImage);
              } else if (preloaderType === "tracedSVG") {
                preloaderElement.setAttribute("src", processedImage);
              } else if (preloaderType === "sqip") {
                preloaderElement.setAttribute("src", processedImage);
              }

              transferState.scullyImageUrlMap = scullyImageUrlMap;

              const newTransferStateString = `${startOfTransferStateString}${JSON.stringify(
                transferState
              )}${endOfTransferStateString}`;

              transferStateElement.innerHTML = newTransferStateString;

              doc.body.appendChild(transferStateElement);
              resolve(scullyImageUrlMap[scullyPreloaderImageMapKey]);
            } catch (lastError) {
              console.log({ lastError });
              reject(lastError);
            }
          });
          scullyImageUrlMap[scullyPreloaderImageMapKey] = promise;
          return await promise;
        } else {
          console.log("Image already parsed");
          const imageData = await scullyImageUrlMap[scullyPreloaderImageMapKey];
          img.setAttribute("src", imageData);
        }
      })
    );

    const serializedDom = dom.serialize();

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
  let mime;
  if (format) {
    mime = `image/${format}`;
  } else {
    const FileType = require("file-type");
    mime = (await FileType.fromBuffer(buffer)).mime;
  }
  const string = await buffer.toString("base64");
  return `data:${mime};base64,${string}`;
}

async function processImageIntoPreloader(
  imageBody,
  preloaderType,
  pluginOptions,
  optimizers
) {
  if (preloaderType === "base64") {
    const sharp = require("sharp");
    const resizedBuffer = await sharp(imageBody)
      .resize({ width: 42 })
      .png()
      .toBuffer();

    const optimizedBuffer = await optimizers.imagemin.buffer(resizedBuffer, {
      plugins: [
        optimizers.imageminPngquant({
          speed: 1,
          quality: [0.3, 0.65],
        }),
      ],
    });

    console.log(
      `Saved ${
        resizedBuffer.byteLength - optimizedBuffer.byteLength
      } bytes from compressing PNG.`
    );

    console.log("before base64: ");
    return bufferToDataUri(optimizedBuffer);
  } else if (preloaderType === "sqip") {
    const primitive = require("primitive");
    const SVGO = require("svgo");
    const svgo = new SVGO(svgoOptions);
    console.log("before primitive: ");
    const unoptimized = await primitive({
      input: await bufferToDataUri(imageBody),
      numSteps: 10,
    });
    const optimized = await svgo.optimize(Buffer.from(unoptimized.toSVG()));
    return bufferToDataUri(Buffer.from(optimized.data), "svg+xml");
  } else if (preloaderType === "tracedSVG") {
    console.log("before trace: ");
    const { trace } = require("potrace");
    const SVGO = require("svgo");
    const svgo = new SVGO(svgoOptions);
    const potrace = promisify(trace);
    const unoptimized = await potrace(imageBody, pluginOptions);
    return svgo.optimize(unoptimized).then((result) => {
      return bufferToDataUri(Buffer.from(result.data), "svg+xml");
    });
  } else {
    throw new Error(`Unsupported preloader type: ${preloaderType}`);
  }
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

function getImageData(src) {
  const isURL = require("isurl");

  let srcIsURL = false;
  try {
    const url = new URL(src);
    srcIsURL = isURL(url);
  } catch (e) {
    console.log("Not a url");
  }

  if (srcIsURL) {
    return getUrl(src);
  } else {
    const angularJson = require(`${process.cwd()}/angular.json`);
    const defaultProject = angularJson.defaultProject;
    const outputPath =
      angularJson.projects[defaultProject].architect.build.options.outputPath;
    const filePath = path.resolve(process.cwd(), `${outputPath}/${src}`);
    return promisify(fs.readFile)(filePath);
  }
}

// debug only
process.on("uncaughtException", function (err) {
  console.log("uncaughtException", err);
  process.exit(1);
});

process.on("unhandledRejection", (error) => {
  console.log("unhandledRejection", error);
  process.exit(1);
});
