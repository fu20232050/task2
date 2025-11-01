// main.ts
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// 尝试不同的导入方式
import { Analytics } from '@vercel/analytics'

const app = createApp(App)
app.use(Analytics)  // 使用 use 方法
app.use(createPinia())
app.use(router)
app.mount('#app')
