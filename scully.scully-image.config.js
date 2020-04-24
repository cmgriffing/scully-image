const { registerPlugin } = require("@scullyio/scully");

const { registerScullyImage } = require("./dist/scully-image/plugin");

registerScullyImage(registerPlugin);

function examplesRoutesPlugin(route, config = {}) {
  return Promise.resolve([
    { route: "/examples/blur" },
    { route: "/examples/traced" },
    { route: "/examples/primitives" },
  ]);
}

const validator = async (conf) => [];
registerPlugin("router", "examplesRoutes", examplesRoutesPlugin, validator);

exports.config = {
  projectRoot: "./projects/documentation/src",
  projectName: "documentation",
  outDir: "./dist/static",
  routes: {
    "/docs/:title": {
      type: "contentFolder",
      title: {
        folder: "./docs",
      },
    },
    "/examples/:exampleType": {
      type: "examplesRoutes",
    },
  },
  defaultPostRenderers: ["scullyImage"],
};
