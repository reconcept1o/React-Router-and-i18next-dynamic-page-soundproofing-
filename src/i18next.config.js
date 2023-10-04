
import i18next from "i18next";

const i18n = i18next.create({
  resources: {
    tr: require("./translations/tr.json"),
    en: require("./translations/en.json"),
    de: require("./translations/de.json"),
  },
  defaultLanguage: "tr",
});

export default i18n;
