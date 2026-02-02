<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import type { ReviewItem } from '@/modules/dashboard/data'

const props = defineProps<{
  items: ReviewItem[]
}>()

const { t, locale } = useI18n()

const displayReviews = computed(() => {
  const formatter = new Intl.DateTimeFormat(locale.value, {
    month: 'short',
    day: '2-digit',
  })

  return props.items.map((item) => {
    const parts = formatter.formatToParts(new Date(item.date))
    const day = parts.find((part) => part.type === 'day')?.value ?? ''
    const month = (parts.find((part) => part.type === 'month')?.value ?? '').toUpperCase()
    return { ...item, day, month }
  })
})

const statusColor = (status: ReviewItem['status']) => {
  switch (status) {
    case 'confirmed':
      return 'success'
    case 'pending':
      return 'warning'
    default:
      return 'info'
  }
}

const statusLabel = (status: ReviewItem['status']) => t(`dashboard.reviews.status.${status}`)
const typeLabel = (type: ReviewItem['type']) => t(`dashboard.reviews.type.${type}`)
</script>

<template>
  <v-card class="upcoming-reviews" elevation="3">
    <v-card-title class="d-flex align-center justify-space-between">
      <div>
        <p class="text-caption text-uppercase text-medium-emphasis mb-1">{{ t('dashboard.reviews.title') }}</p>
        <div class="text-h5 font-weight-bold">{{ t('dashboard.reviews.next') }}</div>
      </div>
      <v-btn variant="text" size="small">{{ t('common.viewAll') }}</v-btn>
    </v-card-title>
    <v-divider></v-divider>
    <v-list lines="two" class="py-0" bg-color="transparent">
      <v-list-item v-for="item in displayReviews" :key="item.id" class="px-0">
        <template #prepend>
          <v-avatar size="56" color="primary" variant="tonal" class="me-4">
            <div class="text-center">
              <div class="text-subtitle-1 font-weight-bold">{{ item.day }}</div>
              <div class="text-caption text-medium-emphasis">{{ item.month }}</div>
            </div>
          </v-avatar>
        </template>
        <div class="text-subtitle-1 font-weight-medium">{{ item.project }}</div>
        <div class="text-body-2 text-medium-emphasis">
          {{ typeLabel(item.type) }} • {{ item.facilitator }}
        </div>
        <template #append>
          <v-chip :color="statusColor(item.status)" variant="tonal" class="font-weight-medium" size="small">
            {{ statusLabel(item.status) }}
          </v-chip>
        </template>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<style scoped>
.upcoming-reviews {
  border-radius: 24px;
}
</style>
