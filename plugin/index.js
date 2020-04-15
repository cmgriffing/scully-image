const { scullyImageSharpPlugin } = require("./scully-image");

module.exports = {
  registerScullyImage: registerPlugin => {
    const validator = async () => [];

    registerPlugin("render", "scullyImage", scullyImageSharpPlugin, validator);
  }
};
