<script setup lang="ts">
// 定义学生类型（若已有可复用，若无则临时定义）
interface Student {
  id: number
  name: string
  surname: string
  gpa: number
}

// 接收父组件传递的学生数据
defineProps<{
  student: Student
}>()
</script>

<template>
  <div class="student-card">
    <h3>{{ student.name }} {{ student.surname }}</h3>
    <p><strong>GPA:</strong> {{ student.gpa }}</p>
  </div>
</template>

<style scoped>
.student-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 16px 0;
  width: 240px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.student-card h3 {
  margin-top: 0;
  color: #2c3e50;
}
</style>