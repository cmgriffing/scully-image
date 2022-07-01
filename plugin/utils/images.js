const { promisify } = require("util");
const https = require("https");
const axios = require("axios");
const path = require("path");
const fs = require("fs");

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

const scullyTransferStateStartString = "/** ___SCULLY_STATE_START___ */";

const scullyTransferStateEndString = "/** ___SCULLY_STATE_END___ */";

function getUrl(url) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        responseType: "arraybuffer",
      })
      .then(function (response) {
        resolve(response.data);
      })
      .catch((e) => {
        console.error("ERROR FETCHING IMAGE DATA:", url, e);
        reject(e);
      });
  });
}

async function bufferToDataUri(buffer, format) {
  let mime;
  if (format) {
    mime = `image/${format}`;
  } else {
    const FileType = require("file-type");
    mime = (await FileType(buffer)).mime;
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
  if (preloaderType === "blur") {
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

    return bufferToDataUri(optimizedBuffer);
  } else if (preloaderType === "primitives") {
    const primitive = require("primitive");
    const SVGO = require("svgo");
    const svgo = new SVGO(svgoOptions);
    const unoptimized = await primitive({
      input: await bufferToDataUri(imageBody),
      numSteps: pluginOptions.numberOfPrimitives,
    });
    const optimized = await svgo.optimize(Buffer.from(unoptimized.toSVG()));
    return bufferToDataUri(Buffer.from(optimized.data), "svg+xml");
  } else if (preloaderType === "tracedSVG") {
    const { trace } = require("potrace");
    const SVGO = require("svgo");
    const svgo = new SVGO(svgoOptions);
    const potrace = promisify(trace);
    const unoptimized = await potrace(imageBody, pluginOptions);
    return svgo.optimize(unoptimized).then((result) => {
      return bufferToDataUri(Buffer.from(result.data), "svg+xml");
    });
  } else if (preloaderType === "pixels") {
    const { createSVGWindow } = require("svgdom");
    const window = createSVGWindow();
    const sharp = require("sharp");
    const { SVG, registerWindow } = require("@svgdotjs/svg.js");

    const options = { width: 8, pixelSize: 100, ...pluginOptions };

    registerWindow(window, window.document);
    const { width, pixelSize } = options;

    const { data, info } = await sharp(imageBody)
      .resize({ width })
      .raw()
      .toBuffer({ resolveWithObject: true });

    let column = 0;
    let row = 0;

    const canvas = SVG(window.document.documentElement).size(
      info.width * pixelSize,
      info.height * pixelSize
    );

    for (let i = 0; i < data.length; i += 3) {
      const red = data[i];
      const green = data[i + 1];
      const blue = data[i + 2];
      canvas
        .rect(1 * pixelSize, 1 * pixelSize)
        .attr({ fill: `rgb(${red},${green},${blue})` })
        .move(column * pixelSize, row * pixelSize);
      column++;
      if (column >= info.width) {
        column = 0;
        row++;
      }
    }

    const pixelSvg = canvas.svg();

    return bufferToDataUri(Buffer.from(pixelSvg), "svg+xml");
  } else {
    throw new Error(`Unsupported preloader type: ${preloaderType}`);
  }
}

function extractTransferStateFromString(transferStateString) {
  try {
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
  } catch (e) {
    return {
      transferState: {},
      startOfTransferStateString: scullyTransferStateStartString,
      endOfTransferStateString: scullyTransferStateEndString,
    };
  }
}

function getImageData(src) {
  const isURL = require("isurl");

  let srcIsURL = false;
  try {
    const url = new URL(src);
    srcIsURL = isURL(url);
  } catch (e) {}

  if (srcIsURL) {
    return getUrl(src);
  } else {
    const angularJson = require(`${process.cwd()}/angular.json`);
    let projectName = angularJson.defaultProject;
    if (scullyImageConfig.projectName && scullyImageConfig.projectName !== "") {
      projectName = scullyImageConfig.projectName;
    }
    const outputPath =
      angularJson.projects[projectName].architect.build.options.outputPath;
    const filePath = path.resolve(process.cwd(), `${outputPath}/${src}`);
    return promisify(fs.readFile)(filePath);
  }
}

module.exports = {
  getUrl,
  bufferToDataUri,
  processImageIntoPreloader,
  extractTransferStateFromString,
  getImageData,
};
