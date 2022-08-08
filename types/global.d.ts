declare type Recordable<T = any> = Record<string, T>

declare interface ViteEnv {
  VITE_PUBLIC_PATH: string
  VITE_DROP_CONSOLE: boolean
  VITE_GLOB_API_URL: string
}
