/*
 * @Author: shenzhiwei
 * @Date: 2021-03-22 15:53:53
 * @Company: orientsec.com.cn
 * @Description: 首页视图
 */
import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello Fastman3!</Text>
        <AtButton type='primary'>I need Fastman3 UI</AtButton>
      </View>
    )
  }
}
