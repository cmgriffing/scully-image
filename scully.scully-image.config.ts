import { registerPlugin } from '@scullyio/scully';
import '@scullyio/scully-plugin-puppeteer';

// const { registerScullyImage } = require("scully-image/plugin");

// dev
const {
  registerScullyImage,
  registerScullyImageMarkdown,
} = require('./dist/scully-image/plugin');

registerScullyImage(registerPlugin);
registerScullyImageMarkdown(registerPlugin, { defaultImageProps: {} });

function examplesRoutesPlugin(route, config = {}) {
  return Promise.resolve([
    { route: '/examples/blur' },
    { route: '/examples/traced' },
    { route: '/examples/primitives' },
    { route: '/examples/pixels' },
  ]);
}

const validator = async (conf) => [];
registerPlugin('router', 'examplesRoutes', examplesRoutesPlugin, validator);

exports.config = {
  projectRoot: './projects/documentation/src',
  projectName: 'documentation',
  outDir: './dist/static',
  routes: {
    '/docs/:title': {
      type: 'contentFolder',
      title: {
        folder: './docs',
      },
    },
    '/examples/:exampleType': {
      type: 'examplesRoutes',
    },
  },
  defaultPostRenderers: ['scullyImage'],
};

// debug only
process.on('uncaughtException', function (error: any) {
  console.log('uncaughtException', error);
  process.exit(1);
});

process.on('unhandledRejection', (error: any) => {
  console.log('unhandledRejection', error);
  process.exit(1);
});
