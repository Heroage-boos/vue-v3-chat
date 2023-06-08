import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  //配置代理 https://vitejs.dev/config/server-options.html
  server: {
    proxy: {
      '/pro-api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/pro-api/, '')
      },
      '/api': {
        target: 'http://localhost:8888/',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, '/api')
      }
    }
  }
})
