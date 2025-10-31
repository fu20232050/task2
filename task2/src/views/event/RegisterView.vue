<script setup lang="ts">
//import { ref, onMounted } from 'vue'
import { toRefs } from 'vue'
import { type Event } from '@/types'
import { useMessageStore } from '@/stores/message'
import { useRouter } from 'vue-router' 

const props = defineProps<{
  event: Event
  id: String
}>()
const { event } = toRefs(props)
const router = useRouter()
const store = useMessageStore()
const register = () => {
  store.updateMessage('You are successfully registered for ' + props.event.title)
  setTimeout(() => {
    store.resetMessage()
  }, 3000)
  router.push({ name: 'event-detail-view', params: { id: props.event.id }
 })
 
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
</script>

<template>
  <p>Register event here</p>
  <button @click="register">Register</button>
</template>