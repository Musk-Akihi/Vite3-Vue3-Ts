import { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import eslintPlugin from 'vite-plugin-eslint'
import legacy from '@vitejs/plugin-legacy'
import { configCompressPlugin } from './compress'
import { configVisualizerPlugin } from './visualizer'

export function createVitePlugins(env: ViteEnv, isBuild: boolean) {
  const vitePlugins: (PluginOption | PluginOption[])[] = [vue(), vueJsx(), eslintPlugin()]
  if (isBuild) {
    /**
     * @vitejs/plugin-legacy
     * Vite默认的浏览器支持基线是原生ESM 此插件为不支持原生ESM的传统浏览器提供支持
     */
    vitePlugins.push(legacy())

    /**
     * vite-plugin-compression
     * 使用 gzip 或者 brotli 来压缩资源
     */
    vitePlugins.push(configCompressPlugin('gzip'))
  }

  /**
   * rollup-plugin-visualizer
   * 依赖分析插件
   */
  vitePlugins.push(configVisualizerPlugin())

  return vitePlugins
}
