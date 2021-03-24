/*
 * @Author: shenzhiwei
 * @Date: 2021-03-22 18:07:24
 * @Company: orientsec.com.cn
 * @Description: counter 视图组件
 */
import React, { FC, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text } from '@tarojs/components';
import { AtButton, AtCard } from 'taro-ui';

import './index.scss'

/**
 * 声明组件的属性类型
 */
interface CounterProps extends CommonProps {
}

/**
 * 构建组件
 * @param props 组件属性类型
 */
const Counter: FC<CounterProps> = (props) => {
  // 使用 useSelector Hook 从 state 某个命名空间中取状态
  const count = useSelector((state: any) => state.counter.count);
  const dispatch = useDispatch();

  // 声明组件本身的数据状态维护
  const [node, setNode] = useState(3);

  // 替代 componentDidMount 和 componentDidUpdate
  useEffect(() => {
    console.log("Counter useEffect init dispatch")
    // 等同于 componentWillUnmount()
    return () => {
      console.log("Counter useEffect return")
    }
  }, []);

  /**
   * 点击减号事件处理
   * @param e 点击对象
   */
  const onClickMinus = (e) => {
    setNode(node - 1);
    dispatch({
      type: 'counter/decrement'
    });
  };

  return (
    <View className="counter">
        <AtCard
          extra="dva与immer"
          title="计数-状态管理"
          thumb="http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png"
        >
          <View>
            <Text>Count: {count}</Text>
          </View>
          <View>
            <Text>Node: {node}</Text>
          </View>
          <AtButton
            size="small"
            circle={true}
            type="primary"
            onClick={() => dispatch({ type: 'counter/increment' }) }
            className="counter--btn"
          >
            +
          </AtButton>
          <AtButton
            size="small"
            circle={true}
            type="secondary"
            onClick={onClickMinus}
            className="counter--btn"
          >
            -
          </AtButton>
        </AtCard>
      </View>
  );
};

export default Counter;
