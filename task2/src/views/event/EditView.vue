<script setup lang="ts">
import { toRefs } from 'vue'
import { useRouter } from 'vue-router' // 导入路由
import { useMessageStore } from '@/stores/message' // 导入消息Store
import { type Event } from '@/types'

const props = defineProps<{
  event: Event
  id: String
}>()

const { event } = toRefs(props)
const router = useRouter() // 初始化路由
const messageStore = useMessageStore() // 初始化消息Store

// 点击保存按钮的处理函数
const saveChanges = () => {
  // 更新闪信内容（1.6要求：数据已更新）
  messageStore.updateMessage(`The data for ${event.value.title} has been updated`)
  // 3秒后清除闪信
  setTimeout(() => {
    messageStore.resetMessage()
  }, 3000)
  // 跳转到详情页
  router.push({ 
    name: 'event-detail-view', 
    params: { id: props.id } 
  })
}
</script>

<template>
  <div>
    <p>Edit event here</p>
    <!-- 添加保存按钮，绑定点击事件 -->
    <button @click="saveChanges">Save Changes</button>
  </div>
</template>