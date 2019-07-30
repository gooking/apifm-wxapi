/* eslint-disable */
const WXAPI = require('../../components/index')
//WXAPI.init('gooking')

Page({
  data: {},
  onLoad(){
    WXAPI.banners().then(res => {
      console.log('banners-index:', res)
    })
  }
})
