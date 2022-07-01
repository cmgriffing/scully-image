const { scullyImageSharpPlugin } = require("./scully-image");
const { markdownPlugin } = require("./image-markdown");
const { setConfig } = require("./utils/pluginConfig");

module.exports = {
  registerScullyImage: (registerPlugin) => {
    const validator = async () => [];

    registerPlugin(
      "postProcessByHtml",
      "scullyImage",
      scullyImageSharpPlugin,
      validator
    );
  },
  registerScullyImageMarkdown: (registerPlugin, config) => {
    setConfig(markdownPlugin, config);

    registerPlugin("fileHandler", "md", markdownPlugin, ["markdown"], {
      replaceExistingPlugin: true,
      ...config,
    });
  },
};
