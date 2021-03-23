/*
 * @Author: shenzhiwei
 * @Date: 2021-03-22 18:07:24
 * @Company: orientsec.com.cn
 * @Description: counter 视图组件
 */
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View, Text } from '@tarojs/components'
import { AtButton, AtCard } from 'taro-ui'

import './index.scss'

type PageStateProps = {
  dispatch: Function
  count: number
}
type PageDispatchProps = {
  // getDataList: (payload: any) => void // 无用
  onIncrement: () => void
  onDecrement: () => void
}
type PageOwnProps = {}
type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Counter {
  props: IProps
}

// 修饰器只能作用域 class 上
@connect(
  state => ({
    count: state.counter.count,
  }),
  dispatch => ({
    // getDataList(payload: any): void {
    //   dispatch({
    //     type: 'counter/getDataList',
    //     payload,
    //   })
    // },
    onIncrement(): void {
      dispatch({
        type: 'counter/increment',
      })
    },
    onDecrement(): void {
      dispatch({
        type: 'counter/decrement',
      })
    },
  })
)
class Counter extends Component {
  render() {
    return (
      <View className="counter">
        <AtCard
          extra="dva与immer"
          title="计数-状态管理"
          thumb="http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png"
        >
          <Text>Count: {this.props.count}</Text>
          <AtButton
            size="small"
            circle={true}
            type="primary"
            onClick={this.props.onIncrement}
            className="counter--btn"
          >
            {' '}
            +{' '}
          </AtButton>
          <AtButton
            size="small"
            circle={true}
            type="secondary"
            onClick={this.props.onDecrement}
            className="counter--btn"
          >
            {' '}
            -{' '}
          </AtButton>
        </AtCard>
      </View>
    )
  }
}

export default Counter;
