<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useMessageStore } from '@/stores/message'
import { storeToRefs } from 'pinia'
// 确保 SpeedInsights 导入路径为 Vue 专用（文档要求的正确格式）
import { SpeedInsights } from '@vercel/speed-insights/vue';

const store = useMessageStore()
const { message } = storeToRefs(store)
</script>

<template>
  <!-- 1. 挂载 Vercel 速度分析组件（文档要求的必加节点） -->
  <SpeedInsights />
  
  <div class="text-center font-sans text-gray-700 antialias">
    <header>
      <!-- 2. 闪信提示（已加文档要求的 animate-fade 动画类） -->
      <div id="flashMessage" class="animate-fade" v-if="message">
        <h4>{{ message }}</h4>
      </div>
      
      <!-- 3. 标题（文档 12.8 要求新增的部署标识） -->
      <h1>Deploy with Vercel</h1>
      
      <!-- 4. 导航栏（已按文档 9.1 要求配置 exact-active-class） -->
      <div class="wrapper">
        <nav class="py-6">
          <RouterLink class="font-bold text-gray-700" exact-active-class="text-green-500" :to="{ name: 'event-list-view' }">Event</RouterLink> |
          <RouterLink class="font-bold text-gray-700" exact-active-class="text-green-500" :to="{ name: 'about' }">About</RouterLink> |
          <RouterLink class="font-bold text-gray-700" exact-active-class="text-green-500" :to="{ name: 'student-list-view' }">Students</RouterLink>
        </nav>
      </div>
    </header>
    
    <!-- 路由视图出口 -->
    <RouterView />
  </div>
</template>

<style scoped>
/* 补充：确保 h2 样式与 Tailwind 全局配置兼容（文档 8 要求的 @apply 用法） */
h2 {
  @apply text-lg;
}

/* 可选：为闪信提示添加基础样式，避免动画生效时无视觉反馈 */
#flashMessage {
  @apply py-2 px-4 mb-4;
}
</style>
