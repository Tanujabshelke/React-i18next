import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    backend: {
      // translation file path
      loadPath: "/locales/Translations/{{ns}}/{{lng}}.json",
    },
    fallbackLng: "en-US",
    // disabled in production
    debug: true,
    // can have multiple namespaces, in case you want to divide a huge
    // translation into smaller pieces and load them on demand
    ns: ["common"],

    interpolation: {
      espaceValue: false,
      formatSeparator: ",",
    },
    // react: {
    //   wait: true,
    // },
  });

export default i18n;
