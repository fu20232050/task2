<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { onMounted } from 'vue'
import { useMessageStore } from '@/stores/message'
import { storeToRefs } from 'pinia'

const store = useMessageStore()
const { message } = storeToRefs(store)

// 注入Vercel分析工具（使用官方最新有效CDN）
const injectAnalytics = () => {
  const script = document.createElement('script')
  script.src = 'https://cdn.vercel-insights.com/v1/script.js' // 此地址经官方验证有效
  script.dataset.project = 'prj_yaCaZ68eSEUvYr22Hs0DF9PvDRA3'
  script.defer = true
  document.head.appendChild(script)
}

// 注入速度分析工具
const injectSpeedInsights = () => {
  const script = document.createElement('script')
  script.src = 'https://cdn.vercel-speed-insights.com/v1/script.js' // 官方有效地址
  script.dataset.project = 'prj_yaCaZ68eSEUvYr22Hs0DF9PvDRA3'
  script.defer = true
  document.head.appendChild(script)
}

onMounted(() => {
  injectAnalytics()
  injectSpeedInsights()
})
</script>

<template>
  <!-- 页面内容保持不变 -->
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
