// Learn more https://docs.expo.io/guides/customizing-metro

/**
 * @type {import('expo/metro-config')}
 */
const { getDefaultConfig } = require("@expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
// const { withTamagui } = require('@tamagui/metro-plugin');

const path = require("path");

// Find the project and workspace directories
const projectRoot = __dirname;

const config = getDefaultConfig(projectRoot, { isCSSEnabled: true });
const globalCSS = path.resolve(projectRoot, "styles/global.css");
const tailwindConfigPath = path.resolve(projectRoot, "tailwind.config.js");

module.exports = withNativeWind(config, {
    configPath: tailwindConfigPath,
    input: globalCSS,
    projectRoot,
    features: {
        transformPercentagePolyfill: true,
    }
});
