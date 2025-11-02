<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useMessageStore } from '@/stores/message'
import { storeToRefs } from 'pinia'
// 导入 Vercel 官方 Vue 组件（确保版本兼容）
import { Analytics } from '@vercel/analytics/vue'
import { SpeedInsights } from '@vercel/speed-insights/vue'

const store = useMessageStore()
const { message } = storeToRefs(store)
</script>

<template>
  <!-- 直接使用官方组件，自动处理项目关联和脚本加载 -->
  <Analytics />
  <SpeedInsights />
  
  <div class="text-center font-sans text-gray-700 antialias">
    <header>
      <div id="flashMessage" class="animate-fade py-2 px-4 mb-4" v-if="message">
        <h4>{{ message }}</h4>
      </div>
      <h1 class="text-2xl font-bold mb-6">Deploy with Vercel</h1>
      <div class="wrapper">
        <nav class="py-6">
          <RouterLink class="font-bold text-gray-700 hover:text-green-500 transition-colors" exact-active-class="text-green-500" :to="{ name: 'event-list-view' }">Event</RouterLink> |
          <RouterLink class="font-bold text-gray-700 hover:text-green-500 transition-colors" exact-active-class="text-green-500" :to="{ name: 'about' }">About</RouterLink> |
          <RouterLink class="font-bold text-gray-700 hover:text-green-500 transition-colors" exact-active-class="text-green-500" :to="{ name: 'student-list-view' }">Students</RouterLink>
        </nav>
      </div>
    </header>
    <RouterView />
  </div>
</template>

<style scoped>
h2 {
  @apply text-lg;
}
</style>
