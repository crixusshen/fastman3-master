/*
 * @Author: shenzhiwei
 * @Date: 2021-03-22 15:53:53
 * @Company: orientsec.com.cn
 * @Description: 全局配置项
 */
export default {
  pages: [
    'pages/index/index',
    'pages/counter/index',
    'pages/data/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#626567',
    selectedColor: '#6190E8',
    backgroundColor: '#FBFBFB',
    borderStyle: 'white',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: './assets/index.png',
        selectedIconPath: './assets/index-select.png',
      },
      {
        pagePath: 'pages/counter/index',
        text: '计数',
        iconPath: './assets/counter.png',
        selectedIconPath: './assets/counter-select.png',
      },
      {
        pagePath: 'pages/data/index',
        text: '数据',
        iconPath: './assets/data.png',
        selectedIconPath: './assets/data-select.png',
      },
      // {
      //   pagePath: 'pages/map/index',
      //   text: '地图',
      //   iconPath: './assets/map.png',
      //   selectedIconPath: './assets/map-select.png',
      // },
    ],
  }
}
