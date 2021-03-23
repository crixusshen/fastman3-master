/*
 * @Author: shenzhiwei
 * @Date: 2021-03-22 15:53:53
 * @Company: orientsec.com.cn
 * @Description: App 入口
 */
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import './app.scss'

class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return <Provider store={store}>{this.props.children}</Provider>
  }
}

export default App
