/**
 * 用于解析 .env.development 代理配置
 */
import type { ProxyOptions } from 'vite'
type ProxyTargetList = Record<string, ProxyOptions>

export function createProxy(target: string) {
  const ret: ProxyTargetList = {
    '/api': {
      target,
      changeOrigin: true,
      rewrite: path => path.replace(/^\/api/, '')
    }
  }
  return ret
}
