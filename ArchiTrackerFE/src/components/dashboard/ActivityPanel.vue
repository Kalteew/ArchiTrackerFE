<script setup lang="ts">
import type { ActivityItem } from '@/modules/dashboard/data'
import { useI18n } from 'vue-i18n'

const props = defineProps<{
  items: ActivityItem[]
}>()

const { t } = useI18n()
</script>

<template>
  <v-card class="activity-panel" elevation="3">
    <v-card-title class="d-flex align-center justify-space-between">
      <div>
        <p class="text-caption text-uppercase text-medium-emphasis mb-1">{{ t('dashboard.activity.title') }}</p>
        <div class="text-h5 font-weight-bold">{{ t('dashboard.activity.documents') }}</div>
      </div>
      <v-btn variant="text" size="small">{{ t('common.viewAll') }}</v-btn>
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      <v-timeline density="compact" align="start">
        <v-timeline-item
          v-for="item in props.items"
          :key="item.id"
          :dot-color="item.color"
          :icon="'mdi-check-circle'"
        >
          <div class="d-flex justify-space-between align-center mb-1">
            <div class="text-subtitle-1 font-weight-medium">{{ item.project }}</div>
            <span class="text-caption text-medium-emphasis">{{ item.time }}</span>
          </div>
          <p class="text-body-2 mb-2">{{ item.description }}</p>
          <v-chip :color="item.color" variant="tonal" size="small">{{ item.tag }}</v-chip>
        </v-timeline-item>
      </v-timeline>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.activity-panel {
  border-radius: 24px;
}
</style>
