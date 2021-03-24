/*
 * @Author: shenzhiwei
 * @Date: 2021-03-24 09:28:33
 * @Company: orientsec.com.cn
 * @Description: 公共 model
 */
import _modelExtend from 'dva-model-extend';

const commonModel = {
  reducers: {
    updateState(state: any, { payload }: any) {
      return {
        ...state,
        ...payload,
      }
    },
    error(state: any, { payload }: any) {
      return {
        ...state,
        error: payload,
      }
    },
  },
};

const modelExtend = <T>(model: DvaModel<T>): DvaModel<T> => _modelExtend(commonModel, model);

export {
  commonModel,
  modelExtend
}
