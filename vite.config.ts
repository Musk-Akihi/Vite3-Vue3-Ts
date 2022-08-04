import { defineConfig, loadEnv, UserConfig, ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import { resolve } from 'path'
import { createProxy } from './build/vite/proxy'

const root = process.cwd()

function pathResolve(dir: string) {
  return resolve(root, '.', dir)
}

// https://cn.vitejs.dev/config
export default defineConfig(({ mode, command }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, './env')

  const { VITE_PUBLIC_PATH, VITE_DROP_CONSOLE, VITE_GLOB_API_URL } = env

  const VITE_DROP_DEBUGGER = VITE_DROP_CONSOLE === 'true' ? true : false

  const isBuild = command === 'build'

  return {
    base: VITE_PUBLIC_PATH,
    root,
    plugins: [vue(), eslintPlugin()],
    envDir: './env',
    resolve: {
      // 配置别名
      alias: [
        // @/xxx => src/xxx
        {
          find: /@\//,
          replacement: pathResolve('src') + '/'
        },
        // #/xxx => types/xxx
        {
          find: /#\//,
          replacement: pathResolve('types') + '/'
        }
      ]
    },
    css: {
      devSourcemap: true,
      // 传递给 CSS 预处理器的选项 文件扩展名用作选项的键
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/css/main.scss";'
        }
      }
    },
    // 开发服务器选项
    server: {
      // 监听所有本地IP
      host: true,
      port: 3000,
      open: true,
      https: false,
      proxy: createProxy(VITE_GLOB_API_URL)
    },
    // 构建选项
    build: {
      // 混淆器
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: isBuild && VITE_DROP_DEBUGGER,
          drop_debugger: isBuild && VITE_DROP_DEBUGGER
        }
      }
    }
  }
})
