<script setup lang="ts">
import StudentCard from '@/components/StudentCard.vue'
import StudentService from '@/services/StudentService'
import { ref, onMounted } from 'vue'


// 定义学生类型（与组件保持一致）
interface Student {
  id: number
  name: string
  surname: string
  gpa: number
}

const students = ref<Student[]>([])

onMounted(() => {
  StudentService.getStudents()
    .then((response) => {
      students.value = response.data
    })
    .catch((error) => {
      console.error('获取学生数据失败：', error)
    })
})
</script>

<template>
  <h1>Student Information</h1>
  <div class="students">
    <StudentCard v-for="student in students" :key="student.id" :student="student" />
  </div>
</template>

<style scoped>
.students {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>