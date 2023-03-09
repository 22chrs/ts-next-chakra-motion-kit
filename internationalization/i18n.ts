import { en_US } from '@/internationalization/locales/en/en_US';
import { de_DE } from '@/internationalization/locales/de/de_DE';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import XHR from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: en_US,
  },
  de: {
    translation: de_DE,
  },
};

export const availableLanguages = Object.keys(resources);

const options = {
  order: ['localStorage', 'navigator'],
  caches: ['localStorage'],
};

i18n
  .use(XHR)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'de',
    detection: options,
    supportedLngs: ['de', 'en'],
    interpolation: {
      escapeValue: false,
    },
    debug: false,
  });

export default i18n;
