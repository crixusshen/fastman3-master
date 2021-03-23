/*
 * @Author: shenzhiwei
 * @Date: 2021-03-23 10:25:09
 * @Company: orientsec.com.cn
 * @Description: 自定义拦截处理
 */
import Taro, { setStorageSync } from '@tarojs/taro'

const HTTP_STATUS = {
  SUCCESS: 200,
  CREATED: 201,
  ACCEPTED: 202,
  CLIENT_ERROR: 400,
  AUTHENTICATE: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
}

const customInterceptor = chain => {
  const requestParams = chain.requestParams
  return chain.proceed(requestParams).then(res => {
    if (res.statusCode === HTTP_STATUS.NOT_FOUND) {
      return Promise.reject('请求资源不存在')
    } else if (res.statusCode === HTTP_STATUS.BAD_GATEWAY) {
      return Promise.reject('服务端出现了问题')
    } else if (res.statusCode === HTTP_STATUS.FORBIDDEN) {
      setStorageSync('Authorization', '')
      // TODO 根据自身业务修改
      return Promise.reject('没有权限访问')
    } else if (res.statusCode === HTTP_STATUS.AUTHENTICATE) {
      setStorageSync('Authorization', '')
      // TODO 根据自身业务修改
      return Promise.reject('需要鉴权')
    } else if (res.statusCode === HTTP_STATUS.SUCCESS) {
      return res.data
    }
  })
}

const interceptors = [customInterceptor, Taro.interceptors.logInterceptor]

export default interceptors
