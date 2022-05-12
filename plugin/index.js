const { scullyImageSharpPlugin } = require("./scully-image");

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
};
