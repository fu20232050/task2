// main.ts
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// 使用默认导入方式
import { inject } from '@vercel/analytics'

// 注入分析
inject()

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
