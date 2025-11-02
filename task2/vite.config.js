import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  // 关键配置：允许 Vercel 相关包被正常打包（避免被 Rollup 排除）
  build: {
    rollupOptions: {
      external: [], // 清空外部依赖列表，确保 @vercel 包被正确打包
      output: {
        globals: {
          '@vercel/analytics': 'VercelAnalytics',
          '@vercel/speed-insights': 'VercelSpeedInsights'
        }
      }
    }
  }
})
