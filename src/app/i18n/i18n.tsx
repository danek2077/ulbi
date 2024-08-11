import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import langEN from "../../../public/locales/en/translation.json";
import langRU from "../../../public/locales/ru/translation.json";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
const resources = {
  en: {
    translation: langEN,
  },
  ru: {
    translation: langRU,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    fallbackLng: "ru",
    debug: MODE === "development",
    interpolation: {
      escapeValue: false, // React уже экранирует значения
    },
    keySeparator: false,
  });

export default i18n;
