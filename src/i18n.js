import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)  // detect browser language automatically
  .use(initReactI18next)  // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          "home": "Home",
          "about": "About",
          "contact": "Contact",
          "Gallery": "Gallery",
          "The House of Education": "The House of Education",
          // add all your keys here
        }
      },
      si: {
        translation: {
          "home": "මුල් පිටුව",
          "about": "අපි ගැන",
          "contact": "සම්බන්ධ වන්න",
          "Gallery": "ගැලරි",
          "The House of Education": "අධ්‍යාපන ගෘහය",
        }
      },
      ta: {
        translation: {
          "home": "முகப்பு",
          "about": "எங்களை பற்றி",
          "contact": "தொடர்பு",
          "Gallery": "கேலரி",
          "The House of Education": "கல்வி இல்லம்",
        }
      },
    },
    fallbackLng: 'en', // default language
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
