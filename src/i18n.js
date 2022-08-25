import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import moment from "moment";
import pathResolver from "./pathResolver.json"

// const pathResolver = {
// "common.charts" : "/locales/Translations/charts",
// "header":"/locales/Translations/header",
// "common":"/locales/Translations/common"
// }

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    // resources,
    backend: {
      // translation file path
      
      loadPath: function(lngs,ns){
        return pathResolver[ns] ? "/locales/"+pathResolver[ns]+"/{{lng}}/{{ns}}.json":"/locales/{{lng}}/{{ns}}.json"
  }   
      // loadPath: pathResolver.path+"/{{lng}}/{{ns}}.json",
    },
    
    fallbackLng: ["en-US"],
    // disabled in production
    debug: true,
    // can have multiple namespaces, in case you want to divide a huge
    // translation into smaller pieces and load them on demand
    ns: ["common"],

    interpolation: {
      format: (value, format, lng) => {
        if (format === "number") {
          return new Intl.NumberFormat(lng).format(value);
        }
        if (format === "date") {
          return moment(value).format("DD-MMM-YYYY");
          // return new Intl.DateTimeFormat(lng).format(value);
        }
        if (format === "currency") {
          return new Intl.NumberFormat(lng, {
            style: "currency",
            currency: "INR",
          }).format(value);
        }
      },
    },
    
  });

export default i18n;
