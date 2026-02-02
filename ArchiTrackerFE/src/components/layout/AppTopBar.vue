<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useTheme } from 'vuetify'

const { t, locale } = useI18n()
const theme = useTheme()

const isDark = computed(() => theme.global.current.value.dark)
const languages = [
  { label: 'Français', value: 'fr' },
  { label: 'English', value: 'en' },
]

const searchValue = ref('')

const toggleTheme = () => {
  theme.global.name.value = isDark.value ? 'archiLight' : 'archiDark'
}

const changeLocale = (value: string) => {
  locale.value = value as 'fr' | 'en'
}
</script>

<template>
<v-app-bar flat color="transparent" class="app-top-bar px-4">
    <v-app-bar-title class="d-flex flex-column">
      <span class="text-h6 font-weight-bold">{{ t('app.name') }}</span>
      <span class="text-body-2 text-medium-emphasis">{{ t('app.tagline') }}</span>
    </v-app-bar-title>

    <v-text-field
      v-model="searchValue"
      :label="t('topbar.search')"
      prepend-inner-icon="mdi-magnify"
      variant="outlined"
      hide-details
      density="comfortable"
      class="app-top-bar__search"
    ></v-text-field>

    <v-btn
      :prepend-icon="isDark ? 'mdi-white-balance-sunny' : 'mdi-weather-night'"
      variant="text"
      @click="toggleTheme"
      class="mx-2"
    >
      {{ isDark ? t('topbar.theme.light') : t('topbar.theme.dark') }}
    </v-btn>

    <v-select
      class="app-top-bar__lang"
      :items="languages"
      item-title="label"
      item-value="value"
      :model-value="locale"
      @update:model-value="changeLocale"
      :label="t('topbar.language')"
      variant="outlined"
      hide-details
      density="comfortable"
      style="max-width: 150px"
    ></v-select>

    <v-btn color="primary" class="ms-4" prepend-icon="mdi-plus">{{ t('topbar.newReport') }}</v-btn>
  </v-app-bar>
</template>

<style scoped>
.app-top-bar {
  backdrop-filter: blur(20px);
  background-color: rgba(255, 255, 255, 0.8) !important;
}

:deep(.v-toolbar__content) {
  gap: 12px;
}

:deep(.v-toolbar-title__placeholder) {
  gap: 2px;
}

.app-top-bar__search {
  max-width: 320px;
}

.app-top-bar__lang {
  min-width: 120px;
}

@media (min-width: 960px) {
  .app-top-bar {
    padding-inline: 48px !important;
  }
}

@media (max-width: 960px) {
  .app-top-bar {
    flex-wrap: wrap;
  }

  .app-top-bar__search {
    order: 3;
    width: 100%;
    max-width: 100%;
    margin-top: 12px;
  }
}
</style>
