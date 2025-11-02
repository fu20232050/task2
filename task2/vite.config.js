import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()], // 仅保留 Vue 插件
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    },
    // 强制解析 Vue 相关包的正确路径
    dedupe: ['vue']
  }
})
