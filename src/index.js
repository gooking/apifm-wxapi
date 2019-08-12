/* eslint-disable */
// 小程序开发api接口工具包，https://github.com/gooking/wxapi
var API_BASE_URL = 'https://api.it120.cc'
var subDomain = 'tz'

const request = (url, needSubDomain, method, data) => {
  const _url = API_BASE_URL + (needSubDomain ? '/' + subDomain : '') + url
  return new Promise((resolve, reject) => {
    wx.request({
      url: _url,
      method: method,
      data: data,
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
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
Promise.prototype.finally = function (callback) {
  var Promise = this.constructor;
  return this.then(
    function (value) {
      Promise.resolve(callback()).then(
        function () {
          return value;
        }
      );
    },
    function (reason) {
      Promise.resolve(callback()).then(
        function () {
          throw reason;
        }
      );
    }
  );
}

module.exports = {
  init2: (a, b) => {
    API_BASE_URL = a
    subDomain = b
  },
  init: (b) => {
    subDomain = b
  },
  request,
  queryMobileLocation: (mobile = '') => {
    return request('/common/mobile-segment/location', false, 'get', { mobile })
  },
  nextMobileSegment: (data) => {
    return request('/common/mobile-segment/next', false, 'post', data)
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
  scoreExchange: (number, token) => {
    return request('/score/exchange', true, 'post', {
      number,
      token
    })
  },
  scoreLogs: (data) => {
    return request('/score/logs', true, 'post', data)
  },
  shareGroupGetScore: (referrer, encryptedData, iv) => {
    return request('/score/share/wxa/group', true, 'post', {
      referrer,
      encryptedData,
      iv
    })
  },
  kanjiaList: (data) => {
    return request('/shop/goods/kanjia/list', true, 'post', data)
  },
  kanjiaSet: (goodsId) => {
    return request('/shop/goods/kanjia/set', true, 'get', { goodsId })
  },
  kanjiaJoin: (kjid, token) => {
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
  kanjiaHelp: (kjid, joiner, token, remark) => {
    return request('/shop/goods/kanjia/help', true, 'post', {
      kjid,
      joinerUser: joiner,
      token,
      remark
    })
  },
  kanjiaHelpDetail: (kjid, joiner, token) => {
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
  addTempleMsgFormid: (data) => {
    return request('/template-msg/wxa/formId', true, 'post', data)
  },
  sendTempleMsg: (data) => {
    return request('/template-msg/put', true, 'post', data)
  },
  wxpay: (data) => {
    return request('/pay/wx/wxapp', true, 'post', data)
  },
  alipay: (data) => {
    return request('/pay/alipay/semiAutomatic/payurl', true, 'post', data)
  },
  login_wx: (code) => {
    return request('/user/wxapp/login', true, 'post', {
      code,
      type: 2
    })
  },
  login_username: (data) => {
    return request('/user/username/login', true, 'post', data)
  },
  register_complex: (data) => {
    return request('/user/wxapp/register/complex', true, 'post', data)
  },
  register_simple: (data) => {
    return request('/user/wxapp/register/simple', true, 'post', data)
  },
  register_username: (data) => {
    return request('/user/username/register', true, 'post', data)
  },
  banners: (data) => {
    return request('/banner/list', true, 'get', data)
  },
  goodsCategory: () => {
    return request('/shop/goods/category/all', true, 'get')
  },
  goods: (data) => {
    return request('/shop/goods/list', true, 'post', data)
  },
  goodsDetail: (id) => {
    return request('/shop/goods/detail', true, 'get', {
      id
    })
  },
  goodsPrice: (data) => {
    return request('/shop/goods/price', true, 'post', data)
  },
  goodsReputation: (data) => {
    return request('/shop/goods/reputation', true, 'post', data)
  },
  coupons: (data) => {
    return request('/discounts/coupons', true, 'get', data)
  },
  couponDetail: (id) => {
    return request('/discounts/detail', true, 'get', {
      id
    })
  },
  myCoupons: (data) => {
    return request('/discounts/my', true, 'get', data)
  },
  fetchCoupons: (data) => {
    return request('/discounts/fetch', true, 'post', data)
  },
  sendCoupons: (data) => {
    return request('/discounts/send', true, 'post', data)
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
  deleteAddress: (id, token) => {
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
  defaultAddress: (token) => {
    return request('/user/shipping-address/default', true, 'get', {
      token
    })
  },
  addressDetail: (id, token) => {
    return request('/user/shipping-address/detail', true, 'get', {
      id,
      token
    })
  },
  pingtuanSet: (goodsId) => {
    return request('/shop/goods/pingtuan/set', true, 'get', {
      goodsId
    })
  },
  pingtuanOpen: (goodsId, token) => {
    return request('/shop/goods/pingtuan/open', true, 'post', {
      goodsId,
      token
    })
  },
  pingtuanList: (goodsId) => {
    return request('/shop/goods/pingtuan/list', true, 'get', {
      goodsId
    })
  },
  friendlyPartnerList: (type = '') => {
    return request('/friendly-partner/list', true, 'post', {
      type
    })
  },
  videoDetail: (videoId) => {
    return request('/media/video/detail', true, 'get', {
      videoId
    })
  },
  bindMobile: (data) => {
    return request('/user/wxapp/bindMobile', true, 'post', data)
  },
  userDetail: (token) => {
    return request('/user/detail', true, 'get', {
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
  orderDetail: (id, token) => {
    return request('/order/detail', true, 'get', {
      id,
      token
    })
  },
  orderDelivery: (orderId, token) => {
    return request('/order/delivery', true, 'post', {
      orderId,
      token
    })
  },
  orderReputation: (data) => {
    return request('/order/reputation', true, 'post', data)
  },
  orderClose: (orderId, token) => {
    return request('/order/close', true, 'post', {
      orderId,
      token
    })
  },
  orderPay: (orderId, token) => {
    return request('/order/pay', true, 'post', {
      orderId,
      token
    })
  },
  orderStatistics: (token) => {
    return request('/order/statistics', true, 'get', {
      token
    })
  },
  withDrawApply: (token, money) => {
    return request('/user/withDraw/apply', true, 'post', {
      money,
      token
    })
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
  province: () => {
    return request('/common/region/v2/province', false, 'get')
  },
  nextRegion: (pid) => {
    return request('/common/region/v2/child', false, 'get', {
      pid
    })
  },
  cashLogs: (data) => {
    return request('/user/cashLog', true, 'post', data)
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
  payBill: (data) => {
    return request('/payBill/pay', true, 'post', data)
  },
  vipLevel: () => {
    return request('/config/vipLevel', true, 'get')
  },
  fxApply: (token, name, mobile) => {
    return request('/saleDistribution/apply', true, 'post', { token, name, mobile })
  },
  fxApplyProgress: (token) => {
    return request('/saleDistribution/apply/progress', true, 'get', { token })
  },
  fxMembers: (data) => {
    return request('/saleDistribution/members', true, 'post', data)
  },
  fxCommisionLog: (data) => {
    return request('/saleDistribution/commision/log', true, 'post', data)
  },
  wxaQrcode: (data) => {
    return request('/qrcode/wxa/unlimit', true, 'post', data)
  },
  uploadFile: (token, tempFilePath) => {
    const uploadUrl = API_BASE_URL + '/' + subDomain + '/dfs/upload/file'
    return new Promise((resolve, reject) => {
      wx.uploadFile({
        url: uploadUrl,
        filePath: tempFilePath,
        name: 'upfile',
        formData: {
          'token': token
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
  refundApply: (token, orderId, type, logisticsStatus, reason, amount, remark, pic) => {
    return request('/order/refundApply/apply', true, 'post', {
      token,
      orderId,
      type,
      logisticsStatus,
      reason,
      amount,
      remark,
      pic
    })
  },
  refundApplyDetail: (token, orderId) => {
    return request('/order/refundApply/info', true, 'get', {
      token,
      orderId
    })
  },
  refundApplyCancel: (token, orderId) => {
    return request('/order/refundApply/cancel', true, 'post', {
      token,
      orderId
    })
  },
  cmsCategories: () => {
    return request('/cms/category/list', true, 'get', {})
  },
  cmsCategoryDetail: (id) => {
    return request('/cms/category/detail', true, 'get', { id })
  },
  cmsArticles: (data) => {
    return request('/cms/news/list', true, 'post', data)
  },
  cmsArticleUsefulLogs: (data) => {
    return request('/cms/news/useful/logs', true, 'post', data)
  },
  cmsArticleDetail: (id) => {
    return request('/cms/news/detail', true, 'get', { id })
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
  cmsPage: (key) => {
    return request('/cms/page/info', true, 'get', { key })
  },
  cmsTags: () => {
    return request('/cms/tags/list', true, 'get', {  })
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
  fetchShops: (data) => {
    return request('/shop/subshop/list', true, 'post', data)
  },
  shopSubdetail: (id) => {
    return request('/shop/subshop/detail/v2', true, 'get', { id })
  },
  addComment: (data) => {
    return request('/comment/add', true, 'post', data)
  },
  commentList: (data) => {
    return request('/comment/list', true, 'post', data)
  },
  modifyUserInfo: (data) => {
    return request('/user/modify', true, 'post', data)
  },
  uniqueId: (type = '') => {
    return request('/uniqueId/get', true, 'get', { type })
  },
  queryBarcode: (barcode = '') => {
    return request('/barcode/info', true, 'get', { barcode })
  },
  luckyInfo: (id) => {
    return request('/luckyInfo/info', true, 'get', { id })
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
  jsonSet: (data) => {
    return request('/json/set', true, 'post', data)
  },
  jsonDelete: (token = '', id) => {
    return request('/json/delete', true, 'post', { token, id })
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
  smsValidateCode: (mobile, key = '', picCode = '') => {
    return request('/verification/sms/get', true, 'get', { mobile, key, picCode })
  },
  smsValidateCodeCheck: (mobile, code) => {
    return request('/verification/sms/check', true, 'post', { mobile, code })
  },
}
