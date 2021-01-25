const path = require('path')

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "Components": path.resolve(__dirname, "../src/components"),
    }

    return config;
  }
}