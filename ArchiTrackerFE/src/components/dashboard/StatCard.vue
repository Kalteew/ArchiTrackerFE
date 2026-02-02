<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title: string
    value: number | string
    trend?: string
    helper?: string
    icon?: string
    accent?: string
  }>(),
  {
    accent: 'primary',
  },
)
</script>

<template>
  <v-card class="stat-card" elevation="3">
    <div class="stat-card__header">
      <div class="stat-card__title">
        <p class="text-caption text-uppercase text-medium-emphasis mb-1">{{ title }}</p>
        <div class="text-h4 font-weight-bold">{{ value }}</div>
      </div>
      <v-avatar size="48" :color="props.accent" variant="tonal">
        <v-icon :icon="icon" size="28"></v-icon>
      </v-avatar>
    </div>
    <div class="stat-card__body">
      <v-chip v-if="trend" :color="props.accent" variant="tonal" size="small" class="font-weight-medium">
        {{ trend }}
      </v-chip>
      <p v-if="helper" class="text-body-2 text-medium-emphasis mt-2">{{ helper }}</p>
    </div>
  </v-card>
</template>

<style scoped>
.stat-card {
  min-height: 180px;
  border-radius: 20px;
  padding: 20px;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(244, 246, 251, 0.9));
  backdrop-filter: blur(12px);
}

.stat-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.stat-card__title {
  flex: 1;
}
</style>
