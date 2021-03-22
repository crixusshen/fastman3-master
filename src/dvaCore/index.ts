/*
 * @Author: shenzhiwei
 * @Date: 2021-03-22 16:12:31
 * @Company: orientsec.com.cn
 * @Description: dva-core 核心配置
 */
import { create } from "dva-core";
import { createLogger } from "redux-logger";
import immer from "dva-immer";
import createLoading from "dva-loading";

let app;
const createApp = (opt) => {
  // 集成 redux 日志
  opt.onAction = [createLogger()];
  const app = create(opt);
  app.use(immer());
  app.use(createLoading({}));

  // @ts-ignore
  if (!global.registered) {
    opt.models.forEach((model) => app.model(model));
  }
  // @ts-ignore
  global.registered = true;
  app.start();

  const store = app._store;
  app.getStore = () => store;

  const dispatch = store.dispatch;
  app.dispatch = dispatch;

  return app;
};

export default {
  createApp,
  getDispatch() {
    return app.dispatch
  },
  getStore() { // 这个是在非组件的文件中获取 Store 的方法, 不需要可以不暴露
    return app.getStore();
  },
}
