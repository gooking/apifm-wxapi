/* eslint-disable */
const WXAPI = require('./components/index')
WXAPI.init('gooking')

App({
  onLaunch: function () {
    // 调用简单例子
    WXAPI.queryMobileLocation({
      mobile: '13500000000'
    }).then(res => {
      console.log('queryMobileLocation:', res)
    }).catch(e => {
      console.error('接口调用异常:', e)
    })
    // 读取 banner
    WXAPI.banners().then(res => {
      console.log('banners:', res)
    })
  },
  globalData: {
    
  }
})
