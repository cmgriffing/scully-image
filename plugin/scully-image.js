"use strict";

const { JSDOM } = require("jsdom");
const fs = require("fs");
const path = require("path");

const uuidv5 = require("uuid/v5");
const imagemin = require("imagemin");
const imageminPngquant = require("imagemin-pngquant");
const sharp = require("sharp");

const markdownImageScriptId = "#markdown-image-script";
const markdownImageStyleId = "#markdown-image-styles";

const handleImagesFileContents = fs.readFileSync(
  path.resolve(__dirname, "handle-images.ts")
);

const {
  processImageIntoPreloader,
  extractTransferStateFromString,
  getImageData,
} = require("./utils/images");

const UUID_NAMESPACE = "363f57fa-aa19-425d-9be4-204658e11a5f";

let scullyImageConfig = {
  assetsPath: "./assets",
  defaultPreloaderOptions: {
    base64: {},
    tracedSVG: {},
    primitives: {},
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

module.exports = {
  scullyImageSharpPlugin: async (html, route) => {
    try {
      const dom = new JSDOM(html);
      const doc = dom.window.document;

      const imgElements = Array.from(
        doc.querySelectorAll(
          "scully-image, scully-blur-image, scully-traced-image, scully-primitives-image, scully-pixels-image"
        )
      );

      const markdownImgElements = imgElements.filter((element) => {
        return !!element.getAttribute("data-markdown");
      });

      const transferStateElement = doc.getElementById(
        "ScullyIO-transfer-state"
      );

      doc.body.removeChild(transferStateElement);

      const transferStateString = transferStateElement.innerHTML;

      let shouldPrefixTransferState = false;

      if (!doc.querySelector(markdownImageScriptId)) {
        const markdownImageScript = doc.createElement("script");
        markdownImageScript.id = markdownImageScriptId;
        markdownImageScript.innerHTML = handleImagesFileContents;
        markdownImageScript.type = "text/javascript";
        doc.body.appendChild(markdownImageScript);
      }

      if (!doc.querySelector(markdownImageStyleId)) {
        const markdownImageStyle = doc.createElement("style");
        markdownImageStyle.id = markdownImageStyleId;
        markdownImageStyle.innerHTML = `
scully-image, scully-blur-image, scully-traced-image, scully-primitives-image, scully-pixels-image {
position: relative;
display: block;
overflow: hidden;
}

scully-image img, scully-blur-image img, scully-traced-image img, scully-primitives-image img, scully-pixels-image img {
transition: opacity 300ms, filter 300ms;
width: 100%;
height: auto;
}

scully-image .preloaded-image, scully-blur-image .preloaded-image, scully-traced-image .preloaded-image, scully-primitives-image .preloaded-image, scully-pixels-image .preloaded-image {
z-index: 3;
opacity: 1;
}

scully-image .preloaded-image.loaded, scully-blur-image .preloaded-image.loaded, scully-traced-image .preloaded-image.loaded, scully-primitives-image .preloaded-image.loaded, scully-pixels-image .preloaded-image.loaded {
opacity: 0;
}

scully-image .preloaded-image-fade-hack, scully-blur-image .preloaded-image-fade-hack, scully-traced-image .preloaded-image-fade-hack, scully-primitives-image .preloaded-image-fade-hack, scully-pixels-image .preloaded-image-fade-hack {
position: absolute;
pointer-events: none;
top: 0;
left: 0;
z-index: 3;
opacity: 1;
}

scully-image .preloaded-image-fade-hack.loaded, scully-blur-image .preloaded-image-fade-hack.loaded, scully-traced-image .preloaded-image-fade-hack.loaded, scully-primitives-image .preloaded-image-fade-hack.loaded, scully-pixels-image .preloaded-image-fade-hack.loaded {
opacity: 0;
}

scully-image .loaded-image, scully-blur-image .loaded-image, scully-traced-image .loaded-image, scully-primitives-image .loaded-image, scully-pixels-image .loaded-image {
position: absolute;
top: 0;
left: 0;
z-index: 2;
opacity: 0;
}

scully-image .loaded-image.loaded, scully-blur-image .loaded-image.loaded, scully-traced-image .loaded-image.loaded, scully-primitives-image .loaded-image.loaded, scully-pixels-image .loaded-image.loaded {
opacity: 1;
}

scully-image .blurred, scully-blur-image .blurred, scully-traced-image .blurred, scully-primitives-image .blurred, scully-pixels-image .blurred {
filter: blur(20px);
}
      `;
        doc.head.appendChild(markdownImageStyle);
      }

      if (!transferStateString || transferStateString === "") {
        if (markdownImgElements.length) {
          shouldPrefixTransferState = true;
        } else {
          return html;
        }
      }

      const {
        transferState,
        startOfTransferStateString,
        endOfTransferStateString,
      } = extractTransferStateFromString(transferStateString);

      // fill in inner img elements of markdown generated images
      markdownImgElements.forEach((markdownImgElement) => {
        const preloaderType = markdownImgElement.getAttribute("data-type");
        const src = markdownImgElement.getAttribute("src");

        const pluginOptionsString = markdownImgElement.getAttribute(
          "data-plugin-options"
        );
        const pluginOptions = JSON.parse(pluginOptionsString);

        const pixelHeight =
          +markdownImgElement.getAttribute("data-pixel-height");
        const pixelWidth = +markdownImgElement.getAttribute("data-pixel-width");

        const fluidMaxWidth = +markdownImgElement.getAttribute(
          "data-fluid-max-width"
        );
        const fluidMaxHeight = +markdownImgElement.getAttribute(
          "data-fluid-max-height"
        );

        const preloadedImgElement = doc.createElement("img");
        preloadedImgElement.classList.add("preloaded-image");
        preloadedImgElement.style = "height:auto;width:100%;";
        if (preloaderType === "blur") {
          preloadedImgElement.classList.add("blurred");
        }
        markdownImgElement.appendChild(preloadedImgElement);

        const preloadedHackImgElement = doc.createElement("img");
        preloadedHackImgElement.classList.add("preloaded-image-fade-hack");
        preloadedHackImgElement.style = "height:auto;width:100%;";
        markdownImgElement.appendChild(preloadedHackImgElement);

        const loadedImgElement = doc.createElement("img");
        loadedImgElement.classList.add("loaded-image");
        loadedImgElement.style = "height:auto;width:100%;";
        markdownImgElement.appendChild(loadedImgElement);
      });

      const scullyImageUrlMap = {};

      await Promise.all(
        imgElements.map(async (img) => {
          // TODO: get child img element from lib-scully-image element
          const preloaderType = img.getAttribute("data-type");
          const src = img.getAttribute("src");
          const pluginOptionsString = img.getAttribute("data-plugin-options");
          let pluginOptions = {};
          try {
            pluginOptions = JSON.parse(pluginOptionsString);
          } catch (e) {}

          const pixelHeight = +img.getAttribute("data-pixel-height");
          const pixelWidth = +img.getAttribute("data-pixel-width");

          const fluidMaxWidth = +img.getAttribute("data-fluid-max-width");
          const fluidMaxHeight = +img.getAttribute("data-fluid-max-height");

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

              const filenameUUID = uuidv5(
                scullyFullImageMapKey,
                UUID_NAMESPACE
              );

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

              fs.writeFileSync(filePath, optimizedBuffer);

              const fileUrl = `/assets/scully-image/${filenameUUID}.png`;

              scullyImageUrlMap[scullyFullImageMapKey] = fileUrl;
              img.setAttribute("src", fileUrl);
            } else {
              scullyImageUrlMap[scullyFullImageMapKey] = src;
            }
          }

          if (!scullyImageUrlMap[scullyPreloaderImageMapKey]) {
            const promise = new Promise(async (resolve, reject) => {
              imageBody = imageBody || (await getImageData(src));

              let processedImage;
              try {
                processedImage = await processImageIntoPreloader(
                  imageBody,
                  preloaderType,
                  pluginOptions,
                  {
                    imagemin,
                    imageminPngquant,
                  }
                );
              } catch (e) {
                console.log("Caught error in processing Image", e);
              }

              // TODO: The key needs to take size into account for specificity
              try {
                scullyImageUrlMap[scullyPreloaderImageMapKey] = processedImage;

                const preloaderElement = img.querySelector(".preloaded-image");
                preloaderElement.setAttribute("src", processedImage);

                transferState.scullyImageUrlMap = scullyImageUrlMap;

                const newTransferStateString = `${
                  shouldPrefixTransferState
                    ? "window['ScullyIO-transfer-state']="
                    : ""
                }${startOfTransferStateString}${JSON.stringify(
                  transferState
                )}${endOfTransferStateString}`;

                transferStateElement.innerHTML = newTransferStateString;

                doc.body.appendChild(transferStateElement);
                resolve(scullyImageUrlMap[scullyPreloaderImageMapKey]);
              } catch (lastError) {
                reject(lastError);
              }
            });
            scullyImageUrlMap[scullyPreloaderImageMapKey] = await promise;

            return scullyImageUrlMap[scullyPreloaderImageMapKey];
          }
        })
      );
    } catch (e) {
      console.log("Failed to process all images", e);
    }

    const serializedDom = dom.serialize();

    return serializedDom;
  },
};

// debug only
// process.on("uncaughtException", function (err) {
//   console.log("uncaughtException", err);
//   process.exit(1);
// });

// process.on("unhandledRejection", (error) => {
//   console.log("unhandledRejection", error);
//   process.exit(1);
// });
