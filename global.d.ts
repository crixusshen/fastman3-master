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

declare interface ReduxAction {
	type: string,
	[propName: string]: any,
}

declare interface Dispatch {
	<A extends ReduxAction>(action: A): A;
}

declare type ReduxSagaEffects = {
	call: (p: (arg: any) => Promise<any>, arg?: any) => Promise<any>
	put: (action: ReduxAction) => void
	select: (state: any) => any
}

declare interface DvaModelReducer<T> {
	(preState: T, action: ReduxAction): object
}

declare interface DvaModelReducers<T> {
	[reducerName: string]: DvaModelReducer<T>
}

declare interface DvaModelEffectFn {
	(action: ReduxAction, sagaEffects: ReduxSagaEffects): any
}

declare interface ReduxSagaTaker {
	type: string,
	[propsName: string]: any
}

declare interface DvaModelEffectWithTaker extends Array<ReduxSagaTaker | DvaModelEffectFn> {
	[index: number]: ReduxSagaTaker | DvaModelEffectFn,
}

declare type DvaModelEffect = DvaModelEffectFn | DvaModelEffectWithTaker

declare interface DvaModelEffects {
	[effectName: string]: DvaModelEffect
}

declare interface DvaModel<T> {
	namespace: string,
	state?: T,
	reducers?: DvaModelReducers<T>,
	effects?: DvaModelEffects,
	subscriptions?: object
}

declare type DvaApp = {
	_models: any
	_store: any
	_plugin: any
	use: (...args: any[]) => any
	model: any
	start: any
}

declare type DvaSetupParams = {
	dispatch: Dispatch
	history: History
}
