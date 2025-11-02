<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useMessageStore } from '@/stores/message'
import { storeToRefs } from 'pinia'

// 兼容写法：直接从主包导入（避免子路径解析问题）
import { inject } from '@vercel/analytics'
import { SpeedInsights } from '@vercel/speed-insights'

// 注入分析工具（在组件挂载后执行）
inject()

const store = useMessageStore()
const { message } = storeToRefs(store)
</script>

<template>
  <!-- 速度分析组件 -->
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
