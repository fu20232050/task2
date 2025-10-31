import { createApp } from 'vue'
import { createPinia } from 'pinia' // 导入 Pinia 创建函数
//import './style.css'
import './assets/style.css'
import App from './App.vue'
import router from './router' 
import 'nprogress/nprogress.css'

// 1. 创建 Pinia 实例
const pinia = createPinia()

// 2. 创建 Vue 应用
const app = createApp(App)

// 3. 注册 Pinia 和 Router 到应用中
app.use(pinia)
app.use(router)

// 4. 挂载应用
app.mount('#app')