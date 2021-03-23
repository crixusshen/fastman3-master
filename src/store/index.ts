/*
 * @Author: shenzhiwei
 * @Date: 2021-03-23 09:15:45
 * @Company: orientsec.com.cn
 * @Description: Store 核心封装
 */
import { createLogger } from 'redux-logger'
import models from '../models'
import dvaCore from '../dvaCore'

const dva = dvaCore.createApp({
  initialState: {},
  models: models,
  onAction: createLogger(),
  onError(e, dispatch) {
    console.log('发生错误[dva] ===> ', e, dispatch)
  },
})
const store = dva.getStore()

export default store
