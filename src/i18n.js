import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-http-backend";
import ar from "./locales/ar.json";
import en from "./locales/en.json";
const availableLanguages = ["en", "ar"];
const localStorageKey = "selectedLanguage";

const resources = {
  ar: {
    translation: ar,
  },
  en: {
    translation: en,
  },
};

const savedLanguage = localStorage.getItem(localStorageKey);
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",

    detection: {
      order: ["path", "cookie", "htmlTag", "localStorage", "subdomain"],
      caches: ["cookie"],
    },
    whitelist: availableLanguages,

    interpolation: {
      escapeValue: false,
    },
    lng: savedLanguage || "ar",
  });

i18n.on("languageChanged", (newLang) => {
  localStorage.setItem(localStorageKey, newLang);
});
export default i18n;
