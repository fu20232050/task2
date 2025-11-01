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
  build: {
    outDir: 'dist', // 保持默认输出目录
    // 新增：解决 Vercel 分析模块 Rollup 解析问题
    rollupOptions: {
      external: ['@vercel/analytics', '@vercel/speed-insights'], // 标记外部依赖，避免打包冲突
      output: {
        globals: {
          '@vercel/analytics': 'VercelAnalytics',
          '@vercel/speed-insights': 'VercelSpeedInsights'
        }
      }
    }
  }
})
