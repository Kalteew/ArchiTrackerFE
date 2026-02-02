import { createI18n } from 'vue-i18n'
import fr from '@/locales/fr.json'
import en from '@/locales/en.json'

export type MessageSchema = typeof fr
export type AvailableLocale = 'fr' | 'en'

const browserLocale = typeof navigator !== 'undefined' ? navigator.language : 'fr'
const initialLocale: AvailableLocale = browserLocale.startsWith('en') ? 'en' : 'fr'

const i18n = createI18n<[MessageSchema], AvailableLocale>({
  legacy: false,
  locale: initialLocale,
  fallbackLocale: 'fr',
  messages: {
    fr,
    en,
  },
})

export default i18n
