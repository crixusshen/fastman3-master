/*
 * @Author: shenzhiwei
 * @Date: 2021-03-23 08:23:42
 * @Company: orientsec.com.cn
 * @Description: counter 业务逻辑层
 */
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const initState = {
  count: 0,
};

export default {
  namespace: "counter",
  state: initState,
  effects: {
    *increment(_: void, { put }: DvaApi) {
      yield put({ type: INCREMENT });
    },
    *decrement(_: void, { put }: DvaApi) {
      yield put({ type: DECREMENT })
    },
  },
  reducers: {
    INCREMENT(state: any): any {
      return Object.assign({}, state, {
        count: state.count + 1,
      })
    },
    DECREMENT(state: any): any {
      return Object.assign({}, state, {
        count: state.count - 1,
      })
    },
  },
}
