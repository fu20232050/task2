<!-- <script setup lang="ts">
import EventCard from '@/components/EventCard.vue'
import { type Event } from '@/types'
import { ref, computed, watchEffect } from 'vue'
import EventService from '@/services/EventService'
import { useRouter } from 'vue-router'

const router = useRouter()
const events = ref<Event[] | null>(null)
const totalEvents = ref(0)

const props = defineProps({
  page: {
    type: Number,
    required: true
  },
  perPage: {
    type: Number,
    default: 3
  }
})

const page = computed(() => props.page)
const perPage = computed(() => props.perPage)

// 使用 perPage 计算是否有下一页
const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalEvents.value / perPage.value)
  return page.value < totalPages
})

// 直接使用 watchEffect，不需要放在 onMounted 中
watchEffect(() => {
  //events.value = null
  EventService.getEvents(perPage.value, page.value)
    .then((response) => {
      events.value = response.data
      totalEvents.value =6
      //totalEvents.value = parseInt(response.headers['x-total-count'] || '0')
    })
    .catch((error) => {
      console.error('There was an error!', error)
    })

})

// 处理每页数量变化
const onPerPageChange = (event: Event) => {
  const target = event.target as HTMLSelectElement
  const newPerPage = parseInt(target.value)
  
  router.push({
    name: 'event-list-view',
    query: { 
      page: 1,
      perPage: newPerPage 
    }
  })
}
</script> -->


<script setup lang="ts">
import EventCard from '@/components/EventCard.vue'
import { type Event } from '@/types'
import { ref, computed, watchEffect, onMounted } from 'vue'
import EventService from '@/services/EventService'
import { useRouter } from 'vue-router'

const router = useRouter()
const allEvents = ref<Event[]>([]) // 存储所有事件
const totalEvents = ref(0)

const props = defineProps({
  page: {
    type: Number,
    required: true
  },
  perPage: {
    type: Number,
    default: 3
  }
})

const page = computed(() => props.page)
const perPage = computed(() => props.perPage)

// 计算当前页显示的事件
const events = computed(() => {
  const startIndex = (page.value - 1) * perPage.value
  const endIndex = startIndex + perPage.value
  return allEvents.value.slice(startIndex, endIndex)
})

// 计算是否有下一页
const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalEvents.value / perPage.value)
  return page.value < totalPages
})

// 获取所有事件
const fetchAllEvents = async () => {
  try {
    console.log('获取所有事件...')
    // 这里需要修改 EventService 添加 getAllEvents 方法
    const response = await EventService.getAllEvents()
    allEvents.value = response.data
    totalEvents.value = allEvents.value.length
    console.log('总事件数:', totalEvents.value)
    console.log('当前显示事件:', events.value.length)
  } catch (error) {
    console.error('获取事件出错:', error)
  }
}

// 监听页码和每页数量变化
watchEffect(() => {
  console.log('页码变化:', page.value, '每页数量:', perPage.value)
  // 数据已经在 computed 中处理，这里只需要确保数据已加载
})

onMounted(() => {
  fetchAllEvents()
})

// 处理每页数量变化
const onPerPageChange = (event: Event) => {
  const target = event.target as HTMLSelectElement
  const newPerPage = parseInt(target.value)
  
  router.push({
    name: 'event-list-view',
    query: { 
      page: 1,
      perPage: newPerPage 
    }
  })
}
</script>


<template>
  <h1>Events For Good</h1>
  <!-- 每页显示数量选择器 -->
  <div class="my-5 text-center">
    <label for="per-page">Events per page: </label>
    <select 
      id="per-page" 
      :value="perPage" 
      @change="onPerPageChange"
      class="px-2 py-1 border border-gray-300 rounded bg-white"
    >
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="20">20</option>
    </select>
  </div>

  <div class="flex flex-col items-center">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
  
  <div class="flex justify-center w-[290px] mx-auto my-5">
    <RouterLink
      id="page-prev"
      class="flex-1 text-left p-2 border border-gray-300 mx-1 text-gray-800 hover:bg-gray-100 transition-colors"
      :to="{ name: 'event-list-view', query: { page: page - 1, perPage: perPage } }"
      rel="prev"
      v-if="page != 1"
    >&#60; Prev Page</RouterLink>
    
    <RouterLink
      id="page-next"
      class="flex-1 text-right p-2 border border-gray-300 mx-1 text-gray-800 hover:bg-gray-100 transition-colors"
      :to="{ name: 'event-list-view', query: { page: page + 1, perPage: perPage } }"
      rel="next"
      v-if="hasNextPage"
    >Next Page &#62;</RouterLink>
  </div>
</template>

<style scoped>
/* 已使用Tailwind CSS类替代所有样式 */
</style>