const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: ["vuetify"],

  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "]",
      localeDir: "locales",
      enableInSFC: true,
      enableBridge: false,
    },
  },
});
