import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "E-Thaksalawa": "E-Thaksalawa",
          home: "Home",
          courses: "Courses",
          about: "About",
          contact: "Contact",
          start_learning: "Start Learning",
          select_medium: "Select Medium",
          choose_medium: "-- Choose Medium --",
          select_grade: "Select Grade",
          choose_grade: "-- Choose Grade --",
          grade: "Grade",
          continue: "Continue",
          please_select_both: "Please select both Medium and Grade."
        },
      },
      si: {
        translation: {
          "E-Thaksalawa": "ඊ-තක්ෂලාව",
          home: "මුල් පිටුව",
          courses: "පාඨමාලා",
          about: "අපි ගැන",
          contact: "සම්බන්ධ වන්න",
          start_learning: "ඉගෙනීම ආරම්භ කරන්න",
          select_medium: "මාධ්‍යය තෝරන්න",
          choose_medium: "-- මාධ්‍යය තෝරන්න --",
          select_grade: "ශ්‍රේණිය තෝරන්න",
          choose_grade: "-- ශ්‍රේණිය තෝරන්න --",
          grade: "ශ්‍රේණිය",
          continue: "ඉදිරියට යන්න",
          please_select_both: "කරුණාකර මාධ්‍යය සහ ශ්‍රේණිය තෝරන්න."
        },
      },
      ta: {
        translation: {
          "E-Thaksalawa": "இ-தக்ஷலாவா",
          home: "முகப்பு",
          courses: "பாடநெறிகள்",
          about: "எங்களை பற்றி",
          contact: "தொடர்பு",
          start_learning: "கற்றலை தொடங்கு",
          select_medium: "மொழியைத் தேர்ந்தெடுக்கவும்",
          choose_medium: "-- மொழியைத் தேர்ந்தெடுக்கவும் --",
          select_grade: "தரத்தைத் தேர்ந்தெடுக்கவும்",
          choose_grade: "-- தரத்தைத் தேர்ந்தெடுக்கவும் --",
          grade: "தரம்",
          continue: "தொடரவும்",
          please_select_both: "மொழியும் தரமும் தேர்ந்தெடுக்கவும்."
        },
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
