/*
 * @Author: shenzhiwei
 * @Date: 2021-03-22 16:34:28
 * @Company: orientsec.com.cn
 * @Description: 全局类型配置
 */
declare module '*.png'
declare module '*.gif'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.svg'
declare module '*.css'
declare module '*.less'
declare module '*.scss'
declare module '*.sass'
declare module '*.styl'

// @ts-ignore
declare const process: {
  env: {
    TARO_ENV:
      | 'weapp'
      | 'swan'
      | 'alipay'
      | 'h5'
      | 'rn'
      | 'tt'
      | 'quickapp'
      | 'qq'
      | 'jd'
    [key: string]: any
  }
}

declare interface DvaApi {
  put: Function
  call: Function
  select: Function
}
