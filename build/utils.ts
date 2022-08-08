/**
 * 是否生成包预览
 */
export function isReportMode(): boolean {
  return process.env.REPORT === 'true'
}

/**
 * 读取所有环境变量配置文件到 process.env
 */
export function wrapperEnv(envConf: Recordable): ViteEnv {
  const ret: any = {}

  for (const envName of Object.keys(envConf)) {
    let realName = envConf[envName].replace(/\\n/g, '\n')

    // loadEnv 读取的布尔类型是一个字符串 须转换成布尔类型
    realName = realName === 'true' ? true : realName === 'false' ? false : realName

    ret[envName] = realName

    if (typeof realName === 'string') {
      process.env[envName] = realName
    } else if (typeof realName === 'object') {
      process.env[envName] = JSON.stringify(realName)
    }
  }
  return ret
}
