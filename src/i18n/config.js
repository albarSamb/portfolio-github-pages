import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import frTranslations from './fr.json';
import enTranslations from './en.json';

const resources = {
  fr: { translation: frTranslations },
  en: { translation: enTranslations },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'fr',
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false,
    },
  });

i18n.on('languageChanged', (lng) => {
  localStorage.setItem('language', lng);
});

export default i18n;
