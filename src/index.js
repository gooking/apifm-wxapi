/* eslint-disable */
// 小程序开发api接口工具包，https://github.com/gooking/wxapi
var API_BASE_URL = 'https://api.it120.cc'
var subDomain = '-'
var merchantId = '0'

let request = (url, needSubDomain, method, data) => {
  const _url = API_BASE_URL + (needSubDomain ? '/' + subDomain : '') + url
  const header = {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
  return new Promise((resolve, reject) => {
    wx.request({
      url: _url,
      method: method,
      data: data,
      header,
      success(request) {
        resolve(request.data)
      },
      fail(error) {
        reject(error)
      },
      complete(aaa) {
        // 加载完成
      }
    })
  })
}

/**
 * 小程序的promise没有finally方法，自己扩展下
 */
// Promise.prototype.finally = function (callback) {
//   var Promise = this.constructor;
//   return this.then(
//     function (value) {
//       Promise.resolve(callback()).then(
//         function () {
//           return value;
//         }
//       );
//     },
//     function (reason) {
//       Promise.resolve(callback()).then(
//         function () {
//           throw reason;
//         }
//       );
//     }
//   );
// }

module.exports = {
  init2: (a, b) => {
    API_BASE_URL = a
    subDomain = b
  },
  init: (b) => {
    subDomain = b
  },
  setMerchantId: (mchid) => {
    merchantId = mchid
  },
  init3: ({
    apiBaseUrl = API_BASE_URL,
    subDomain: subD,
    request: req,
  }) => {
    // 某些需求需要定制化 request，需要保证传入自定义 reuqest 与默认 request 参数一致
    if (req) {
      request = req
    }
    API_BASE_URL = apiBaseUrl
    subDomain = subD
  },
  request,
  queryMobileLocation: (mobile = '') => {
    return request('/common/mobile-segment/location', false, 'get', { mobile })
  },
  nextMobileSegment: (data) => {
    return request('/common/mobile-segment/next', false, 'post', data)
  },
  gpsDistance: (data) => {
    return request('/common/map/qq/distance', false, 'post', data)
  },
  commonIP: (ip) => {
    return request('/common/ip', false, 'get', { ip })
  },
  forexRate: (fromCode, toCode) => {
    return request('/forex/rate', true, 'get', { fromCode, toCode })
  },
  queryConfigValue: (key) => {
    return request('/config/value', true, 'get', { key })
  },
  queryConfigBatch: (keys) => {
    return request('/config/values', true, 'get', { keys })
  },
  scoreRules: (data) => {
    return request('/score/send/rule', true, 'post', data)
  },
  scoreSignRules: () => {
    return request('/score/sign/rules', true, 'get', {})
  },
  scoreSign: (token) => {
    return request('/score/sign', true, 'post', {
      token
    })
  },
  scoreSignLogs: (data) => {
    return request('/score/sign/logs', true, 'post', data)
  },
  scoreTodaySignedInfo: (token) => {
    return request('/score/today-signed', true, 'get', {
      token
    })
  },
  scoreExchange: (token, number) => {
    return request('/score/exchange', true, 'post', {
      number,
      token
    })
  },
  scoreExchangeCash: (token, deductionScore) => {
    return request('/score/exchange/cash', true, 'post', {
      deductionScore,
      token
    })
  },
  scoreLogs: (data) => {
    return request('/score/logs', true, 'post', data)
  },
  shareGroupGetScore: (code, referrer, encryptedData, iv) => {
    return request('/score/share/wxa/group', true, 'post', {
      code,
      referrer,
      encryptedData,
      iv
    })
  },
  scoreDeductionRules: (type = '') => {
    return request('/score/deduction/rules', true, 'get', { type })
  },
  scoreTaskList: token => {
    return request('/score/taskList', true, 'get', { token })
  },
  scoreTaskSuccess: (token, type) => {
    return request('/score/taskSuccess', true, 'post', { token, type })
  },
  kanjiaSet: (goodsId) => {
    return request('/shop/goods/kanjia/set/v2', true, 'get', { goodsId })
  },
  kanjiaJoin: (token, kjid) => {
    return request('/shop/goods/kanjia/join', true, 'post', {
      kjid,
      token
    })
  },
  kanjiaDetail: (kjid, joiner) => {
    return request('/shop/goods/kanjia/info', true, 'get', {
      kjid,
      joiner
    })
  },
  kanjiaHelp: (token, kjid, joiner, remark = '') => {
    return request('/shop/goods/kanjia/help', true, 'post', {
      kjid,
      joinerUser: joiner,
      token,
      remark
    })
  },
  kanjiaClear: (token, kjid) => {
    return request('/shop/goods/kanjia/clear', true, 'post', {
      kjid,
      token
    })
  },
  kanjiaMyJoinInfo: (token, kjid) => {
    return request('/shop/goods/kanjia/my', true, 'get', {
      kjid,
      token
    })
  },
  kanjiaHelpDetail: (token, kjid, joiner) => {
    return request('/shop/goods/kanjia/myHelp', true, 'get', {
      kjid,
      joinerUser: joiner,
      token
    })
  },
  checkToken: (token) => {
    return request('/user/check-token', true, 'get', {
      token
    })
  },
  checkReferrer: (referrer) => {
    return request('/user/check-referrer', true, 'get', {
      referrer
    })
  },
  addTempleMsgFormid: (token, type, formId) => {
    return request('/template-msg/wxa/formId', true, 'post', {
      token, type, formId
    })
  },
  sendTempleMsg: (data) => {
    return request('/template-msg/put', true, 'post', data)
  },
  payVariableUrl: (url, data) => {
    return request(url, true, 'post', data)
  },
  wxpay: (data) => {
    return request('/pay/wx/wxapp', true, 'post', data)
  },
  wxpayH5: data => {
    return request('/pay/wx/h5', true, 'post', data);
  },
  wxpayJsapi: (data) => {
    return request('/pay/wx/jsapi', true, 'post', data)
  },
  wxpayQrcode: data => {
    return request('/pay/wx/qrcode', true, 'post', data);
  },
  wxpayCode: data => {
    return request('/pay/wx/paymentCode', true, 'post', data)
  },
  wxpayApp: data => {
    return request('/pay/wx/app', true, 'post', data);
  },
  wxpayFOMO: (data) => {
    return request('/pay/fomo/wxapp', true, 'post', data)
  },
  payNow: (data) => {
    return request('/pay/fomo/payNow', true, 'post', data)
  },
  fomoCheckout: (data) => {
    return request('/pay/fomo/checkout', true, 'post', data)
  },
  wxpayFWS: (data) => {
    return request('/pay/wxfws/wxapp', true, 'post', data)
  },
  ttpay: (data) => {
    return request('/pay/tt/microapp', true, 'post', data)
  },
  ttEcpay: (data) => {
    return request('/pay/tt/ecpay', true, 'post', data)
  },
  payQuery: (token, outTradeId) => {
    return request('/pay/query', true, 'get', { token, outTradeId })
  },
  wxpaySaobei: (data) => {
    return request('/pay/lcsw/wxapp', true, 'post', data)
  },
  wxpayWepayez: (data) => {
    return request('/pay/wepayez/wxapp', true, 'post', data)
  },
  wxpayxpert: (data) => {
    return request('/pay/payxpert/wxapp', true, 'post', data)
  },
  wxpayIPaynow: (data) => {
    return request('/pay/ipaynow/wxapp', true, 'post', data)
  },
  wxpayAirwallex: (data) => {
    return request('/pay/airwallex/wxapp', true, 'post', data)
  },
  wxSphGetpaymentparams: (token, orderId) => {
    return request('/pay/wxsph/getpaymentparams', true, 'post', { token, orderId })
  },
  paypalCheckout: (data) => {
    return request('/pay/paypal/checkout', true, 'post', data)
  },
  alipay: (data) => {
    return request('/pay/alipay/semiAutomatic/payurl', true, 'post', data)
  },
  alipayMP: (data) => {
    return request('/pay/alipay/gate/mp', true, 'post', data)
  },
  alipayAPP: (data) => {
    return request('/pay/alipay/gate/app', true, 'post', data)
  },
  alipayQrcode: (data) => {
    return request('/pay/alipay/gate/qrcode', true, 'post', data)
  },
  alipayQrcode2: (data) => {
    return request('/pay/alipay/gate/paymentCode', true, 'post', data)
  },
  kasipayH5: (data) => {
    return request('/pay/kasipay/h5', true, 'post', data)
  },
  hmpayJsapi: (data) => {
    return request('/pay/sandpay/hmpay/jsapi', true, 'post', data)
  },
  login_wx: (code) => {
    return request('/user/wxapp/login', true, 'post', {
      code,
      type: 2
    })
  },
  loginWxV2: (code, appid) => {
    return request('/user/wxapp/login/v2', true, 'post', {
      code,
      appid
    })
  },
  login_tt: (code) => {
    return request('/user/tt/microapp/login', true, 'post', {
      code
    })
  },
  login_q: (code) => {
    return request('/user/q/login', true, 'post', {
      code,
      type: 2
    })
  },
  loginWxaMobile: (code, encryptedData, iv) => {
    return request('/user/wxapp/login/mobile', true, 'post', {
      code,
      encryptedData,
      iv
    })
  },
  loginWxaMobileV2: data => {
    return request('/user/wxapp/login/mobile', true, 'post', data)
  },
  loginWxaMobileV3: data => {
    return request('/user/wxapp/login/mobile/v2', true, 'post', data)
  },
  fetchWxaMobile: (code) => {
    return request('/user/wxapp/getMobile', true, 'get', { code })
  },
  login_username: (data) => {
    return request('/user/username/login', true, 'post', data)
  },
  bindUsername: (token, username, pwd = '') => {
    return request('/user/username/bindUsername', true, 'post', {
      token, username, pwd
    })
  },
  login_mobile: (mobile, pwd, deviceId = '', deviceName = '') => {
    return request('/user/m/login', true, 'post', {
      mobile, pwd, deviceId, deviceName
    })
  },
  loginMobileV2: data => {
    return request('/user/m/login', true, 'post', data)
  },
  loginMobileSmsCode: data => {
    return request('/user/m/loginMobile', true, 'post', data)
  },
  resetPwdUseMobileCode: (mobile, pwd, code) => {
    return request('/user/m/reset-pwd', true, 'post', {
      mobile, pwd, code
    })
  },
  resetPwdUseEmailCode: (email, pwd, code) => {
    return request('/user/email/reset-pwd', true, 'post', {
      email, pwd, code
    })
  },
  wxmpAuth: data => {
    return request('/user/wxmp/auth', true, 'post', data)
  },
  register_complex: (data) => {
    return request('/user/wxapp/register/complex', true, 'post', data)
  },
  register_tt: (data) => {
    return request('/user/tt/microapp/register', true, 'post', data)
  },
  registerQ: (data) => {
    return request('/user/q/register', true, 'post', data)
  },
  qqAuthorize: (data) => {
    return request('/user/q/authorize', true, 'post', data)
  },
  qqQrcode: (content) => {
    return request('/user/q/qrcode', true, 'post', { content })
  },
  register_simple: (data) => {
    return request('/user/wxapp/register/simple', true, 'post', data)
  },
  authorize: (data) => {
    return request('/user/wxapp/authorize', true, 'post', data)
  },
  ttAuthorize: (data) => {
    return request('/user/tt/microapp/authorize', true, 'post', data)
  },
  register_username: (data) => {
    return request('/user/username/register', true, 'post', data)
  },
  register_mobile: (data) => {
    return request('/user/m/register', true, 'post', data)
  },
  bannerTypes: () => {
    return request('/banner/types', true, 'get')
  },
  banners: (data) => {
    return request('/banner/list', true, 'get', data)
  },
  goodsCategory: () => {
    return request('/shop/goods/category/all', true, 'get')
  },
  goodsCategoryV2: (shopId = '') => {
    return request('/shop/goods/category/all', true, 'get', { shopId })
  },
  goodsCategoryDetail: (id) => {
    return request('/shop/goods/category/info', true, 'get', { id })
  },
  goods: (data) => {
    if (!data) {
      data = {}
    }
    const shopIds = wx.getStorageSync('shopIds')
    if (shopIds) {
      data.shopId = shopIds
    }
    return request('/shop/goods/list', true, 'post', data)
  },
  goodsv2: (data) => {
    if (!data) {
      data = {}
    }
    const shopIds = wx.getStorageSync('shopIds')
    if (shopIds) {
      data.shopId = shopIds
    }
    return request('/shop/goods/list/v2', true, 'post', data)
  },
  goodsDetail: (id, token = '') => {
    return request('/shop/goods/detail', true, 'get', {
      id, token
    })
  },
  goodsDetailV2: data => {
    return request('/shop/goods/detail', true, 'get', data)
  },
  goodsLimitations: (goodsId, priceId = '') => {
    return request('/shop/goods/limitation', true, 'get', {
      goodsId, priceId
    })
  },
  goodsLimitationsV2: (goodsId, propertyChildIds = '') => {
    return request('/shop/goods/limitation', true, 'get', {
      goodsId, propertyChildIds
    })
  },
  goodsAddition: (goodsId) => {
    return request('/shop/goods/goodsAddition', true, 'get', {
      goodsId
    })
  },
  goodsVideoEpisodesList: (goodsId, token = '') => {
    return request('/goodsVideoEpisodes/list', true, 'get', {
      goodsId, token
    })
  },
  goodsVideoEpisodesBuy: (goodsId, number, token) => {
    return request('/goodsVideoEpisodes/buy', true, 'post', {
      goodsId, number, token
    })
  },
  goodsStatistics: data => {
    return request('/shop/goods/statistics/days', true, 'post', data)
  },
  goodsUseless: (data) => {
    return request('/shop/goods/useful', true, 'post', data)
  },
  pushNewGoods: data => {
    return request('/shop/goods/putOrUpdate', true, 'post', data)
  },
  deleteMyGoods: (token, id) => {
    return request('/shop/goods/del', true, 'post', { token, id })
  },
  goodsPrice: (goodsId, propertyChildIds) => {
    return request('/shop/goods/price', true, 'post', {
      goodsId, propertyChildIds
    })
  },
  goodsPriceV2: data => {
    return request('/shop/goods/price', true, 'post', data)
  },
  goodsPriceDaily: (goodsId, priceId = '') => {
    return request('/shop/goods/price/day', true, 'get', {
      goodsId, priceId
    })
  },
  goodsPriceFreight: (data) => {
    return request('/shop/goods/price/freight', true, 'get', data)
  },
  goodsRebate: (token, goodsId) => {
    return request('/shop/goods/rebate/v2', true, 'get', {
      token, goodsId
    })
  },
  goodsReputation: (data) => {
    return request('/shop/goods/reputation', true, 'post', data)
  },
  goodsReputationV2: (data) => {
    return request('/shop/goods/reputation/v2', true, 'post', data)
  },
  myBuyGoodsHis: (data) => {
    return request('/shop/goods/his/list', true, 'post', data)
  },
  myBuyGoodsHisDelete: (token, id = '', goodsId = '') => {
    return request('/shop/goods/his/delete', true, 'post', {
      token, id, goodsId
    })
  },
  goodsFavList: data => {
    return request('/shop/goods/fav/list', true, 'post', data)
  },
  goodsFavListV2: data => {
    return request('/shop/goods/fav/list/v2', true, 'post', data)
  },
  goodsFavPut: (token, goodsId) => {
    return request('/shop/goods/fav/add', true, 'post', {
      token, goodsId
    })
  },
  goodsFavAdd: data => {
    return request('/shop/goods/fav/add', true, 'post', data)
  },
  goodsFavCheck: (token, goodsId) => {
    return request('/shop/goods/fav/check', true, 'get', {
      token, goodsId
    })
  },
  goodsFavCheckV2: data => {
    return request('/shop/goods/fav/check', true, 'get', data)
  },
  goodsFavDelete: (token, id = '', goodsId = '') => {
    return request('/shop/goods/fav/delete', true, 'post', {
      token, id, goodsId
    })
  },
  goodsFavDeleteV2: data => {
    return request('/shop/goods/fav/delete', true, 'post', data)
  },
  goodsSeckillGrab: (token, goodsId, seconds) => {
    return request('/goods/seckill/grab', true, 'post', { token, goodsId, seconds })
  },
  coupons: (data) => {
    return request('/discounts/coupons', true, 'get', data)
  },
  couponDetail: (id) => {
    return request('/discounts/detail', true, 'get', {
      id
    })
  },
  couponStatistics: (token) => {
    return request('/discounts/statistics', true, 'get', { token});
  },
  myCoupons: (data) => {
    return request('/discounts/my', true, 'get', data)
  },
  mergeCouponsRules: () => {
    return request('/discounts/merge/list', true, 'get')
  },
  mergeCoupons: (data) => {
    return request('/discounts/merge', true, 'post', data)
  },
  fetchCoupons: (data) => {
    return request('/discounts/fetch', true, 'post', data)
  },
  sendCoupons: (data) => {
    return request('/discounts/send', true, 'post', data)
  },
  exchangeCoupons: (token, number, pwd, extJsonStr = '') => {
    return request('/discounts/exchange', true, 'post', {
      token, number, pwd, extJsonStr
    })
  },
  couponsShareOpen: (token, id) => {
    return request('/discounts/share/open', true, 'post', { token, id })
  },
  couponsShareClose: (token, id) => {
    return request('/discounts/share/close', true, 'post', { token, id })
  },
  couponsShareFetch: (token, id, shareToken) => {
    return request('/discounts/share/fetch', true, 'post', { token, id, shareToken })
  },
  noticeList: (data) => {
    return request('/notice/list', true, 'post', data)
  },
  noticeLastOne: (type = '') => {
    return request('/notice/last-one', true, 'get', {
      type
    })
  },
  noticeDetail: (id) => {
    return request('/notice/detail', true, 'get', {
      id
    })
  },
  addAddress: (data) => {
    return request('/user/shipping-address/add', true, 'post', data)
  },
  updateAddress: (data) => {
    return request('/user/shipping-address/update', true, 'post', data)
  },
  deleteAddress: (token, id) => {
    return request('/user/shipping-address/delete', true, 'post', {
      id,
      token
    })
  },
  queryAddress: (token) => {
    return request('/user/shipping-address/list', true, 'get', {
      token
    })
  },
  queryAddressV2: data => {
    return request('/user/shipping-address/list/v2', true, 'post', data)
  },
  defaultAddress: (token) => {
    return request('/user/shipping-address/default/v2', true, 'get', {
      token
    })
  },
  addressDetail: (token, id) => {
    return request('/user/shipping-address/detail/v2', true, 'get', {
      id,
      token
    })
  },
  pingtuanSet: (goodsId) => {
    return request('/shop/goods/pingtuan/set', true, 'get', {
      goodsId
    })
  },
  pingtuanSets: (goodsIdArray) => {
    return request('/shop/goods/pingtuan/sets', true, 'get', {
      goodsId: goodsIdArray.join()
    })
  },
  goodsDefaultPingtuan: (goodsId) => {
    return request('/shop/goods/pingtuan/default', true, 'get', {
      goodsId
    });
  },
  pingtuanMultilevel: (goodsId) => {
    return request('/shop/goods/pingtuanMultilevel', true, 'get', {
      goodsId
    });
  },
  pingtuanOpen: (token, goodsId, extJsonStr = '') => {
    return request('/shop/goods/pingtuan/open', true, 'post', {
      goodsId,
      token,
      extJsonStr
    })
  },
  pingtuanTuanInfo: (tuanId) => {
    return request('/shop/goods/pingtuan/tuanInfo', true, 'get', {
      tuanId
    });
  },
  pingtuanList: (data) => {
    return request('/shop/goods/pingtuan/list/v2', true, 'post', data)
  },
  pingtuanJoinUsers: (tuanId) => {
    return request('/shop/goods/pingtuan/joiner', true, 'get', { tuanId })
  },
  pingtuanMyJoined: (data) => {
    return request('/shop/goods/pingtuan/my-join-list', true, 'post', data)
  },
  friendlyPartnerList: (type = '') => {
    return request('/friendly-partner/list', true, 'post', {
      type
    })
  },
  friendList: (data) => {
    return request('/user/friend/list', true, 'post', data)
  },
  addFriend: (token, uid) => {
    return request('/user/friend/add', true, 'post', { token, uid })
  },
  deleteFriend: (token, uid) => {
    return request('/user/friend/delete', true, 'post', { token, uid })
  },
  friendUserDetail: (token, uid) => {
    return request('/user/friend/detail', true, 'get', { token, uid })
  },
  userImList: data => {
    return request('/userIm/list', true, 'post', data)
  },
  userImSendmessage: (token, uid, content) => {
    return request('/userIm/sendmessage', true, 'post', { token, uid, content })
  },
  userImEmpty: (token, uid) => {
    return request('/userIm/empty', true, 'post', { token, uid })
  },
  videoDetail: (videoId) => {
    return request('/media/video/detail', true, 'get', {
      videoId
    })
  },
  bindMobileWxa: (token, encryptedData, iv, pwd = '') => {
    return request('/user/wxapp/bindMobile', true, 'post', {
      token, encryptedData, iv, pwd
    })
  },
  bindMobileWxapp: (token, code, encryptedData, iv, pwd = '') => {
    return request('/user/wxapp/bindMobile', true, 'post', {
      token, code, encryptedData, iv, pwd
    })
  },
  bindMobileWxappV2: (token, code, pwd = '') => {
    return request('/user/wxapp/bindMobile/v2', true, 'post', {
      token, code, pwd
    })
  },
  bindMobileTta: (token, encryptedData, iv, pwd = '') => {
    return request('/user/tt/microapp/bindMobile', true, 'post', {
      token, encryptedData, iv, pwd
    })
  },
  bindMobileSms: (token, mobile, code, pwd = '') => {
    return request('/user/m/bind-mobile', true, 'post', {
      token, mobile, code, pwd
    })
  },
  userDetail: (token) => {
    return request('/user/detail', true, 'get', {
      token
    })
  },
  userDetailSpreadUser: (token, uid) => {
    return request('/user/detail/spreadUser', true, 'get', {
      token, uid
    })
  },
  userWxinfo: (token) => {
    return request('/user/wxinfo', true, 'get', {
      token
    })
  },
  userAliappInfo: (token) => {
    return request('/user/aliappInfo', true, 'get', {
      token
    })
  },
  userAmount: (token) => {
    return request('/user/amount', true, 'get', {
      token
    })
  },
  orderCreate: (data) => {
    return request('/order/create', true, 'post', data)
  },
  orderList: (data) => {
    return request('/order/list', true, 'post', data)
  },
  orderDetail: (token, id, hxNumber = '', peisongOrderId = '') => {
    return request('/order/detail', true, 'get', {
      id,
      token,
      hxNumber,
      peisongOrderId
    })
  },
  orderMtLocation: id => {
    return request('/order/mtlocation', true, 'get', {
      id
    })
  },
  orderDelivery: (token, orderId) => {
    return request('/order/delivery', true, 'post', {
      orderId,
      token
    })
  },
  orderReputation: (data) => {
    return request('/order/reputation', true, 'post', data)
  },
  orderReputationList: (data) => {
    return request('/order/listReputation', true, 'post', data)
  },
  orderClose: (token, orderId) => {
    return request('/order/close', true, 'post', {
      orderId,
      token
    })
  },
  orderDelete: (token, orderId) => {
    return request('/order/delete', true, 'post', {
      orderId,
      token
    })
  },
  orderPay: (token, orderId) => {
    return request('/order/pay', true, 'post', {
      orderId,
      token
    })
  },
  jdjlOrderPay: (token, _token, couponId = '') => {
    return request('/jdjl/payOrder', true, 'post', {
      _token,
      token,
      couponId
    })
  },
  orderHX: (hxNumber) => {
    return request('/order/hx', true, 'post', {
      hxNumber
    })
  },
  orderHXV2: data => {
    return request('/order/hx', true, 'post', data)
  },
  orderSet: () => {
    return request('/order/set', true, 'get')
  },
  orderRefunds: (token, orderId) => {
    return request('/order/refund', true, 'get', {
      token,
      orderId
    })
  },
  withDrawApply: (token, money) => {
    return request('/user/withDraw/apply', true, 'post', {
      money,
      token
    })
  },
  withDrawApplyV2: data => {
    return request('/user/withDraw/apply', true, 'post', data)
  },
  withDrawDetail: (token, id) => {
    return request('/user/withDraw/detail', true, 'get', {
      token,
      id
    })
  },
  withDrawLogs: (data) => {
    return request('/user/withDraw/list', true, 'post', data)
  },
  withDrawSetting: () => {
    return request('/user/withDraw/setting', true, 'get')
  },
  province: () => {
    return request('/common/region/v2/province', false, 'get')
  },
  city: () => {
    return request('/common/region/v2/city', false, 'get')
  },
  districts: () => {
    return request('/common/region/v2/districts', false, 'get')
  },
  streets: () => {
    return request('/common/region/v2/streets', false, 'get')
  },
  nextRegion: (pid) => {
    return request('/common/region/v2/child', false, 'get', {
      pid
    })
  },
  regionInfo: (id) => {
    return request('/common/region/v2/info', false, 'get', {
      id
    })
  },
  regionSearch: data => {
    return request('/common/region/v2/search', false, 'post', data)
  },
  cashLogs: (data) => {
    return request('/user/cashLog', true, 'post', data)
  },
  cashLogsV2: (data) => {
    return request('/user/cashLog/v2', true, 'post', data)
  },
  statisticsComingOut: (data) => {
    return request('/user/statisticsComingOut', true, 'post', data)
  },
  payLogs: (data) => {
    return request('/user/payLogs', true, 'post', data)
  },
  rechargeSendRules: () => {
    return request('/user/recharge/send/rule', true, 'get')
  },
  payBillDiscounts: () => {
    return request('/payBill/discounts', true, 'get')
  },
  payBill: (token, money, pwd = '') => {
    return request('/payBill/pay', true, 'post', { token, money, pwd })
  },
  payBillV2: (data) => {
    return request('/payBill/pay', true, 'post', data)
  },
  vipLevel: () => {
    return request('/config/vipLevel', true, 'get')
  },
  fxApply: (token, name, mobile) => {
    return request('/saleDistribution/apply', true, 'post', { token, name, mobile })
  },
  fxApplyV2: data => {
    return request('/saleDistribution/apply/v2', true, 'post', data)
  },
  fxSetting: () => {
    return request('/saleDistribution/setting', true, 'get')
  },
  fxBuy: token => {
    return request('/saleDistribution/buy', true, 'post', { token })
  },
  fxApplyProgress: (token) => {
    return request('/saleDistribution/apply/progress', true, 'get', { token })
  },
  fxApplyProgressV2: (token) => {
    return request('/saleDistribution/apply/progress/v2', true, 'get', { token: token });
  },
  fxMembers: (data) => {
    return request('/saleDistribution/members', true, 'post', data)
  },
  fxCommisionLog: (data) => {
    return request('/saleDistribution/commision/log', true, 'post', data)
  },
  fxCommisionFreezeAmount: (token) => {
    return request('/saleDistribution/commission/freeze', true, 'get', { token })
  },
  fxSaleroomRankTotal: (page, pageSize) => {
    return request('/saleDistribution/sale-room-rank/total', true, 'get', {
      page, pageSize
    })
  },
  fxSaleroomRankTotalTeam: (page, pageSize) => {
    return request('/saleDistribution/sale-room-rank/team/total', true, 'get', {
      page, pageSize
    })
  },
  fxSaleroomRankDaily: (page, pageSize, day) => {
    return request('/saleDistribution/sale-room-rank/daily', true, 'get', {
      page, pageSize, day
    })
  },
  fxMembersStatistics: token => {
    return request('/saleDistribution/members/statistics', true, 'get', { token })
  },
  fxMyCommisionStatistics: (token, days) => {
    return request('/saleDistribution/my/commision', true, 'get', { token, days })
  },
  fxGoods: data => {
    return request('/saleDistribution/goods', true, 'post', data)
  },
  fxTeamReport: data => {
    return request('/saleDistribution/team/report', true, 'post', data)
  },
  fxCities: token => {
    return request('/saleDistribution/city/list', true, 'get', { token })
  },
  fxCityReport: data => {
    return request('/saleDistribution/city/report', true, 'post', data)
  },
  goodsSellNumberStatistics: (page, pageSize, goodsId = '') => {
    return request('/site/goods/statistics', true, 'get', {
      page, pageSize, goodsId
    })
  },
  wxaQrcode: (data) => {
    return request('/qrcode/wxa/unlimit', true, 'post', data)
  },
  ttaQrcode: (paramsJson, expireHours) => {
    return request('/user/tt/microapp/qrcode', true, 'post', {
      content: JSON.stringify(paramsJson),
      expireHours
    })
  },
  commonQrcode: (data) => {
    return request('/qrcode/content', true, 'post', data)
  },
  uploadFile: (token, tempFilePath, expireHours = '') => {
    const uploadUrl = API_BASE_URL + '/' + subDomain + '/dfs/upload/file'
    return new Promise((resolve, reject) => {
      wx.uploadFile({
        url: uploadUrl,
        filePath: tempFilePath,
        name: 'upfile',
        formData: {
          'token': token,
          expireHours
        },
        success(res) {
          resolve(JSON.parse(res.data))
        },
        fail(error) {
          reject(error)
        },
        complete(aaa) {
          // 加载完成
        }
      })
    })
  },
  uploadFileFromUrl: (remoteFileUrl = '', ext = '') => {
    return request('/dfs/upload/url', true, 'post', { remoteFileUrl, ext })
  },
  uploadFileList: (path = '') => {
    return request('/dfs/upload/list', true, 'post', { path })
  },
  uploadFileListV2: data => {
    return request('/dfs/upload/list/v2', true, 'post', data)
  },
  galleryList: data => {
    return request('/dfs/gallery', true, 'post', data)
  },
  refundApply: (data) => {
    return request('/order/refundApply/apply', true, 'post', data)
  },
  refundApplyDetail: (token, orderId, orderGoodsId = '') => {
    return request('/order/refundApply/info', true, 'get', {
      token,
      orderId,
      orderGoodsId
    })
  },
  refundApplyCancel: (token, orderId, orderGoodsId = '') => {
    return request('/order/refundApply/cancel', true, 'post', {
      token,
      orderId,
      orderGoodsId
    })
  },
  cmsCategories: () => {
    return request('/cms/category/list', true, 'get', {})
  },
  cmsCategoryDetail: (id) => {
    return request('/cms/category/info', true, 'get', { id })
  },
  cmsArticles: (data) => {
    return request('/cms/news/list', true, 'post', data)
  },
  cmsArticlesV2: (data) => {
    return request('/cms/news/list/v2', true, 'post', data)
  },
  cmsArticleUsefulLogs: (data) => {
    return request('/cms/news/useful/logs', true, 'post', data)
  },
  cmsArticleDetail: (id) => {
    return request('/cms/news/detail', true, 'get', { id })
  },
  cmsArticleDetailV2: (id, token = '') => {
    return request('/cms/news/detail/v2', true, 'get', { id, token })
  },
  cmsArticlePreNext: (id) => {
    return request('/cms/news/preNext', true, 'get', { id })
  },
  cmsArticleCreate: (data) => {
    return request('/cms/news/put', true, 'post', data)
  },
  cmsArticleDelete: (token, id) => {
    return request('/cms/news/del', true, 'post', { token, id })
  },
  cmsArticleUseless: (data) => {
    return request('/cms/news/useful', true, 'post', data)
  },
  cmsArticleModifyExtNumber: (data) => {
    return request('/cms/news/modifyExtNumber', true, 'post', data)
  },
  newsOwnerUserViewStatistics: (data) => {
    return request('/newsOwnerUserViewStatistics/list', true, 'post', data)
  },
  cmsPage: (key) => {
    return request('/cms/page/info/v2', true, 'get', { key })
  },
  cmsTags: () => {
    return request('/cms/tags/list', true, 'get', {  })
  },
  cmsNewsSignUsers: (data) => {
    return request('/newsSign/signUsers', true, 'post', data)
  },
  cmsNewsSignOnline: (data) => {
    return request('/newsSign/signOnline', true, 'post', data)
  },
  cmsNewsSignOffline: (data) => {
    return request('/newsSign/signOffline', true, 'post', data)
  },
  cmsNewsSignCheck: (token, newsId) => {
    return request('/newsSign/check', true, 'get', { token, newsId })
  },
  invoiceList: (data) => {
    return request('/invoice/list', true, 'post', data)
  },
  invoiceApply: (data) => {
    return request('/invoice/apply', true, 'post', data)
  },
  invoiceDetail: (token, id) => {
    return request('/invoice/info', true, 'get', { token, id })
  },
  depositList: (data) => {
    return request('/deposit/list', true, 'post', data)
  },
  payDeposit: (data) => {
    return request('/deposit/pay', true, 'post', data)
  },
  depositInfo: (token, id) => {
    return request('/deposit/info', true, 'get', { token, id })
  },
  depositBackApply: (token, id) => {
    return request('/deposit/back/apply', true, 'post', { token, id })
  },
  shopAreaCities: () => {
    return request('/shopArea/cities', true, 'get')
  },
  shopAreaList: (data) => {
    return request('/shopArea/list', true, 'post', data)
  },
  shopAreaDetail: (id) => {
    return request('/shopArea/detail', true, 'get', { id })
  },
  fetchShopsCities: () => {
    return request('/shop/subshop/cities', true, 'get')
  },
  fetchShops: (data) => {
    return request('/shop/subshop/list', true, 'post', data)
  },
  fetchMyShops: (token) => {
    return request('/shop/subshop/my', true, 'get', { token })
  },
  shopSubdetail: (id) => {
    return request('/shop/subshop/detail/v2', true, 'get', { id })
  },
  shopSubApply: (data) => {
    return request('/shop/subshop/apply', true, 'post', data)
  },
  pickPoints: (data) => {
    return request('/shop/subshop/pickPoints', true, 'post', data)
  },
  shopReputationList: (data) => {
    return request('/shop/subshop/listReputation', true, 'post', data)
  },
  shopFavPut: (token, shopId) => {
    return request('/shop/fav/add', true, 'post', { token, shopId })
  },
  shopFavCheck: (token, shopId) => {
    return request('/shop/fav/check', true, 'get', { token, shopId })
  },
  shopFavList: (data) => {
    return request('/shop/fav/list', true, 'post', data)
  },
  shopFavDelete: (token, shopId) => {
    return request('/shop/fav/delete', true, 'post', { token, shopId })
  },
  userAttendantFavPut: (token, attendantId) => {
    return request('/userAttendantFav/add', true, 'post', { token, attendantId })
  },
  userAttendantFavCheck: (token, attendantId) => {
    return request('/userAttendantFav/check', true, 'get', { token, attendantId })
  },
  userAttendantFavList: (data) => {
    return request('/userAttendantFav/list', true, 'post', data)
  },
  userAttendantFavDelete: (token, attendantId) => {
    return request('/userAttendantFav/delete', true, 'post', { token, attendantId })
  },
  addComment: (data) => {
    return request('/comment/add', true, 'post', data)
  },
  commentList: (data) => {
    return request('/comment/list', true, 'post', data)
  },
  commentListV2: (data) => {
    return request('/comment/list/v2', true, 'post', data)
  },
  delComment: (data) => {
    return request('/comment/del', true, 'post', data)
  },
  modifyUserInfo: (data) => {
    return request('/user/modify', true, 'post', data)
  },
  bindSaleman: data => {
    return request('/user/bindSaleman', true, 'post', data)
  },
  modifyUserPassword: (token, pwdOld, pwdNew) => {
    return request('/user/modify/password', true, 'post', { token, pwdOld, pwdNew })
  },
  modifyUserPasswordByUserName: (data) => {
    return request('/user/username/modifyPassword', true, 'post', data)
  },
  uniqueId: (type = '') => {
    return request('/uniqueId/get', true, 'get', { type })
  },
  queryBarcode: (barcode = '') => {
    return request('/barcode/info', true, 'get', { barcode })
  },
  luckyInfo: (id) => {
    return request('/luckyInfo/info/v2', true, 'get', { id })
  },
  luckyInfoJoin: (id, token) => {
    return request('/luckyInfo/join', true, 'post', { id, token })
  },
  luckyInfoJoinMy: (id, token) => {
    return request('/luckyInfo/join/my', true, 'get', { id, token })
  },
  luckyInfoJoinLogs: (data) => {
    return request('/luckyInfo/join/logs', true, 'post', data)
  },
  jsonList: (data) => {
    return request('/json/list', true, 'post', data)
  },
  jsonListV2: (data) => {
    return request('/json/list/v2', true, 'post', data)
  },
  jsonSet: (data) => {
    return request('/json/set', true, 'post', data)
  },
  jsonDelete: (token, id) => {
    return request('/json/delete', true, 'post', { token, id })
  },
  jsonTop: (token, id, isTop) => {
    return request('/json/top', true, 'post', { token, id, isTop })
  },
  jsonHighlight: (token, id, isHighlight) => {
    return request('/json/highlight', true, 'post', { token, id, isHighlight })
  },
  graphValidateCodeUrl: (key = Math.random()) => {
    const _url = API_BASE_URL + '/' + subDomain + '/verification/pic/get?key=' + key
    return _url
  },
  graphValidateCodeCheck: (key = Math.random(), code) => {
    return request('/verification/pic/check', true, 'post', { key, code })
  },
  shortUrl: (url = '') => {
    return request('/common/short-url/shorten', false, 'post', { url })
  },
  shortUrlV2: (content) => {
    return request('/common/short-url/shorten/v2', false, 'post', { content })
  },
  shortUrlExpand: (suffix) => {
    return request('/common/short-url/expand', false, 'post', { suffix })
  },
  smsValidateCode: (mobile, key = '', picCode = '') => {
    return request('/verification/sms/get', true, 'get', { mobile, key, picCode })
  },
  smsValidateCodeByToken: (token) => {
    return request('/verification/sms/get-by-token', true, 'get', { token })
  },
  smsValidateCodeCheck: (mobile, code) => {
    return request('/verification/sms/check', true, 'post', { mobile, code })
  },
  mailValidateCode: (mail) => {
    return request('/verification/mail/get', true, 'get', { mail })
  },
  mailValidateCodeCheck: (mail, code) => {
    return request('/verification/mail/check', true, 'post', { mail, code })
  },
  mapDistance: (lat1, lng1, lat2, lng2) => {
    return request('/common/map/distance', false, 'get', { lat1, lng1, lat2, lng2 })
  },
  mapDistanceNavigation: (key, mode, from, to) => {
    return request('/common/map/qq/distance', false, 'post', { key, mode, from, to })
  },
  mapQQAddress: (location = '', coord_type = '5') => {
    return request('/common/map/qq/address', false, 'get', { location, coord_type })
  },
  mapQQAddressV2: (key, location, coord_type = '5') => {
    return request('/common/map/qq/address', false, 'get', { key, location, coord_type })
  },
  mapQQSearch: (data) => {
    return request('/common/map/qq/search', false, 'post', data)
  },
  virtualTraderList: (data) => {
    return request('/virtualTrader/list', true, 'post', data)
  },
  virtualTraderDetail: (token, id) => {
    return request('/virtualTrader/info', true, 'get', { token, id })
  },
  virtualTraderBuy: (token, id) => {
    return request('/virtualTrader/buy', true, 'post', { token, id })
  },
  virtualTraderMyBuyLogs: (data) => {
    return request('/virtualTrader/buy/logs', true, 'post', data)
  },
  queuingTypes: (status = '') => {
    return request('/queuing/types', true, 'get', { status })
  },
  queuingGet: (token, typeId, mobile = '') => {
    return request('/queuing/get', true, 'post', { token, typeId, mobile })
  },
  queuingMy: (token, typeId = '', status = '') => {
    return request('/queuing/my', true, 'get', { token, typeId, status })
  },
  idcardCheck: (token, name, idCardNo) => {
    return request('/user/idcard', true, 'post', { token, name, idCardNo })
  },
  bindSeller: data => {
    return request('/user/bindSeller', true, 'post', data)
  },
  loginout: (token) => {
    return request('/user/loginout', true, 'get', { token })
  },
  userDelete: (token) => {
    return request('/user/delete', true, 'post', { token })
  },
  dynamicUserCode: (token) => {
    return request('/user/dynamicUserCode', true, 'get', { token })
  },
  userLevelList: (data) => {
    return request('/user/level/list', true, 'post', data)
  },
  userLevelDetail: (levelId) => {
    return request('/user/level/info', true, 'get', { id: levelId })
  },
  userLevelPrices: (levelId) => {
    return request('/user/level/prices', true, 'get', { levelId })
  },
  userLevelBuy: (token, priceId, isAutoRenew = false, remark = '') => {
    return request('/user/level/buy', true, 'post', {
      token,
      userLevelPriceId: priceId,
      isAutoRenew,
      remark
    })
  },
  userLevelBuyLogs: (data) => {
    return request('/user/level/buyLogs', true, 'post', data)
  },
  messageList: (data) => { // SDK文档到这里
    return request('/user/message/list', true, 'post', data)
  },
  messageRead: (token, id) => {
    return request('/user/message/read', true, 'post', { token, id })
  },
  messageDelete: (token, id) => {
    return request('/user/message/del', true, 'post', { token, id })
  },
  bindOpenid: (token, code) => {
    return request('/user/wxapp/bindOpenid', true, 'post', {
      token, code,
      type: 2
    })
  },
  bindOpenidV2: (token, code, appid) => {
    return request('/user/wxapp/bindOpenid/v2', true, 'post', {
      token, code, appid
    })
  },
  encryptedData: (code, encryptedData, iv) => {
    return request('/user/wxapp/decode/encryptedData', true, 'post', {
      code, encryptedData, iv
    })
  },
  voteItems: (data) => {
    return request('/vote/items', true, 'post', data)
  },
  voteItemDetail: (id) => {
    return request('/vote/info', true, 'get', { id })
  },
  vote: (token, voteId, items, remark) => {
    return request('/vote/vote', true, 'post', {
      token, voteId,
      items: items.join(),
      remark
    })
  },
  voteCategory: (data) => {
    return request('/vote/vote/category', true, 'post', data)
  },
  myVote: (token, voteId) => {
    return request('/vote/vote/info', true, 'get', {
      token, voteId,
    })
  },
  myVoteV2: (token, voteId) => {
    return request('/vote/vote/info/v2', true, 'get', {
      token, voteId,
    })
  },
  voteLogs: (data) => {
    return request('/vote/vote/list', true, 'post', data)
  },
  voteGroups: (data) => {
    return request('/vote/vote/groups', true, 'post', data)
  },
  voteGroupsDetail: (data) => {
    return request('/vote/vote/groups/detail', true, 'get', data)
  },
  myInviteVoteJoinList: (data) => {
    return request('/vote/myInviteLoinList', true, 'post', data)
  },
  yuyueItemPublish: (data) => {
    return request('/yuyue/publish', true, 'post', data)
  },
  yuyueItems: (data) => {
    return request('/yuyue/items', true, 'post', data)
  },
  yuyueItemDetail: (id, token = '') => {
    return request('/yuyue/info', true, 'get', { id, token })
  },
  yuyueItemDelete: (token, id) => {
    return request('/yuyue/del', true, 'post', { token, id })
  },
  yuyueJoin: (data) => {
    return request('/yuyue/join', true, 'post', data)
  },
  yuyueJoinPay: (token, joinId) => {
    return request('/yuyue/pay', true, 'post', {
      token, joinId
    })
  },
  yuyueJoinUpdate: (token, joinId, extJsonStr) => {
    return request('/yuyue/join/update', true, 'post', {
      token, joinId, extJsonStr
    })
  },
  yuyueJoinDelete: (token, joinId) => {
    return request('/yuyue/delJoin', true, 'post', {
      token, id: joinId
    })
  },
  yuyueMyJoinInfo: (token, joinId) => {
    return request('/yuyue/join/info', true, 'post', {
      token, joinId
    })
  },
  yuyueMyJoinLogs: (data) => {
    return request('/yuyue/join/list', true, 'post', data)
  },
  yuyueTeams: (data) => {
    return request('/yuyue/info/teams', true, 'post', data)
  },
  yuyueTeamDetail: (teamId) => {
    return request('/yuyue/info/team', true, 'get', { teamId })
  },
  yuyueTeamMembers: (data) => {
    return request('/yuyue/info/team/members', true, 'post', data)
  },
  yuyueTeamDeleteMember: (token, joinId) => {
    return request('/yuyue/info/team/members/del', true, 'post', data)
  },
  register_email: (data) => {
    return request('/user/email/register', true, 'post', data)
  },
  login_email: (data) => {
    return request('/user/email/login', true, 'post', data)
  },
  bindEmail: (token, email, code, pwd = '') => {
    return request('/user/email/bindEmail', true, 'post', {
      token, email, code, pwd
    })
  },  
  goodsDynamic: (type) => {
    return request('/site/goods/dynamic', true, 'get', { type })
  },
  goodsDynamicV2: data => {
    return request('/site/goods/dynamic', true, 'get', data)
  },
  usersDynamic: (type) => {
    return request('/site/user/dynamic', true, 'get', { type })
  },
  fetchSubDomainByWxappAppid: (appid) => {
    return request('/subdomain/appid/wxapp', false, 'get', { appid })
  },
  cmsArticleFavPut: (token, newsId) => {
    return request('/cms/news/fav/add', true, 'post', { token, newsId })
  },
  cmsArticleFavCheck: (token, newsId) => {
    return request('/cms/news/fav/check', true, 'get', { token, newsId })
  },
  cmsArticleFavList: (data) => {
    return request('/cms/news/fav/list', true, 'post', data)
  },
  cmsArticleFavListV2: (data) => {
    return request('/cms/news/fav/list/v2', true, 'post', data)
  },
  cmsArticleFavDeleteById: (token, id) => {
    return request('/cms/news/fav/delete', true, 'post', { token, id })
  },
  cmsArticleFavDeleteByNewsId: (token, newsId) => {
    return request('/cms/news/fav/delete', true, 'post', { token, newsId })
  },
  shippingCarInfo: (token, type = '') => {
    return request('/shopping-cart/info', true, 'get', {
      token, type
    })
  },
  shippingCarInfoAddItem: (token, goodsId, number, sku, addition, type = '') => {
    return request('/shopping-cart/add', true, 'post', {
      token,
      goodsId,
      number,
      sku: sku && sku.length > 0 ? JSON.stringify(sku) : '',
      addition: addition && addition.length > 0 ? JSON.stringify(addition) : '',
      type
    })
  },
  shippingCarInfoAddItemV2: data => {
    return request('/shopping-cart/add', true, 'post', data)
  },
  shippingCarInfoModifyNumber: (token, key, number, type = '') => {
    return request('/shopping-cart/modifyNumber', true, 'post', {
      token, key, number, type
    })
  },
  shippingCarInfoRemoveItem: (token, key, type = '') => {
    return request('/shopping-cart/remove', true, 'post', {
      token, key, type
    })
  },
  shippingCartSelected: (token, key, selected, type = '') => {
    return request('/shopping-cart/select', true, 'post', {
      token, key, selected, type
    })
  },
  shippingCarInfoRemoveAll: (token, type = '') => {
    return request('/shopping-cart/empty', true, 'post', {
      token, type
    })
  },
  growthLogs: (data) => {
    return request('/growth/logs', true, 'post', data)
  },
  exchangeScoreToGrowth: (token, deductionScore) => {
    return request('/growth/exchange', true, 'post', {
      token, deductionScore
    })
  },
  wxaMpLiveRooms: () => {
    return request('/wx/live/rooms', true, 'get')
  },
  wxaMpLiveRoomHisVedios: (roomId) => {
    return request('/wx/live/his', true, 'get', {
      roomId
    })
  },
  peisonFeeList: () => {
    return request('/fee/peisong/list', true, 'get')
  },
  peisongMembers: (data) => {
    return request('/peisong/member/list', true, 'post', data)
  },
  peisongMemberInfo: (token) => {
    return request('/peisong/member/info', true, 'get', {
      token
    })
  },
  peisongMemberChangeWorkStatus: (token) => {
    return request('/peisong/member/change-work-status', true, 'post', {
      token
    })
  },
  peisongOrdersGrabbing: (token) => {
    return request('/peisong/order/grabbing', true, 'get', { token })
  },
  peisongOrders: (data) => {
    return request('/peisong/order/list', true, 'post', data)
  },
  peisongOrderGrab: (data) => {
    return request('/peisong/order/grab', true, 'post', data)
  },
  peisongOrderDetail: (token, id) => {
    return request('/peisong/order/detail', true, 'get', { token, id })
  },
  peisongOrderEstimatedCompletionTime: (data) => {
    return request('/peisong/order/estimatedCompletionTime', true, 'post', data)
  },
  peisongStartService: (data) => {
    return request('/peisong/order/start-service', true, 'post', data)
  },
  peisongEndService: (data) => {
    return request('/peisong/order/end-service', true, 'post', data)
  },
  peisongEndServiceRemark: (token, id, remarkEnd) => {
    return request('/peisong/order/end-service/remarkEnd', true, 'post', { token, id, remarkEnd })
  },
  peisongOrderAllocation: (token, id, uid) => {
    return request('/peisong/order/allocation', true, 'post', {
      token, id, uid
    })
  },
  siteStatistics: () => {
    return request('/site/statistics', true, 'get')
  },
  orderStatistics: (token) => {
    return request('/order/statistics', true, 'get', {
      token
    })
  },
  orderStatisticsv2: data => {
    return request('/order/statistics', true, 'get', data)
  },
  siteStatisticsSaleroom: (data) => {
    return request('/site/statistics/saleroom', true, 'get', data)
  },
  siteStatisticsSaleroomYear: (year = '') => {
    return request('/site/statistics/saleroom/year', true, 'get', { year })
  },
  bonusLog: (data) => {
    return request('/bonusLog/list', true, 'post', data)
  },
  mtjAsset: (token) => {
    return request('/mtj/asset', true, 'get', { token })
  },
  mtjSetting: () => {
    return request('/mtj/setting', true, 'get')
  },
  mtjLogs: (data) => {
    return request('/mtj/logs', true, 'post', data)
  },
  mtjStatistics: () => {
    return request('/site/statistics/mjt', true, 'get')
  },
  mtjTransfer: (data) => {
    return request('/mtj/transfer', true, 'post', data)
  },
  mtjTransferLogs: (data) => {
    return request('/mtj/transfer/logs', true, 'post', data)
  },
  wxOpenAuthorization: (data) => {
    return request('/user/wxsns/authorization', true, 'post', data)
  },
  wxOpenRegister: (data) => {
    return request('/user/wxsns/register', true, 'post', data)
  },
  wxOpenBindOpenid: (data) => {
    return request('/user/wxsns/bindOpenid/v2', true, 'post', data)
  },
  wxOpenLogin: (data) => {
    return request('/user/wxsns/login', true, 'post', data)
  },
  userAttentioncheck: (token, uid) => {
    return request('/user/attention/check', true, 'get', {
      token, uid
    })
  },
  userAttentionAdd: (token, uid) => {
    return request('/user/attention/add', true, 'post', {
      token, uid
    })
  },
  userAttentionRemove: (token, uid) => {
    return request('/user/attention/remove', true, 'post', {
      token, uid
    })
  },
  userAttentionMeList: (data) => {
    return request('/user/attention/attention-me', true, 'post', data)
  },
  userMyAttentionList: (data) => {
    return request('/user/attention/my-attention', true, 'post', data)
  },
  userAttentionDetail: (token, uid) => {
    return request('/user/attention/detail', true, 'get', {
      token, uid
    })
  },
  userAttentionStatistics: (token) => {
    return request('/user/attention/statistics', true, 'get', {
      token
    })
  },
  cyTableToken: (tableId, key) => {
    return request('/cyTable/token', true, 'post', {
      id: tableId,
      k: key
    })
  },
  cyTableAddOrder: data => {
    return request('/cyTable/add-order', true, 'post', data)
  },
  cyTablePayOrder: data => {
    return request('/cyTable/pay-order', true, 'post', data)
  },
  cyTableInfo: id => {
    return request('/cyTable/info', true, 'get', { id })
  },
  cyTableList: data => {
    return request('/cyTable/list', true, 'post', data)
  },
  goodsTimesSchedule: (goodsId = '', propertyChildIds = '', brandId = '', categoryId = '') => {
    return request('/shop/goods/times/schedule', true, 'post', { goodsId, propertyChildIds, brandId, categoryId })
  },
  goodsTimesDays: (goodsId, propertyChildIds = '') => {
    return request('/shop/goods/times/days', true, 'post', { goodsId, propertyChildIds })
  },
  goodsTimesDayItems: (day, goodsId, propertyChildIds = '') => {
    return request('/shop/goods/times/items', true, 'post', { day, goodsId, propertyChildIds })
  },
  goodsBrandList: data => {
    return request('/shop/goods/brand/list', true, 'post', data)
  },
  goodsBrandDetail: id => {
    return request('/shop/goods/brand/detail', true, 'get', { id })
  },
  wxappServiceLogin: data => {
    return request('/user/wxappService/login', true, 'post', data)
  },
  wxappServiceLoginWxaMobile: data => {
    return request('/user/wxappService/login/mobile', true, 'post', data)
  },
  wxappServiceRegisterComplex: data => {
    return request('/user/wxappService/register/complex', true, 'post', data)
  },
  wxappServiceRegisterSimple: data => {
    return request('/user/wxappService/register/simple', true, 'post', data)
  },
  wxappServiceAuthorize: data => {
    return request('/user/wxappService/authorize', true, 'post', data)
  },
  wxappServiceBindMobile: data => {
    return request('/user/wxappService/bindMobile', true, 'post', data)
  },
  wxappServiceBindMobileV2: data => {
    return request('/user/wxappService/bindMobile/v2', true, 'post', data)
  },
  wxappServiceBindOpenid: data => {
    return request('/user/wxappService/bindOpenid', true, 'post', data)
  },
  wxappServiceEncryptedData: data => {
    return request('/user/wxappService/decode/encryptedData', true, 'post', data)
  },
  trtcUserSig: token => {
    return request('/trtc/userSig', true, 'get', { token })
  },
  setPayPassword: (token, pwd) => {
    return request('/user/paypwd/set', true, 'post', { token, pwd })
  },
  modifyPayPassword: (token, pwdOld, pwdNew) => {
    return request('/user/paypwd/modify', true, 'post', { token, pwdOld, pwdNew })
  },
  resetPayPassword: (mobile, code, pwd) => {
    return request('/user/paypwd/reset', true, 'post', { mobile, code, pwd })
  },
  adPosition: key => {
    return request('/site/adPosition/info', true, 'get', { key })
  },
  adPositionBatch: keys => {
    return request('/site/adPosition/batch', true, 'get', { keys })
  },
  momentsCategory: () => {
    return request('/momentsCategory/list', true, 'get')
  },
  momentsList: data => {
    return request('/moments/list', true, 'post', data)
  },
  momentsdetail: id => {
    return request('/moments/detail', true, 'get', { id })
  },
  goodsVisitLog: data => {
    return request('/goods/visitLog', true, 'post', data)
  },
  goodsVisitLogAdd: data => {
    return request('/goods/visitLog/add', true, 'post', data)
  },
  goodsVisitLogDelete: data => {
    return request('/goods/visitLog/delete', true, 'post', data)
  },
  goodsVisitLogClear: token => {
    return request('/goods/visitLog/clear', true, 'post', { token })
  },
  channelDataPush: (key, content) => {
    return request('/channelData/push', true, 'post', { key, content })
  },
  channelDataPull: (key) => {
    return request('/channelData/pull', true, 'get', { key })
  },
  bindPartner: (token, partnerId) => {
    return request('/user/bindPartner', true, 'post', { token, uid: partnerId })
  },
  partnerSetting: () => {
    return request('/partner/setting', true, 'get')
  },
  partnerBindTeamLeader: (token, uid) => {
    return request('/partner/bindTeamLeader', true, 'post', { token, uid })
  },
  partnerBuyTeamLeader: token => {
    return request('/partner/buy', true, 'post', { token })
  },
  partnerMembersStatistics: token => {
    return request('/partner/members/statistics', true, 'get', { token })
  },
  partnerMembers: data => {
    return request('/partner/members', true, 'post', data)
  },
  myLiveRooms: data => {
    return request('/liveRooms/my', true, 'post', data)
  },
  liveRooms: data => {
    return request('/liveRooms/list', true, 'post', data)
  },
  myLiveRoomsInfo: (token, id) => {
    return request('/liveRooms/my/info', true, 'get', { token, id })
  },
  liveRoomsInfo: (token, id) => {
    return request('/liveRooms/info', true, 'get', { token, id })
  },
  liveRoomGoodsMainly: data => {
    return request('/liveRooms/goods/mainly', true, 'post', data)
  },
  stopLiveRoom: (token, id) => {
    return request('/liveRooms/my/stop', true, 'post', { token, id })
  },
  likeLiveRoom: (token, id) => {
    return request('/liveRooms/like', true, 'post', { token, id })
  },
  liveRoomOnlineUsers: (token, roomId) => {
    return request('/websocket/rest/liveRoom/onlines', false, 'get', { token, roomId })
  },
  liveRoomKickOutUser: (token, roomId, uid) => {
    return request('/websocket/rest/liveRoom/kickOut', false, 'post', { token, roomId, uid })
  },
  mockApi: (groupName, apiName, method) => {
    return request(`/mock/${groupName}/${apiName}`, true, method)
  },
  tourJourneyList: (type, refId) => {
    return request('/tourJourney/list', true, 'get', { type, refId })
  },
  userBankSelectBanks: () => {
    return request('/userBank/banks', true, 'get')
  },
  userBankInfo: token => {
    return request('/userBank/info', true, 'get', { token })
  },
  userBankBind: data => {
    return request('/userBank/bind', true, 'post', data)
  },
  userBankUnBind: token => {
    return request('/userBank/unbind', true, 'post', { token })
  },
  // 京东VOP相关接口
  jdvopGoodsList: data => {
    return request(`/jdvop/${merchantId}/goods/list`, false, 'post', data)
  },
  jdvopGoodsCheckCanBuy: data => {
    return request(`/jdvop/${merchantId}/goods/checkCanBuy`, false, 'post', data)
  },
  jdvopGoodsDetail: goodsId => {
    return request(`/jdvop/${merchantId}/goods/detail`, false, 'get', {
      skuId: goodsId,
      queryExts: 'wxintroduction'
    })
  },
  jdvopGoodsSkuImages: goodsId => {
    return request(`/jdvop/${merchantId}/goods/skuImages`, false, 'get', {
      skuId: goodsId
    })
  },
  jdvopCartInfo: token => {
    return request(`/jdvop/${merchantId}/shopping-cart/info`, false, 'get', {
      token
    })
  },
  jdvopCartAdd: data => {
    return request(`/jdvop/${merchantId}/shopping-cart/add`, false, 'post', data)
  },
  jdvopCartModifyNumber: (token, key, number) => {
    return request(`/jdvop/${merchantId}/shopping-cart/modifyNumber`, false, 'post', {
      token, key, number
    })
  },
  jdvopCartSelect: (token, key, selected) => {
    return request(`/jdvop/${merchantId}/shopping-cart/select`, false, 'post', {
      token, key, selected
    })
  },
  jdvopCartRemove: (token, key) => {
    return request(`/jdvop/${merchantId}/shopping-cart/remove`, false, 'post', {
      token, key
    })
  },
  jdvopCartEmpty: token => {
    return request(`/jdvop/${merchantId}/shopping-cart/empty`, false, 'post', {
      token
    })
  },
  // 商家从区管进货
  jdvopJinhuoGoods: data => {
    return request('/vop/goods/list', true, 'post', data)
  },
  jdvopJinhuoGoodsDetail: (token, skuId) => {
    return request('/vop/goods/detail', true, 'get', { token, skuId })
  },
  // cps
  cpsJdGoodsCategory: (parentId, grade) => {
    return request('/cpsJdGoods/category', true, 'get', { parentId, grade })
  },
  cpsJdGoodsSearch: data => {
    return request('/cpsJdGoods/search', true, 'post', data)
  },
  cpsJdGoodsDetail: data => {
    return request('/cpsJdGoods/detail', true, 'get', data)
  },
  cpsJdGoodsSetExt: data => {
    return request('/cpsJdGoods/ext/set', true, 'post', data)
  },
  cpsJdGoodsQueryExt: skuId => {
    return request('/cpsJdGoods/ext/query', true, 'get', { skuId })
  },
  cpsJdGoodsShotUrl: (token, skuId) => {
    return request('/cpsJdGoods/shotUrl', true, 'get', { token, skuId })
  },
  cpsJdGoodsShotUrlSite: (token, materialUrl, couponUrl) => {
    return request('/cpsJdGoods/shotUrl/site', true, 'post', { token, materialUrl, couponUrl })
  },
  cpsJdOrders: data => {
    return request('/cpsJdOrder/list', true, 'post', data)
  },
  cpsJdOrderDetail: (token, id) => {
    return request('/cpsJdOrder/detail', true, 'get', { token, id })
  },
  cpsPddBeian: token => {
    return request('/cpsPddGoods/beian', true, 'get', { token })
  },
  cpsPddGoodsDetail: data => {
    return request('/cpsPddGoods/detail', true, 'get', data)
  },
  cpsPddGoodsShotUrl: (token, goodsSign) => {
    return request('/cpsPddGoods/shotUrl', true, 'get', { token, goodsSign })
  },
  cpsPddOrders: data => {
    return request('/cpsPddOrder/list', true, 'post', data)
  },
  cpsPddOrderDetail: (token, id) => {
    return request('/cpsPddOrder/detail', true, 'get', { token, id })
  },
  cpsTaobaoGoodsDetail: data => {
    return request('/cpsTaobaoGoods/detail', true, 'get', data)
  },
  cpsTaobaoGoodsShotUrl: (token, content) => {
    return request('/cpsTaobaoGoods/shotUrl', true, 'post', { token, content })
  },
  cpsTaobaoGoodsKouling: (token, content) => {
    return request('/cpsTaobaoGoods/kouling', true, 'post', { token, content })
  },
  // 回收
  recycleOrders: data => {
    return request('/recycleOrder/list', true, 'post', data)
  },
  recycleOrderApply: data => {
    return request('/recycleOrder/apply', true, 'post', data)
  },
  recycleOrderDetail: (token, id) => {
    return request('/recycleOrder/detail', true, 'get', { token, id })
  },
  recycleOrderFahuo: data => {
    return request('/recycleOrder/fahuo', true, 'post', data)
  },
  recycleOrderClose: (token, id) => {
    return request('/recycleOrder/close', true, 'post', { token, id })
  },
  recycleOrderDelete: (token, id) => {
    return request('/recycleOrder/del', true, 'post', { token, id })
  },
  // 会员卡
  cardList: data => {
    return request('/card/list', true, 'get', data)
  },
  cardInfo: id => {
    return request('/card/info', true, 'get', { id })
  },
  cardBuy: (token, id) => {
    return request('/card/buy', true, 'post', { token, id })
  },
  cardMyList: token => {
    return request('/card/my', true, 'get', { token })
  },
  cardMyLogs: data => {
    return request('/card/logs', true, 'post', data)
  },
  cardExchangeFromPwd: data => {
    return request('/card/exchange', true, 'post', data)
  },
  // 收藏卡片
  collectCardHis: data => {
    return request('/collectCard/del', true, 'post', data)
  },
  collectCardInfo: (number) => {
    return request('/collectCard/cardInfo', true, 'get', { number })
  },
  collectCardHisInfo: (token, id) => {
    return request('/collectCard/hisInfo', true, 'get', { token, id })
  },
  collectCardBind: data => {
    return request('/collectCard/bind', true, 'post', data)
  },
  collectCardUnBind: (token, id, smsCode) => {
    return request('/collectCard/bind', true, 'post', { token, id, smsCode })
  },
  // 其他
  bengenSaleTongjiList: data => {
    return request('/bengenSaleTongji/list', true, 'post', data)
  },
  bengenSaleTongjiRank: data => {
    return request('/bengenSaleTongji/rank', true, 'get', data)
  },
  // 购买课程
  courseInfoList: data => {
    return request('/courseInfo/list', true, 'post', data)
  },
  courseInfo: id => {
    return request('/courseInfo/info', true, 'get', { id })
  },
  courseBuyLogPublic: data => {
    return request('/courseBuyLog/public', true, 'post', data)
  },
  courseBuyLogMy: data => {
    return request('/courseBuyLog/my', true, 'post', data)
  },
  courseInfoBuy: data => {
    return request('/courseBuyLog/buy', true, 'post', data)
  },
  courseInfoBuyLogPay: (token, orderId) => {
    return request('/courseBuyLog/pay', true, 'post', { token, orderId })
  },
  courseInfoBuyLogDetail: (token, id, hxNumber = '') => {
    return request('/courseBuyLog/detail', true, 'get', { token, id, hxNumber })
  },
  courseInfoBuyLogClose: (token, orderId) => {
    return request('/courseBuyLog/close', true, 'post', { token, orderId })
  },
  courseInfoBuyLogDelete: (token, orderId) => {
    return request('/courseBuyLog/del', true, 'post', { token, orderId })
  },
  // 橱窗
  chuchuanSettingInfo: uid => {
    return request('/chuchuan/info', true, 'get', { uid })
  },
  chuchuanSettingModify: data => {
    return request('/chuchuan/modify', true, 'post', data)
  },
  chuchuanGoodsList: data => {
    return request('/chuchuanGoods/list', true, 'post', data)
  },
  chuchuanGoodsAdd: data => {
    return request('/chuchuanGoods/add', true, 'post', data)
  },
  chuchuanGoodsRemove: (token, goodsId) => {
    return request('/chuchuanGoods/remove', true, 'post', { token, goodsId })
  },
  chuchuanGoodsCheck: (token, goodsId) => {
    return request('/chuchuanGoods/check', true, 'get', { token, goodsId })
  },
  // 寄存
  jicunGoodsList: data => {
    return request('/jicunGoods/list', true, 'post', data)
  },
  jicunGoodsDetail: data => {
    return request('/jicunGoods/detail', true, 'get', data)
  },
  // ocr
  ocrBusinessLicense: imageUrl => {
    return request('/ocr/businessLicense', true, 'post', { imageUrl })
  },
  ocrIdcard: imageUrl => {
    return request('/ocr/idcard', true, 'post', { imageUrl })
  },
  ocrBankcard: imageUrl => {
    return request('/ocr/bankcard', true, 'post', { imageUrl })
  },
  ocrDriverLicense: imageUrl => {
    return request('/ocr/driverLicense', true, 'post', { imageUrl })
  },
  // 朋友圈
  momentsPublish: data => {
    return request('/user/moments/publish', true, 'post', data)
  },
  userMomentsList: data => {
    return request('/user/moments/list', true, 'get', data)
  },
  momentsDetail: (token, momentsId) => {
    return request('/user/moments/detail', true, 'get', { token, momentsId })
  },
  momentsDelete: (token, momentsId) => {
    return request('/user/moments/del', true, 'post', { token, momentsId })
  },
  momentsDeleteComment: (token, commentId) => {
    return request('/user/moments/delCommon', true, 'post', { token, commentId })
  },
  momentsLike: (token, momentsId) => {
    return request('/user/moments/like', true, 'post', { token, momentsId })
  },
  momentsComment: (token, momentsId, uid = '', content) => {
    return request('/user/moments/comment', true, 'post', { token, momentsId, uid, content })
  },
  momentsCommentLogs: data => {
    return request('/user/moments/logs', true, 'get', data)
  },
  momentsLogsRead: (token, logsIds) => {
    return request('/user/moments/logRead', true, 'post', { token, logsIds })
  },
  bottleMsgPublish: data => {
    return request('/bottleMsg/publish', true, 'post', data)
  },
  bottleMsgSalvage: token => {
    return request('/bottleMsg/salvage', true, 'get', { token })
  },
  userInvoiceInfo: token => {
    return request('/userInvoice/info', true, 'get', { token })
  },
  userInvoiceUnbind: token => {
    return request('/userInvoice/unbind', true, 'post', { token })
  },
  userInvoiceBind: data => {
    return request('/userInvoice/bind', true, 'post', data)
  },
  goodsLendsList: data => {
    return request('/goodsLends/list', true, 'post', data)
  },
  goodsLendsLogs: data => {
    return request('/goodsLends/logs', true, 'post', data)
  },
  // 支付宝小程序
  aliappUserRegister: data => {
    return request('/user/aliapp/register', true, 'post', data)
  },
  aliappUserLogin: data => {
    return request('/user/aliapp/login', true, 'post', data)
  },
  aliappUserAuthorize: data => {
    return request('/user/aliapp/authorize', true, 'post', data)
  },
  aliappWebUserAuthorize: data => {
    return request('/user/aliappweb/authorize', true, 'post', data)
  },
  aliappQrcode: content => {
    return request('/user/aliapp/qrcode', true, 'post', { content })
  },
  aliappBindMobile: data => {
    return request('/user/aliapp/bindMobile', true, 'post', data)
  },
  aliappGetMobile: (encryptedData) => {
    return request('/user/aliapp/getMobile', true, 'post', { encryptedData })
  },
  tempDataSet: (key, content) => {
    return request('/tempData/set', true, 'post', { key, content })
  },
  tempDataGet: key => {
    return request('/tempData/get', true, 'get', { key })
  },
  commonDatetime: () => {
    return request('/common/datetime', true, 'get')
  },
  commonDays: (startDay = '', days = '') => {
    return request('/common/days', false, 'get', { startDay, days })
  },
  commonDiffMillis: (d1 = '', d2 = '') => {
    return request('/common/diffMillis', false, 'get', { d1, d2 })
  },
  // 企业应用 组织/成员/网盘
  organizePrices: () => {
    return request('/organizeInfo/prices', true, 'get')
  },
  organizeCreate: data => {
    return request('/organizeInfo/create', true, 'post', data)
  },
  organizeUpgrade: data => {
    return request('/organizeInfo/upgrade', true, 'post', data)
  },
  organizeModify: data => {
    return request('/organizeInfo/modify', true, 'post', data)
  },
  organizeJoinKey: data => {
    return request('/organizeInfo/joinKey', true, 'get', data)
  },
  organizeJoin: data => {
    return request('/organizeInfo/join', true, 'post', data)
  },
  organizeGrantAdmin: data => {
    return request('/organizeInfo/grantAdmin', true, 'post', data)
  },
  organizeKick: data => {
    return request('/organizeInfo/kick', true, 'post', data)
  },
  organizeKickAllMembers: data => {
    return request('/organizeInfo/kickAllMembers', true, 'post', data)
  },
  organizeKickSelf: data => {
    return request('/organizeInfo/kickSelf', true, 'post', data)
  },
  organizeNick: data => {
    return request('/organizeInfo/nick', true, 'post', data)
  },
  organizeDelete: data => {
    return request('/organizeInfo/deleteOrganize', true, 'post', data)
  },
  organizeMyOrganizeInfo: data => {
    return request('/organizeInfo/myOrganizeInfo', true, 'post', data)
  },
  organizeDetail: data => {
    return request('/organizeInfo/organizeDetail', true, 'get', data)
  },
  organizeMembers: data => {
    return request('/organizeInfo/members', true, 'post', data)
  },
  newsExtFieldList: (token, organizeId, newsId) => {
    return request('/newsExtField/extFields', true, 'get', { token, organizeId, newsId })
  },
  newsExtFieldDynamic: (token, newsId) => {
    return request('/newsExtField/dynamic', true, 'get', { token, newsId })
  },
  newsExtFieldSet: data => {
    return request('/newsExtField/setField', true, 'post', data)
  },
  userAttendantList: data => {
    return request('/user/attendant/list', true, 'post', data)
  },
  userAttendantDetail: (id, token = '') => {
    return request('/user/attendant/detail', true, 'get', { id, token })
  },
  userAttendantGoods: (id) => {
    return request('/user/attendant/goods', true, 'get', { id })
  },
  userAttendantGoodsSet: (token, ids) => {
    return request('/user/attendant/goodsSet', true, 'post', { token, ids })
  },
  userAttendantBindShop: (token, shopId) => {
    return request('/user/attendant/bindShop', true, 'post', { shopId, token })
  },
  userAttendantUnBindShop: (token) => {
    return request('/user/attendant/unbindShop', true, 'post', { token })
  },
  userAttendantChangeStatus: data => {
    return request('/user/attendant/changeStatus', true, 'post', data)
  },
  userAttendantDaysTimesAttendant: (goodsId, day) => {
    return request('/user/attendant/daysTimesAttendant', true, 'get', { goodsId, day })
  },
  userAttendantDaysTimesAttendantSetQuery: (token, day) => {
    return request('/user/attendant/daysTimesAttendant/set/query', true, 'get', { token, day })
  },
  userAttendantDaysTimesAttendantSet: data => {
    return request('/user/attendant/daysTimesAttendant/set', true, 'post', data)
  },
  userAttendantListReputation: data => {
    return request('/user/attendant/listReputation', true, 'post', data)
  },
  userAttendantShowPics: id => {
    return request('/user/attendant/showPics', true, 'get', { id })
  },
  userAttendantShowPicsAdd: (token, url) => {
    return request('/user/attendant/showPicsAdd', true, 'post', { token, url })
  },
  userAttendantShowPicsDel: (token, id) => {
    return request('/user/attendant/showPicsDel', true, 'post', { token, id })
  },
  userAttendantUpdate: data => {
    return request('/user/attendant/update', true, 'post', data)
  },
  userAttendantOrderServing: (token, orderId) => {
    return request('/order/serving', true, 'post', { token, orderId })
  },
  userAttendantOrderRejectOrder: (token, orderId) => {
    return request('/order/rejectOrder', true, 'post', { token, orderId })
  },
  userAttendantOrderSuccess: (token, orderId) => {
    return request('/order/success', true, 'post', { token, orderId })
  },
  shopCategory: () => {
    return request('/shopCategory/all', true, 'get')
  },
  shopCategoryDetail: (id) => {
    return request('/shopCategory/info', true, 'get', { id })
  },
  yudingStatistics: function yudingStatistics(day) {
    return request('/shop/goods/yudingStatistics', true, 'get', { day });
  },
  contactList: () => {
    return request('/contact/list', true, 'get')
  },
  distributedLock: (key, seconds) => {
    return request('/distributedLock/lock', true, 'get', { key, seconds })
  },
  distributedLockRelease: (key) => {
    return request('/distributedLock/lock', true, 'get', { key })
  },
  communitySetting: () => {
    return request('/community/setting', true, 'get')
  },
  communityLeaderApply: data => {
    return request('/communityLeader/apply', true, 'post', data)
  },
  communityLeaderApplyInfo: token => {
    return request('/communityLeader/apply/info', true, 'get', { token })
  },
  communityLeaderBuy: token => {
    return request('/communityLeader/buy', true, 'post', { token })
  },
  communityOrderFahuo: data => {
    return request('/communityOrder/fahuo', true, 'post', data)
  },
  wxmpOpenid: code => {
    return request('/user/wxmp/openid', true, 'get', { code })
  },
  listingSet: () => {
    return request('/listingSet/info', true, 'get')
  },
  listingMyListing: (token) => {
    return request('/listingInfo/myListing', true, 'get', { token })
  },
  listingSave: data => {
    return request('/listingInfo/save', true, 'post', data)
  },
  listingDetail: (id) => {
    return request('/listingInfo/detail', true, 'get', { id })
  },
  listingCancel: (token, id) => {
    return request('/listingInfo/cancel', true, 'post', { token, id })
  },
  listingSuccess: (token, id) => {
    return request('/listingInfo/success', true, 'post', { token, id })
  },
  listingDelete: (token, id) => {
    return request('/listingInfo/delete', true, 'post', { token, id })
  },
  listingAddGoods: data => {
    return request('/listingInfo/addGoods', true, 'post', data)
  },
  listingRemoveGoods: data => {
    return request('/listingInfo/removeGoods', true, 'post', data)
  },
  listingJoinList: data => {
    return request('/listingInfo/joinList', true, 'post', data)
  },
}
