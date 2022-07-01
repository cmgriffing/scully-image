const { getConfig, setConfig } = require("./utils/pluginConfig");
const marked = require("marked");

// ------------------------------
// Syntax Highlighting

const Prism = require("prismjs");
require("prismjs/components/prism-css");
require("prismjs/components/prism-javascript");
require("prismjs/components/prism-json");
require("prismjs/components/prism-typescript");

const defaultImageProps = {
  pixelHeight: undefined,
  pixelWidth: undefined,
  fluidMaxHeight: undefined,
  fluidMaxWidth: undefined,
  lazy: true,
  pluginOptions: {},
  preloader: "blur",
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

const renderer = new marked.Renderer();
// wrap code block the way Prism.js expects it
renderer.code = function (thisPlugin, code, lang, escaped) {
  code = thisPlugin.options.highlight(code, lang);
  if (!lang) {
    return "<pre><code>" + code + "</code></pre>";
  }
  // e.g. "language-js"
  const langClass = "language-" + lang;
  return (
    '<pre class="' +
    langClass +
    '"><code class="' +
    langClass +
    '">' +
    code +
    "</code></pre>"
  );
};
// ------------------------------

const markdownPlugin = async (raw, route) => {
  const config = {
    ...defaultImageProps,
    ...getConfig(markdownPlugin),
  };
  if (config.enableSyntaxHighlighting) {
    marked.setOptions({
      renderer,
      highlight: (code, lang) => {
        lang = lang || "typescript";
        if (!Prism.languages[lang]) {
          console.warn(`Notice:
    ---------------------------------------------------------------------------------------
      Language '${lang}' is not available in the default Prism.js setup.
      if you want support for this you can add it into your ScullyConfig.ts as:

        import  'prismjs/components/prism-${lang}'

      Note that this is a sample the actual syntax might be slightly different
    ---------------------------------------------------------------------------------------
          `);
          return code;
        }
        return Prism.highlight(code, Prism.languages[lang]);
      },
      pedantic: false,
      gfm: true,
      breaks: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false,
    });
  }

  marked.use({
    renderer: {
      image: function (href, title, text) {
        return `
          <scully-${config.preloader}-image
            data-type="${config.preloader}"
            markdown="true"
            src="${href}"
            data-plugin-options="${JSON.stringify({})}"
          ></scully-${config.preloader}-image>
        `;
      },
    },
  });

  return marked(raw);
};

setConfig(markdownPlugin, {
  enableSyntaxHighlighting: false,
  preloader: "blur",
});

module.exports = {
  markdownPlugin,
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
