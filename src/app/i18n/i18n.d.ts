import "i18next";

import ru from "../../../public/locales/ru/translation.json";
import en from "../../../public/locales/en/translation.json";

declare module "i18next" {
  // Extend CustomTypeOptions
  interface CustomTypeOptions {
    // custom namespace type, if you changed it
    defaultNS: "ns1";
    // custom resources type
    resources: {
      ru: typeof ru;
      en: typeof en;
    };
    
    // other
  }
}
