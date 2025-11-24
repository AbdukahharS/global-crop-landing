import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import enTranslations from './locales/en.json'
import ruTranslations from './locales/ru.json'
import uzLatTranslations from './locales/uz-lat.json'
import uzCyrTranslations from './locales/uz-cyr.json'

const resources = {
  en: { translation: enTranslations },
  ru: { translation: ruTranslations },
  'uz-lat': { translation: uzLatTranslations },
  'uz-cyr': { translation: uzCyrTranslations },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'uz-lat', // default language
  fallbackLng: 'uz-lat',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
