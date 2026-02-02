import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify, type ThemeDefinition } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

const archiLight: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#f4f6fb',
    surface: '#ffffff',
    primary: '#5666ff',
    secondary: '#00b5ad',
    accent: '#ff7b54',
    info: '#2196f3',
    success: '#2e7d32',
    warning: '#ffa000',
    error: '#d32f2f',
  },
}

const archiDark: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#0f172a',
    surface: '#1e2433',
    primary: '#8ea2ff',
    secondary: '#54d1c9',
    accent: '#ffb784',
    info: '#64b5f6',
    success: '#81c784',
    warning: '#ffcc80',
    error: '#ef9a9a',
  },
}

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'archiLight',
    themes: {
      archiLight,
      archiDark,
    },
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})

export default vuetify
