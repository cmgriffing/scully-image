const configValidator = "configValidator";
const configData = `___Scully_config_for_plugin___`;
const AlternateExtensionsForFilePlugin = "altfileextension";
const accessPluginDirectly = "accessPluginDirectly";
const routeProcessPriority = "routeProcessPriority";
const priority = "priority";

const scullySystem = `scullySystem`;

const postProcessByHtml = {};

const plugins = {
  beforeAll: {},
  allDone: {},
  enterprise: {},
  fileHandler: {},
  postProcessByDom: {},
  postProcessByHtml: postProcessByHtml,
  render: postProcessByHtml,
  routeDiscoveryDone: {},
  routeProcess: {},
  router: {},
  scullySystem: {},
};

const pluginTypes = [
  "beforeAll",
  "allDone",
  "enterprise",
  "fileHandler",
  "postProcessByDom",
  "postProcessByHtml",
  "render",
  "routeDiscoveryDone",
  "routeProcess",
  "router",
  "scullySystem",
];

module.exports = {
  configValidator,
  configData,
  AlternateExtensionsForFilePlugin,
  accessPluginDirectly,
  routeProcessPriority,
  priority,
  scullySystem,
  plugins,
  pluginTypes,
};
