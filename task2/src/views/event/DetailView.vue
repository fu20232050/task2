<script setup lang="ts">
//import { ref, onMounted, defineProps } from 'vue'
import { toRefs, defineProps } from 'vue'
import { type Event } from '@/types'

const props = defineProps<{
  event: Event
  id: String
}>()
const { event } = toRefs(props)
</script>

<template>
  <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
  <p>{{ event.description }}</p>
</template>