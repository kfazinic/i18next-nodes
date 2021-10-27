const i18nextHttpBackend = require("i18next-http-backend");
const path = require("path");

module.exports = {
  serializeConfig: false,
  use: typeof window !== "undefined" ? [i18nextHttpBackend.default] : [],
  i18n: {
    locales: ["da"],
    defaultLocale: "da",
    localePath: path.resolve("./public/locales"),
    transSupportBasicHtmlNodes: true,
    transKeepBasicHtmlNodesFor: ["i"],
    localeDetection: false,
    interpolation: {
      format(value, format) {
        if (format === "toTitleCase") {
          return value.slice(0, 1).toUpperCase() + value.slice(1);
        }
        return value;
      }
    }
  },
  partialBundledLanguages: true
};
