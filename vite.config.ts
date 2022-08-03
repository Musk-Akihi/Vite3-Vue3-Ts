import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import path from 'path'

// https://cn.vitejs.dev/config
export default defineConfig({
  plugins: [vue(), eslintPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      // 局样式文件全局注入到项目中
      scss: {
        additionalData: '@import "@/assets/css/main.scss";'
      }
    }
  }
})
