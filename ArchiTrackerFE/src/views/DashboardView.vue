<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <v-container
    class="d-flex flex-column align-center justify-center text-center dashboard-blank"
    fluid
  >
    <div>
      <p class="text-overline text-medium-emphasis mb-1">{{ t('dashboard.title') }}</p>
      <div class="text-h2 font-weight-bold mb-3">{{ t('dashboard.welcome') }}</div>
      <p class="text-body-1 text-medium-emphasis">{{ t('dashboard.subtitle') }}</p>
    </div>
  </v-container>
</template>

<style scoped>
.dashboard-blank {
  min-height: calc(100vh - 120px);
  background: radial-gradient(circle at top, rgba(255, 255, 255, 0.9), rgba(244, 246, 251, 0.8));
}
</style>
