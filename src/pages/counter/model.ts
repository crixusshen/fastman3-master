/*
 * @Author: shenzhiwei
 * @Date: 2021-03-23 08:23:42
 * @Company: orientsec.com.cn
 * @Description: counter 业务逻辑
 */
import { modelExtend } from "@/models/common";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

/**
 * 定义该命名空间下的初始化状态和隐式类型
 * 注：请开发者务必声明类型
 */
type CurrentState = {
  count: number,
};

/**
 * 声明业务 model 需通过 modelExtend<typeof CurrentState> 来创建
 */
export default modelExtend<CurrentState>({
  namespace: "counter",
  state: {
    count: 0
  },
  effects: {
    *increment(action: ReduxAction, { put }: ReduxSagaEffects) {
      yield put({ type: INCREMENT });
    },
    *decrement(action: ReduxAction, { put }: ReduxSagaEffects) {
      yield put({ type: DECREMENT })
    },
  },
  reducers: {
    INCREMENT(preState: CurrentState) {
      return Object.assign({}, preState, {
        count: preState.count + 1,
      })
    },
    DECREMENT(preState: CurrentState) {
      return Object.assign({}, preState, {
        count: preState.count - 1,
      })
    },
  },
});
