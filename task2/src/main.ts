import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// 关键修正：使用 Vue 环境专用导入路径（文档隐含适配要求）
import { inject } from '@vercel/analytics/react' 
// 注入 Vercel 分析功能（确保在 app 挂载前执行）
inject()

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
