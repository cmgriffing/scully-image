/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-prototype-builtins */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable no-case-declarations */
// tslint:disable: no-shadowed-variable
const { accessPluginDirectly, configData } = require("./pluginRepository");

const backupData = configData + "BackupData__";
const routeConfigData = configData + "Route_Config_Data__";
const resetConfig = configData + "resetData__";

const getConfig = (plugin) => {
  const target = plugin.hasOwnProperty(accessPluginDirectly)
    ? plugin[accessPluginDirectly]
    : plugin;
  return target[configData] || {};
};

const setConfig = (plugin, config) => {
  const target = plugin.hasOwnProperty(accessPluginDirectly)
    ? plugin[accessPluginDirectly]
    : plugin;
  target[configData] = Object.assign({}, target[configData] || {}, config);
  target[backupData] = { ...target[configData] };
};

module.exports = {
  backupData,
  routeConfigData,
  resetConfig,
  getConfig,
  setConfig,
};
