<!-- TOC -->

- [登录 & 注册](#登录--注册)
  - [用户注册](#用户注册)
    - [简单注册](#简单注册)
    - [详细注册](#详细注册)
  - [用户登录](#用户登录)
  - [检测登录 token 是否有效](#检测登录-token-是否有效)
- [用户信息](#用户信息)
  - [绑定手机号码](#绑定手机号码)
  - [获取用户信息](#获取用户信息)
  - [修改用户资料](#修改用户资料)
- [基础数据检索](#基础数据检索)
  - [读取所有省份](#读取所有省份)
  - [读取下级省市区数据](#读取下级省市区数据)
  - [查询手机号码归属地](#查询手机号码归属地)
- [读取 Banner 列表](#读取-banner-列表)
- [CMS模块](#cms模块)
  - [获取所有的CMS分类](#获取所有的cms分类)
  - [获取CMS文章列表](#获取cms文章列表)
  - [获取CMS文章详情](#获取cms文章详情)
- [商品管理](#商品管理)
  - [获取所有的商品分类](#获取所有的商品分类)
  - [获取商品列表](#获取商品列表)
  - [获取商品详情信息](#获取商品详情信息)
  - [获取商品价格（以便用户选择了不同规格尺寸后读取新价格）](#获取商品价格以便用户选择了不同规格尺寸后读取新价格)
  - [获取商品的评价](#获取商品的评价)
- [站点信息](#站点信息)
  - [读取后台vip等级（用于判断是免费后台还是专业后台）](#读取后台vip等级用于判断是免费后台还是专业后台)
  - [读取系统参数](#读取系统参数)
  - [批量读取系统参数](#批量读取系统参数)
- [根据视频编号读取视频详情](#根据视频编号读取视频详情)
- [优惠券管理](#优惠券管理)
  - [获取可领取优惠券](#获取可领取优惠券)
  - [领取优惠券](#领取优惠券)
  - [获取我的优惠券](#获取我的优惠券)
- [公告管理](#公告管理)
  - [获取公告列表](#获取公告列表)
  - [获取公告详情](#获取公告详情)
- [订单管理](#订单管理)
  - [我的订单统计](#我的订单统计)
  - [创建订单](#创建订单)
  - [查询订单列表](#查询订单列表)
  - [查询订单详情](#查询订单详情)
  - [确认收货接口](#确认收货接口)
  - [评价接口](#评价接口)
  - [关闭订单](#关闭订单)
  - [使用余额支付订单](#使用余额支付订单)
  - [申请退换货](#申请退换货)
  - [申请退换货详情数据获取](#申请退换货详情数据获取)
  - [申请退换货撤销](#申请退换货撤销)
- [积分管理](#积分管理)
  - [读取积分赠送规则](#读取积分赠送规则)
  - [签到](#签到)
  - [签到记录](#签到记录)
  - [读取今日签到信息](#读取今日签到信息)
  - [使用积分券兑换积分](#使用积分券兑换积分)
  - [小程序转发微信群赠送分享人积分](#小程序转发微信群赠送分享人积分)
  - [积分明细记录](#积分明细记录)
- [模板消息](#模板消息)
  - [记录 formid/预支付 id 用以后期发送消息](#记录-formid预支付-id-用以后期发送消息)
  - [给用户发送模板消息](#给用户发送模板消息)
- [收货地址管理](#收货地址管理)
  - [获取收货地址列表](#获取收货地址列表)
  - [添加收货地址](#添加收货地址)
  - [更新收货地址](#更新收货地址)
  - [获取默认地址](#获取默认地址)
  - [读取地址详细信息](#读取地址详细信息)
  - [获取默认地址v2.0](#获取默认地址v20)
  - [读取地址详细信息v2.0](#读取地址详细信息v20)
  - [删除](#删除)
- [在线支付](#在线支付)
  - [微信支付](#微信支付)
  - [支付宝支付(半自动)](#支付宝支付半自动)
- [商品砍价](#商品砍价)
  - [获取可砍价的商品列表](#获取可砍价的商品列表)
  - [获取商品砍价设置](#获取商品砍价设置)
  - [发起一个砍价](#发起一个砍价)
  - [砍价详情](#砍价详情)
  - [砍价助力](#砍价助力)
  - [我的助力信息](#我的助力信息)
- [拼团功能](#拼团功能)
  - [获取拼团配置](#获取拼团配置)
  - [开团接口](#开团接口)
  - [获取某个商品当前进行中的所有拼团](#获取某个商品当前进行中的所有拼团)
- [三级分销](#三级分销)
  - [申请成为分销商](#申请成为分销商)
  - [查看申请审核状态](#查看申请审核状态)
  - [查看我的分销团队成员](#查看我的分销团队成员)
  - [查看我的返佣记录](#查看我的返佣记录)
- [资金相关](#资金相关)
  - [获取充值满多少送多少规则](#获取充值满多少送多少规则)
  - [获取用户资产（余额、可用积分）信息](#获取用户资产余额可用积分信息)
  - [用户资金流水](#用户资金流水)
  - [申请提现](#申请提现)
  - [发票管理](#发票管理)
    - [申请发票](#申请发票)
    - [申请的发票列表](#申请的发票列表)
    - [发票详情](#发票详情)
  - [押金管理](#押金管理)
    - [支付押金](#支付押金)
    - [读取押金列表](#读取押金列表)
    - [押金详情](#押金详情)
    - [申请退回押金](#申请退回押金)
- [优惠买单](#优惠买单)
  - [获取买单优惠信息](#获取买单优惠信息)
  - [买单接口](#买单接口)
- [微信小程序](#微信小程序)
  - [无限获取二维码](#无限获取二维码)
- [知识付费【虚拟交易】](#知识付费虚拟交易)
  - [获取产品列表](#获取产品列表)
  - [获取产品详情](#获取产品详情)
  - [购买产品](#购买产品)
  - [读取成交记录](#读取成交记录)
- [门店[店铺]管理](#门店店铺管理)
  - [获取门店列表](#获取门店列表)
  - [获取门店详情](#获取门店详情)
- [文件管理](#文件管理)
  - [上传文件](#上传文件)
- [留言 & 反馈](#留言--反馈)
  - [提交留言反馈](#提交留言反馈)
  - [读取留言 & 评论列表](#读取留言--评论列表)

<!-- /TOC -->

# 登录 & 注册

## 用户注册

### 简单注册

> 只要提供 code 即可完成注册，但是无法读取昵称、头像等敏感数据
```
WXAPI.register_simple(Object object)
```
### 详细注册

> 除了 code 外，该注册方法还需要提供 encryptedData 和 iv 参数，注册后将可以读取到用户的昵称和头像等敏感数据
```
WXAPI.register_complex(Object object)
```

## 用户登录

> WXAPI.login(Object object)

## 检测登录 token 是否有效

> WXAPI.checkToken(token)

# 用户信息

## 绑定手机号码

> WXAPI.bindMobile(Object object)

## 获取用户信息

> WXAPI.userDetail(token)

## 修改用户资料

> WXAPI.modifyUserInfo(Object object)

# 基础数据检索

## 读取所有省份

> WXAPI.province()

## 读取下级省市区数据

> WXAPI.nextRegion(pid)

## 查询手机号码归属地

> WXAPI.queryMobileLocation(Object object)

# 读取 Banner 列表

> WXAPI.banners(Object object)

# CMS模块

## 获取所有的CMS分类

> WXAPI.cmsCategories()

## 获取CMS文章列表

> WXAPI.cmsArticles(Object object)

## 获取CMS文章详情

> WXAPI.cmsArticleDetail(id)

# 商品管理

## 获取所有的商品分类

> WXAPI.goodsCategory()

## 获取商品列表

> WXAPI.goods(Object object)

## 获取商品详情信息

> WXAPI.goodsDetail(id)

## 获取商品价格（以便用户选择了不同规格尺寸后读取新价格）

> WXAPI.goodsPrice(Object object)

## 获取商品的评价

> WXAPI.goodsReputation(Object object)

# 站点信息

## 读取后台vip等级（用于判断是免费后台还是专业后台）

> WXAPI.vipLevel()

## 读取系统参数

> WXAPI.queryConfig(Object object)
## 批量读取系统参数

> WXAPI.queryConfigBatch(keys)

# 根据视频编号读取视频详情

> WXAPI.videoDetail(videoId)

# 优惠券管理

## 获取可领取优惠券

> WXAPI.coupons(Object object)

## 领取优惠券

> WXAPI.fetchCoupons(Object object)

## 获取我的优惠券

> WXAPI.myCoupons(Object object)

# 公告管理

## 获取公告列表

> WXAPI.noticeList(Object object)

## 获取公告详情

> WXAPI.noticeDetail(id)

# 订单管理

## 我的订单统计

> WXAPI.orderStatistics(token)

## 创建订单

> WXAPI.orderCreate(Object object)

## 查询订单列表

> WXAPI.orderList(Object object)

## 查询订单详情

> WXAPI.orderDetail(id, token)

## 确认收货接口

> WXAPI.orderDelivery(orderId, token)

## 评价接口

> WXAPI.orderReputation(Object object)

## 关闭订单

> WXAPI.orderClose(orderId, token)

## 使用余额支付订单

> WXAPI.orderPay(orderId, token)

## 申请退换货

> WXAPI.refundApply(token, orderId, type, logisticsStatus, reason, amount, remark, pic)

## 申请退换货详情数据获取

> WXAPI.refundApplyDetail(token, orderId)

## 申请退换货撤销

> WXAPI.refundApplyCancel(token, orderId)

# 积分管理

## 读取积分赠送规则

> WXAPI.scoreRules(Object object)

## 签到

> WXAPI.scoreSign(token)

## 签到记录

> WXAPI.scoreSignLogs(Object object)

## 读取今日签到信息

> WXAPI.scoreTodaySignedInfo(token)

## 使用积分券兑换积分

> WXAPI.scoreExchange(number, token)
## 小程序转发微信群赠送分享人积分

> WXAPI.shareGroupGetScore(referrer, encryptedData, iv)

## 积分明细记录

> WXAPI.scoreLogs(Object object)

# 模板消息

## 记录 formid/预支付 id 用以后期发送消息

> WXAPI.addTempleMsgFormid(Object object)

## 给用户发送模板消息

> WXAPI.sendTempleMsg(Object object)

# 收货地址管理

## 获取收货地址列表

> WXAPI.queryAddress(token)

## 添加收货地址

> WXAPI.addAddress(Object object)

## 更新收货地址

> WXAPI.updateAddress(Object object)

## 获取默认地址

> WXAPI.defaultAddress(token)

## 读取地址详细信息

> WXAPI.addressDetail(id, token)

## 获取默认地址v2.0

> WXAPI.defaultAddress_v2(token)

## 读取地址详细信息v2.0

> WXAPI.addressDetail_v2(id, token)

## 删除

> WXAPI.deleteAddress(id, token)

# 在线支付

## 微信支付

> WXAPI.wxpay(Object object)

## 支付宝支付(半自动)

> WXAPI.alipay(Object object)

# 商品砍价

## 获取可砍价的商品列表

> WXAPI.kanjiaList(Object object)
## 获取商品砍价设置

> WXAPI.kanjiaSet(goodsId)

## 发起一个砍价

> WXAPI.kanjiaJoin(kjid, token)

## 砍价详情

> WXAPI.kanjiaDetail(kjid, joiner)

## 砍价助力

> WXAPI.kanjiaHelp(kjid, joiner, token, remark)

## 我的助力信息

> WXAPI.kanjiaHelpDetail(kjid, joiner, token)

# 拼团功能

## 获取拼团配置

> WXAPI.pingtuanSet(goodsId)
## 开团接口

> WXAPI.pingtuanOpen(goodsId, token)

## 获取某个商品当前进行中的所有拼团

> WXAPI.pingtuanList(goodsId)

# 三级分销

## 申请成为分销商

> WXAPI.fxApply(token, name, mobile)
## 查看申请审核状态

> WXAPI.fxApplyProgress(token)
## 查看我的分销团队成员

> WXAPI.fxMembers(Object object)
## 查看我的返佣记录

> WXAPI.fxCommisionLog(Object object)

# 资金相关

## 获取充值满多少送多少规则

> WXAPI.rechargeSendRules()

## 获取用户资产（余额、可用积分）信息

> WXAPI.userAmount(token)

## 用户资金流水

> WXAPI.cashLogs(Object object)

## 申请提现

> WXAPI.withDrawApply(money, token)

## 发票管理
### 申请发票
> WXAPI.invoiceApply(Object object)
### 申请的发票列表
> WXAPI.invoiceList(Object object)
### 发票详情
> WXAPI.invoiceDetail(token, id)

## 押金管理
### 支付押金
> WXAPI.payDeposit(Object object)
### 读取押金列表
> WXAPI.depositList(Object object)
### 押金详情
> WXAPI.depositInfo(token, id)
### 申请退回押金
> WXAPI.depositBackApply(token, id)

# 优惠买单

## 获取买单优惠信息

> WXAPI.payBillDiscounts()

## 买单接口

> WXAPI.payBill(Object object)

# 微信小程序

## 无限获取二维码

> WXAPI.wxaQrcode(Object object)

# 知识付费【虚拟交易】

## 获取产品列表

> WXAPI.virtualTraderList(Object object)

## 获取产品详情

> WXAPI.virtualTraderInfo(token, id)

## 购买产品

> WXAPI.virtualTraderBuy(token, id)
> 
## 读取成交记录

> WXAPI.virtualTraderBuyLogs(Object object)

# 门店[店铺]管理

## 获取门店列表

> WXAPI.fetchShops(Object object)

## 获取门店详情

> WXAPI.shopSubdetail(id)

# 文件管理

## 上传文件

> WXAPI.uploadFile(token, tempFilePath)

# 留言 & 反馈

## 提交留言反馈

> WXAPI.addComment(Object object)

## 读取留言 & 评论列表

> WXAPI.commentList(Object object)