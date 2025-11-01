<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { onMounted } from 'vue'
import { useMessageStore } from '@/stores/message'
import { storeToRefs } from 'pinia'

const store = useMessageStore()
const { message } = storeToRefs(store)

// 注入 Vercel 分析工具
const injectAnalytics = () => {
  const script = document.createElement('script')
  script.src = 'https://analytics.vercel.com/v1/script.js'
  script.dataset.project = import.meta.env.VERCEL_PROJECT_ID || ''
  document.head.appendChild(script)
}

const injectSpeedInsights = () => {
  const script = document.createElement('script')
  script.src = 'https://speed-insights.vercel.app/v1/speed-insights.js'
  script.dataset.project = import.meta.env.VERCEL_PROJECT_ID || ''
  document.head.appendChild(script)
}

onMounted(() => {
  injectAnalytics()
  injectSpeedInsights()
})
</script>

<template>
  <div class="text-center font-sans text-gray-700 antialias">
    <header>
      <!-- 闪信提示（使用 Tailwind 动画类） -->
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
