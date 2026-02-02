<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppTopBar from '@/components/layout/AppTopBar.vue'
</script>

<template>
  <v-app>
    <AppTopBar />
    <v-main class="app-shell">
      <RouterView />
    </v-main>
  </v-app>
</template>

<style scoped>
.app-shell {
  background: linear-gradient(180deg, rgba(86, 102, 255, 0.06), rgba(255, 255, 255, 0.9));
  min-height: 100vh;
}
</style>
