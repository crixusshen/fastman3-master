/*
 * @Author: shenzhiwei
 * @Date: 2021-03-23 10:26:43
 * @Company: orientsec.com.cn
 * @Description: 通讯访问地址，计划放到 config 内进行多环境区分管理
 */
export default (url: string): string => {
  let BASE_URL = ''
  if (process.env.NODE_ENV === 'development') {
    // 开发模式
    BASE_URL = url.includes('/api/') ? '' : ''
  } else {
    // 生产环境
    BASE_URL = url.includes('/api/') ? '' : ''
  }
  return BASE_URL
}
