<!-- TOC -->

- [站点信息](#站点信息)
    - [站点信息统计](#站点信息统计)
    - [通过微信小程序appid获取专属域名](#通过微信小程序appid获取专属域名)
    - [订单统计](#订单统计)
    - [获取每日销售额](#获取每日销售额)
- [基础运维](#基础运维)
    - [省市区/行政区数据](#省市区行政区数据)
        - [读取所有省份](#读取所有省份)
        - [读取下级省市区数据](#读取下级省市区数据)
    - [读取 Banner 列表](#读取-banner-列表)
    - [公告管理](#公告管理)
        - [读取最新的一条公告](#读取最新的一条公告)
        - [获取公告列表](#获取公告列表)
        - [获取公告详情](#获取公告详情)
    - [读取后台vip等级（用于判断是免费后台还是专业后台）](#读取后台vip等级用于判断是免费后台还是专业后台)
    - [系统参数](#系统参数)
        - [读取系统参数](#读取系统参数)
        - [批量读取系统参数](#批量读取系统参数)
    - [获取友情链接/合作伙伴](#获取友情链接合作伙伴)
    - [JSON数据云存储](#json数据云存储)
        - [设置 JSON 数据](#设置-json-数据)
        - [读取设置的 JSON 数据列表](#读取设置的-json-数据列表)
        - [删除 JSON 数据](#删除-json-数据)
    - [分布式文件管理](#分布式文件管理)
        - [上传本地文件](#上传本地文件)
        - [下载远程文件](#下载远程文件)
        - [获取文件列表](#获取文件列表)
- [安全中心](#安全中心)
    - [图形验证码](#图形验证码)
        - [获取验证码图片地址](#获取验证码图片地址)
        - [校验输入验证码是否正确](#校验输入验证码是否正确)
    - [短信验证码](#短信验证码)
        - [获取验证码(发送短信)](#获取验证码发送短信)
        - [校验输入验证码是否正确](#校验输入验证码是否正确-1)
    - [邮箱验证码](#邮箱验证码)
        - [获取验证码(发送邮件)](#获取验证码发送邮件)
        - [校验输入验证码是否正确](#校验输入验证码是否正确-2)
- [登录 & 注册](#登录--注册)
    - [用户注册](#用户注册)
        - [检测 referrer 邀请码是否正确](#检测-referrer-邀请码是否正确)
        - [小程序静默授权](#小程序静默授权)
        - [小程序静默授权[服务商模式]](#小程序静默授权服务商模式)
        - [小程序简单注册](#小程序简单注册)
        - [小程序简单注册[服务商模式]](#小程序简单注册服务商模式)
        - [小程序详细注册](#小程序详细注册)
        - [小程序详细注册[服务商模式]](#小程序详细注册服务商模式)
        - [用户名注册](#用户名注册)
        - [邮箱注册](#邮箱注册)
        - [手机号注册](#手机号注册)
    - [用户登录](#用户登录)
        - [微信小程序登陆](#微信小程序登陆)
        - [微信小程序登陆[服务商模式]](#微信小程序登陆服务商模式)
        - [微信小程序一键手机号登录](#微信小程序一键手机号登录)
        - [微信小程序一键手机号登录[服务商模式]](#微信小程序一键手机号登录服务商模式)
        - [用户名登录](#用户名登录)
        - [邮箱登录](#邮箱登录)
        - [手机号码登录](#手机号码登录)
        - [短信验证码登录](#短信验证码登录)
    - [检测登录 token 是否有效](#检测登录-token-是否有效)
    - [重置密码](#重置密码)
        - [用手机找回密码](#用手机找回密码)
        - [用邮箱找回密码](#用邮箱找回密码)
    - [退出登录](#退出登录)
- [用户管理](#用户管理)
    - [绑定手机号码](#绑定手机号码)
        - [小程序](#小程序)
        - [小程序[服务商]](#小程序服务商)
        - [短信验证码认证](#短信验证码认证)
    - [设置用户名](#设置用户名)
    - [设置邮箱地址](#设置邮箱地址)
    - [绑定小程序](#绑定小程序)
    - [绑定小程序[服务商模式]](#绑定小程序服务商模式)
    - [获取用户信息](#获取用户信息)
    - [获取用户id、openid、unionid](#获取用户idopenidunionid)
    - [修改用户资料](#修改用户资料)
    - [实名认证](#实名认证)
    - [会员体系](#会员体系)
        - [获取所有的会员等级](#获取所有的会员等级)
        - [查看会员等级详情](#查看会员等级详情)
        - [会员等级收费列表](#会员等级收费列表)
        - [购买会员](#购买会员)
        - [获取我的购买 / 续费记录](#获取我的购买--续费记录)
    - [收货地址管理](#收货地址管理)
        - [获取所有的收货地址](#获取所有的收货地址)
        - [添加收货地址](#添加收货地址)
        - [更新收货地址](#更新收货地址)
        - [获取默认的地址](#获取默认的地址)
        - [读取地址详细](#读取地址详细)
        - [删除收货地址](#删除收货地址)
- [CMS模块](#cms模块)
    - [分类管理](#分类管理)
        - [获取所有分类](#获取所有分类)
        - [获取分类详情](#获取分类详情)
    - [文章管理](#文章管理)
        - [文章列表](#文章列表)
        - [文章详情](#文章详情)
        - [读取上一篇和下一篇文章](#读取上一篇和下一篇文章)
        - [用户发布文章](#用户发布文章)
        - [文章收藏](#文章收藏)
            - [收藏](#收藏)
            - [检测当前用户是否已收藏](#检测当前用户是否已收藏)
            - [读取收藏列表数据](#读取收藏列表数据)
            - [根据收藏记录的ID删除收藏](#根据收藏记录的id删除收藏)
            - [根据文章的ID删除收藏](#根据文章的id删除收藏)
        - [点赞/踩一下](#点赞踩一下)
            - [发表态度](#发表态度)
            - [读取点赞记录](#读取点赞记录)
    - [单页信息(关于我们/联系我们/...)](#单页信息关于我们联系我们)
    - [获取文章标签列表(用于展示类似“标签云”)](#获取文章标签列表用于展示类似标签云)
    - [留言 & 反馈](#留言--反馈)
        - [提交留言反馈](#提交留言反馈)
        - [读取留言 & 评论列表](#读取留言--评论列表)
- [商城模块](#商城模块)
    - [门店管理](#门店管理)
        - [读取所有的门店列表](#读取所有的门店列表)
        - [门店详情](#门店详情)
        - [门店申请入驻](#门店申请入驻)
        - [获取我的门店列表](#获取我的门店列表)
        - [获取取货点列表（自提点）](#获取取货点列表自提点)
    - [商品分类](#商品分类)
        - [获取所有的分类](#获取所有的分类)
        - [获取分类详情](#获取分类详情-1)
    - [商品管理](#商品管理)
        - [获取商品列表](#获取商品列表)
        - [获取商品详情信息](#获取商品详情信息)
        - [获取商品的限购设置](#获取商品的限购设置)
        - [读取商品可选配件列表](#读取商品可选配件列表)
        - [获取商品价格「一般用在选择不同规格尺寸后需要实时显示售价」](#获取商品价格一般用在选择不同规格尺寸后需要实时显示售价)
        - [获取商品的每日价格&每日库存「适用酒店预订、票务预订类」](#获取商品的每日价格每日库存适用酒店预订票务预订类)
        - [时段定价-拉取可选的日期](#时段定价-拉取可选的日期)
        - [时段定价-拉取某天的所有时段定价信息](#时段定价-拉取某天的所有时段定价信息)
        - [计算物流/快递模板费用计算方法](#计算物流快递模板费用计算方法)
        - [拉取当前会员可以显示的折扣信息](#拉取当前会员可以显示的折扣信息)
        - [获取商品的评价](#获取商品的评价)
        - [商品购买动态](#商品购买动态)
        - [用户发布商品](#用户发布商品)
        - [删除自己发布的商品](#删除自己发布的商品)
    - [我的购买历史商品](#我的购买历史商品)
        - [获取购买过的历史商品列表](#获取购买过的历史商品列表)
        - [删除购买记录](#删除购买记录)
    - [商品收藏](#商品收藏)
        - [收藏某个商品](#收藏某个商品)
        - [检测当前商品是否已被收藏](#检测当前商品是否已被收藏)
        - [获取收藏的商品](#获取收藏的商品)
        - [删除收藏的某个商品](#删除收藏的某个商品)
    - [购物车](#购物车)
        - [读取购物车数据](#读取购物车数据)
        - [添加商品到购物车](#添加商品到购物车)
        - [修改购物车商品数量](#修改购物车商品数量)
        - [删除购物车中某条记录](#删除购物车中某条记录)
        - [购物车中某条记录选中/取消选中](#购物车中某条记录选中取消选中)
        - [一键清空购物车](#一键清空购物车)
    - [订单管理](#订单管理)
        - [创建订单](#创建订单)
        - [关闭订单](#关闭订单)
        - [删除订单](#删除订单)
        - [支付订单[使用余额]](#支付订单使用余额)
        - [确认收货](#确认收货)
        - [订单核销](#订单核销)
        - [获取所有订单](#获取所有订单)
        - [订单详情](#订单详情)
        - [评价接口](#评价接口)
        - [申请退换货[售后]](#申请退换货售后)
        - [申请退换货详情](#申请退换货详情)
        - [撤销退换货申请](#撤销退换货申请)
        - [拉取某订单的所有售后记录](#拉取某订单的所有售后记录)
    - [虚拟物品交易[知识付费]](#虚拟物品交易知识付费)
        - [商品列表](#商品列表)
        - [商品详情](#商品详情)
        - [购买商品](#购买商品)
        - [我的购买记录](#我的购买记录)
- [根据视频编号读取视频详情](#根据视频编号读取视频详情)
- [营销工具](#营销工具)
    - [优惠券管理](#优惠券管理)
        - [获取系统所有优惠券列表](#获取系统所有优惠券列表)
        - [查看优惠券详情](#查看优惠券详情)
        - [领取优惠券](#领取优惠券)
        - [我的所有优惠券](#我的所有优惠券)
        - [拉取优惠券合成规则](#拉取优惠券合成规则)
        - [优惠券合成](#优惠券合成)
        - [赠送优惠券给他人](#赠送优惠券给他人)
        - [使用动态口令领取优惠券](#使用动态口令领取优惠券)
    - [商品砍价](#商品砍价)
        - [获取商品砍价设置](#获取商品砍价设置)
        - [发起[创建]砍价，继而邀请好友来帮自己砍到底价](#发起创建砍价继而邀请好友来帮自己砍到底价)
        - [我发起[创建]的砍价详情](#我发起创建的砍价详情)
        - [放弃上一次砍价](#放弃上一次砍价)
        - [砍价详情](#砍价详情)
        - [帮好友砍价](#帮好友砍价)
        - [查询我帮好友砍掉的金额](#查询我帮好友砍掉的金额)
    - [拼团功能](#拼团功能)
        - [获取某一个商品的拼团配置](#获取某一个商品的拼团配置)
        - [批量获取一组商品的拼团配置](#批量获取一组商品的拼团配置)
        - [读取商品的默认团信息](#读取商品的默认团信息)
        - [拉取商品多级拼团价格信息](#拉取商品多级拼团价格信息)
        - [开团[我发起一个团购，我是团长，让别人来参加]](#开团我发起一个团购我是团长让别人来参加)
        - [获取某个商品当前进行中的所有拼团](#获取某个商品当前进行中的所有拼团)
        - [获取某个团购的参与用户列表](#获取某个团购的参与用户列表)
        - [读取我参与过的所有团购记录](#读取我参与过的所有团购记录)
    - [三级分销](#三级分销)
        - [直接购买分销商资格](#直接购买分销商资格)
        - [直接购买分销商资格](#直接购买分销商资格-1)
        - [申请成为分销商](#申请成为分销商)
        - [申请进度查询](#申请进度查询)
        - [团队管理](#团队管理)
        - [佣金记录[返佣明细]](#佣金记录返佣明细)
        - [分销商累计销售额排行榜](#分销商累计销售额排行榜)
        - [分销商某天的销售额排行榜](#分销商某天的销售额排行榜)
        - [名下团队成员人数统计](#名下团队成员人数统计)
        - [我的佣金统计](#我的佣金统计)
        - [用户绑定分销商](#用户绑定分销商)
    - [合伙人/团队长/ 二级分销](#合伙人团队长-二级分销)
        - [读取合伙人分销设置](#读取合伙人分销设置)
        - [用户绑定团队长成为团队成员](#用户绑定团队长成为团队成员)
        - [团队成员购买升级为团队长](#团队成员购买升级为团队长)
        - [团队成员统计](#团队成员统计)
        - [团队成员列表接口](#团队成员列表接口)
- [积分模块](#积分模块)
    - [积分抵扣规则](#积分抵扣规则)
    - [积分赠送规则](#积分赠送规则)
    - [签到送积分](#签到送积分)
        - [签到规则](#签到规则)
        - [签到](#签到)
        - [读取今日签到信息](#读取今日签到信息)
        - [签到记录](#签到记录)
    - [使用积分券兑换积分](#使用积分券兑换积分)
    - [将积分兑换成余额](#将积分兑换成余额)
    - [转发微信群获得积分奖励](#转发微信群获得积分奖励)
    - [积分明细](#积分明细)
    - [成长值](#成长值)
        - [用积分兑换成长值](#用积分兑换成长值)
        - [成长值变动明细](#成长值变动明细)
- [资金 / 财务 相关](#资金--财务-相关)
    - [交易密码](#交易密码)
        - [设置交易密码](#设置交易密码)
        - [修改交易密码](#修改交易密码)
        - [重置交易密码](#重置交易密码)
    - [获取资产信息（余额、可用积分）](#获取资产信息余额可用积分)
    - [在线支付(充值)](#在线支付充值)
        - [获取充值规则（满多少送多少）](#获取充值规则满多少送多少)
        - [微信小程序支付](#微信小程序支付)
        - [微信小程序支付[FOMO跨境支付]](#微信小程序支付fomo跨境支付)
        - [payNow跨境支付](#paynow跨境支付)
        - [FOMO网关支付](#fomo网关支付)
        - [微信小程序支付[服务商版本]](#微信小程序支付服务商版本)
        - [扫呗在线支付](#扫呗在线支付)
        - [wepayez境外支付](#wepayez境外支付)
        - [intelsalon云美集付](#intelsalon云美集付)
        - [支付宝支付(半自动)](#支付宝支付半自动)
        - [充值记录](#充值记录)
        - [查询支付结果](#查询支付结果)
    - [优惠买单](#优惠买单)
        - [获取买单优惠](#获取买单优惠)
        - [买单](#买单)
    - [资金流水](#资金流水)
    - [提现管理](#提现管理)
        - [申请提现](#申请提现)
        - [提现记录](#提现记录)
        - [提现记录详情](#提现记录详情)
    - [发票管理](#发票管理)
        - [申请发票](#申请发票)
        - [申请的发票列表](#申请的发票列表)
        - [发票详情](#发票详情)
    - [押金管理](#押金管理)
        - [支付押金](#支付押金)
        - [获取押金记录](#获取押金记录)
        - [押金详情](#押金详情)
        - [申请退回押金](#申请退回押金)
- [小程序工具类](#小程序工具类)
    - [无限获取二维码](#无限获取二维码)
    - [小程序数据解密](#小程序数据解密)
    - [小程序数据解密[服务商模式]](#小程序数据解密服务商模式)
    - [模板消息](#模板消息)
        - [保存 formid/预支付Id](#保存-formid预支付id)
        - [给用户发送模板消息](#给用户发送模板消息)
- [活动 & 工具](#活动--工具)
    - [在线获取二维码](#在线获取二维码)
    - [分布式系统唯一ID](#分布式系统唯一id)
    - [手机号段服务](#手机号段服务)
        - [归属地查询](#归属地查询)
        - [读取下一个号段](#读取下一个号段)
    - [抽奖功能](#抽奖功能)
        - [抽奖项目详情](#抽奖项目详情)
        - [参与抽奖](#参与抽奖)
        - [我的抽奖信息](#我的抽奖信息)
        - [抽奖项目的所有抽奖记录明细](#抽奖项目的所有抽奖记录明细)
    - [预约/报名](#预约报名)
        - [读取所有的预约/报名项目](#读取所有的预约报名项目)
        - [项目详情](#项目详情)
        - [进行预约或者在线报名](#进行预约或者在线报名)
        - [支付报名费](#支付报名费)
        - [更新预约/报名信息](#更新预约报名信息)
        - [我的报名信息](#我的报名信息)
        - [我所有的预约记录/报名记录](#我所有的预约记录报名记录)
        - [读取某个项目的所有报名团队列表](#读取某个项目的所有报名团队列表)
        - [查看团队详情](#查看团队详情)
        - [拉取团队成员列表](#拉取团队成员列表)
        - [团队长删除[踢]团队成员](#团队长删除踢团队成员)
    - [投票功能](#投票功能)
        - [投票项目](#投票项目)
        - [投票详情](#投票详情)
        - [我的投票](#我的投票)
        - [我要投票](#我要投票)
        - [查看投票明细](#查看投票明细)
    - [商品条码查询](#商品条码查询)
    - [短链接服务](#短链接服务)
    - [地图工具](#地图工具)
        - [计算2个坐标之间的直线距离](#计算2个坐标之间的直线距离)
        - [计算2个坐标之间的导航距离](#计算2个坐标之间的导航距离)
        - [将坐标地址转换为详细地址](#将坐标地址转换为详细地址)
        - [地图上搜索](#地图上搜索)
    - [排队叫号](#排队叫号)
        - [获取所有的队列](#获取所有的队列)
        - [取号](#取号)
        - [我的取号情况](#我的取号情况)
- [社交通讯](#社交通讯)
    - [好友管理](#好友管理)
        - [读取好友列表](#读取好友列表)
        - [添加好友](#添加好友)
        - [查看好友详情](#查看好友详情)
    - [站内信管理](#站内信管理)
        - [站内消息列表](#站内消息列表)
        - [设置为已读](#设置为已读)
        - [删除站内信](#删除站内信)
    - [用户关注](#用户关注)
        - [判断是否关注某人](#判断是否关注某人)
        - [关注某人](#关注某人)
        - [取消关注某人](#取消关注某人)
        - [读取用户详情](#读取用户详情)
        - [我关注的用户列表](#我关注的用户列表)
        - [我的粉丝列表](#我的粉丝列表)
        - [关注统计](#关注统计)
- [扫码点餐](#扫码点餐)
    - [扫桌码获取token](#扫桌码获取token)
    - [下单（厨） / 加菜](#下单厨--加菜)
- [购买课程模块](#购买课程模块)
    - [获取课程列表](#获取课程列表)
    - [获取课程详情](#获取课程详情)
    - [获取某个课程的报名用户信息](#获取某个课程的报名用户信息)
    - [获取我的报名记录](#获取我的报名记录)
    - [课程购买订单详情](#课程购买订单详情)
    - [购买课程](#购买课程)
    - [用余额支付购买课程订单](#用余额支付购买课程订单)
    - [关闭课程订单](#关闭课程订单)
    - [删除课程订单](#删除课程订单)

<!-- /TOC -->

# 站点信息

## 站点信息统计

```js
WXAPI.siteStatistics()
```

读取当前站点的数据统计，示例如下:

```json
{
  "code": 0,
  "data": {
    "dfs": {
      "capacity": 6668237,
      "capacityLeft": 0,
      "capacityLeftStr": "0 B",
      "capacityStr": "6.36 MB", // 当前占用文件空间大小
      "count": 23, // 文件数量
      "id": 7709,
      "isFixed": true
    },
    "wxAppid": "wxa46b09d413fbcaff", // 当前后台配置的微信公众号的Appid
    "cmsArticle": {
      "comments": 0,  // 评论数
      "numbers": 10,  // 文章数量
      "fav": 0, // 收藏数量
      "views": 120  // 浏览量
    }
  },
  "msg": "success"
}
```

## 通过微信小程序appid获取专属域名

```js
WXAPI.fetchSubDomainByWxappAppid(appid)
```

## 订单统计

```js
WXAPI.orderStatisticsv2(Object object)
```
参数：
- token 用户登陆token
- isNeedLogistics ： true / false ，是否需要快递

订单统计，用以显示订单统计或者是订单类型小红点，该方法将会返回一下几个数据：

1. count_id_no_pay: 待支付订单数量
2. count_id_no_transfer: 已支付等待商家发货订单数量
3. count_id_no_confirm: 商家已发货，等待确认收货订单数量
4. count_id_no_reputation: 交易成功，等待评价的订单数量
5. count_id_success: 交易成功，且已评价的订单数量
6. count_id_close: 关闭的订单数量

## 获取每日销售额

```js
WXAPI.siteStatisticsSaleroom(Object object)
```

当前接口，必须在系统参数中开启 statistics_saleroom_open 开关类型的参数，才能正常使用

需要如下参数:
1. token 用户对登陆token
2. dateBegin 开始日期，如：2020-06-29
3. dateEnd 开始日期，如：2020-06-29

# 基础运维

## 省市区/行政区数据

### 读取所有省份

> WXAPI.province()

### 读取下级省市区数据

> WXAPI.nextRegion(pid)

## 读取 Banner 列表

> WXAPI.banners(Object object)

## 公告管理

### 读取最新的一条公告

> WXAPI.noticeLastOne(type)

### 获取公告列表

> WXAPI.noticeList(Object object)

### 获取公告详情

> WXAPI.noticeDetail(id)

## 读取后台vip等级（用于判断是免费后台还是专业后台）

> WXAPI.vipLevel()

## 系统参数

### 读取系统参数

```js
WXAPI.queryConfigValue(key)
```

### 批量读取系统参数

```js
WXAPI.queryConfigBatch(keys)
```

多个key用英文的逗号分隔开

## 获取友情链接/合作伙伴

> WXAPI.friendlyPartnerList(type)

## JSON数据云存储

### 设置 JSON 数据

```js
WXAPI.jsonSet(Object object)
```


### 读取设置的 JSON 数据列表

```js
WXAPI.jsonList(Object object)
```

### 删除 JSON 数据

```js
WXAPI.jsonDelete(token, id)
```

## 分布式文件管理

### 上传本地文件

> WXAPI.uploadFile(token, tempFilePath)

### 下载远程文件

> WXAPI.uploadFileFromUrl(remoteFileUrl, ext)

### 获取文件列表

> WXAPI.uploadFileList(path)

# 安全中心

## 图形验证码

### 获取验证码图片地址

```
WXAPI.graphValidateCodeUrl(key)
```
> 将该图片地址直接显示在图片控件上即可；
> 
> key 为随机数，下面的校验方法需要用到

### 校验输入验证码是否正确

```
WXAPI.graphValidateCodeCheck(key, code)
```
> key为上面获取方法的key，必须保持一致，否则一直会显示错误；
> 
> code 为用户输入的验证码内容

## 短信验证码

### 获取验证码(发送短信)

```
WXAPI.smsValidateCode(mobile, key, picCode)
```
> 短信验证码自动下发到 mobile 对应的手机号码；
> 
> 当后台设置了发送短信验证码必须开启图形验证码校验时，必须传 key 和 picCode 参数，否则不用传；
> 
> key 和 picCode 参数，请查阅图形验证码接口

### 校验输入验证码是否正确

```
WXAPI.smsValidateCodeCheck(mobile, code)
```
> code 为用户手机上收到的验证码

## 邮箱验证码

### 获取验证码(发送邮件)

```js
WXAPI.mailValidateCode(mail)
```

### 校验输入验证码是否正确

```js
WXAPI.mailValidateCodeCheck(mail, code)
```

# 登录 & 注册

## 用户注册

### 检测 referrer 邀请码是否正确

```js
WXAPI.checkReferrer(referrer)
```

注册的时候，让用户填写邀请码，通过该接口，检测邀请码是否填写正确
- code == 0 ，邀请码正确
- code == 700 ，邀请码错误

### 小程序静默授权

用户无感知授权，可实现自动登陆、注册。所以使用该接口，就无需再使用注册、登陆接口了

```js
WXAPI.authorize(Object object)
```

参数说明：

- code 临时凭证，请通过小程序官方接口 wx.login 获取
- referrer [可选] 邀请人用户id
- postJsonString [可选] Json格式的用户扩展数据

### 小程序静默授权[服务商模式]

用户无感知授权，可实现自动登陆、注册。所以使用该接口，就无需再使用注册、登陆接口了

```js
WXAPI.wxappServiceAuthorize(Object object)
```

参数说明：

- code 临时凭证，请通过小程序官方接口 wx.login 获取
- referrer [可选] 邀请人用户id
- postJsonString [可选] Json格式的用户扩展数据

### 小程序简单注册

```js
WXAPI.register_simple(Object object)
```

参数说明：
- code wx.login 获取的 code
- referrer [可选] 邀请人用户id
- postJsonString [可选] Json格式的用户扩展数据

### 小程序简单注册[服务商模式]

```js
WXAPI.wxappServiceRegisterSimple(Object object)
```

参数说明：
- code wx.login 获取的 code
- referrer [可选] 邀请人用户id
- postJsonString [可选] Json格式的用户扩展数据

### 小程序详细注册

```js
WXAPI.register_complex(Object object)
```

参数说明：
- code wx.login 获取的 code
- encryptedData 微信登录接口返回的 加密用户信息
- iv 微信登录接口返回的加密偏移数据
- referrer [可选] 邀请人用户id
- postJsonString [可选] Json格式的用户扩展数据

### 小程序详细注册[服务商模式]

```js
WXAPI.wxappServiceRegisterComplex(Object object)
```

参数说明：
- code wx.login 获取的 code
- encryptedData 微信登录接口返回的 加密用户信息
- iv 微信登录接口返回的加密偏移数据
- referrer [可选] 邀请人用户id
- postJsonString [可选] Json格式的用户扩展数据

### 用户名注册

```js
WXAPI.register_username(Object object)
```

### 邮箱注册

```js
WXAPI.register_email(Object object)
```

### 手机号注册

```js
WXAPI.register_mobile(Object object)
```

> 最常用的一种注册方式，输入手机号码，获取短信验证码，回填校验通过后即可完成注册
> 
> 具体参数说明请查阅接口文档说明

## 用户登录

### 微信小程序登陆

```js
WXAPI.login_wx(code)
```


### 微信小程序登陆[服务商模式]

```js
WXAPI.wxappServiceLogin(Object object)
```

参数说明：
- code wx.login 获取的 code
- autoReg 设置为true，会自动完成新用户注册后再登陆，默认为 false
- referrer [可选] 邀请人用户id
- postJsonString [可选] Json格式的用户扩展数据

### 微信小程序一键手机号登录

```js
WXAPI.loginWxaMobileV2(code, encryptedData, iv)
```

该方法会匹配系统中该手机号码的用户，继而实现登录

- code 小程序 wx.login 方法返回的临时凭证
- encryptedData iv 是小程序读取手机号码授权返回的加密数据
- autoReg 如果传true，用户不存在的情况下，会自动注册新用户
- referrer 邀请人用户编号，注册时候会奖励邀请关系[登陆无效]
- postJsonString 用户扩展属性，注册时候使用[登陆无效]

### 微信小程序一键手机号登录[服务商模式]

```js
WXAPI.wxappServiceLoginWxaMobile(Object object)
```

参数说明：
- code wx.login 获取的 code
- encryptedData 微信登录接口返回的 加密用户信息
- iv 微信登录接口返回的加密偏移数据

### 用户名登录

```js
WXAPI.login_username(Object object)
```

### 邮箱登录

```js
WXAPI.login_email(Object object)
```

### 手机号码登录

```js
WXAPI.login_mobile(mobile, pwd, deviceId, deviceName)
```

deviceId、deviceName 参数用来表示登录的设备信息比如手机序列号、手机型号，小程序调用该方法，可随便传参即可；

### 短信验证码登录

```js
WXAPI.loginMobileSmsCode(Object object)
```

autoReg 参数，可传 true，实现用户不存在时候自动注册

## 检测登录 token 是否有效

```js
WXAPI.checkToken(token)
```

## 重置密码

### 用手机找回密码

```js
WXAPI.resetPwdUseMobileCode(mobile, pwd, code)
```

用于忘记密码找回，重置密码时候使用

填写手机号码，系统下发短信验证码，回填正确的验证码后完成新密码的设置

### 用邮箱找回密码

```js
WXAPI.resetPwdUseEmailCode(email, pwd, code)
```

用于忘记密码找回，重置密码时候使用

填写邮箱地址，系统下发邮件验证码，回填正确的验证码后完成新密码的设置

## 退出登录

```js
WXAPI.loginout(token)
```

> 退出后，当前token将立刻失效

# 用户管理

## 绑定手机号码

### 小程序

```js
WXAPI.bindMobileWxapp(token, code, encryptedData, iv, pwd)
```

> 结合小程序获取用户手机号码接口实现用户绑定手机号码
> 
> pwd 为可选参数，如果传了该参数，当前的登录密码将会被重置成传入的新密码
> 
> 小程序规定，只有通过认证的企业身份的小程序，才能使用获取手机号码接口

*如果你没法使用小程序绑定手机号码接口，你可以使用下面的短信验证码认证方式绑定手机号码*

### 小程序[服务商]

```js
WXAPI.wxappServiceBindMobile(Object object)
```

参数说明：
- code wx.login 获取的 code
- encryptedData 微信登录接口返回的 加密用户信息
- iv 微信登录接口返回的加密偏移数据
- pwd [选填] 传了该参数以后将会重置登陆密码

### 短信验证码认证

```js
WXAPI.bindMobileSms(token, mobile, code, pwd)
```

> 请结合本文档中的短信验证码安全认证相关方法实现该功能
> 
> pwd 为可选参数，如果传了该参数，当前的登录密码将会被重置成传入的新密码

## 设置用户名

```js
WXAPI.bindUsername(token, username, pwd)
```

> 设置用户名后，将可使用该用户名进行登录；用户名在系统中是唯一的；
> 
> pwd 为可选参数，如果传了该参数，当前的登录密码将会被重置成传入的新密码

## 设置邮箱地址

```js
WXAPI.bindEmail(token, email, code, pwd)
```

通过邮箱验证码校验后，绑定用户的邮箱地址

## 绑定小程序

```js
WXAPI.bindOpenid(token, code)
```

> 手机号码、用户名等方式注册的用户，通过该方法绑定小程序，后期将可以使用小程序登录
> 
> code 为小程序登录的临时凭证

## 绑定小程序[服务商模式]

```js
WXAPI.wxappServiceBindOpenid(Object object)
```

参数说明：
- code wx.login 获取的 code

## 获取用户信息

```js
WXAPI.userDetail(token)
```

> base 数据存放了用户的基础信息；
> 
> idcard 数据存放了用户的实名认证信息[如果用户有通过实名认证的话]
> 
> ext 数据存放了用户的扩展属性

## 获取用户id、openid、unionid

```js
WXAPI.userWxinfo(token)
```

> 获取当前登录用户的用户id、openid、unionid

## 修改用户资料

```js
WXAPI.modifyUserInfo(Object object)
```

## 实名认证

```js
WXAPI.idcardCheck(token, name, idCardNo)
```

> 身份证实名认证方法，校验姓名和身份证号码是否匹配
> 
> name 为真实姓名；idCardNo 为身份证号码

## 会员体系

### 获取所有的会员等级

```js
WXAPI.userLevelList(Object object)
```

> 读取后台设置的所有的会员等级；具体参数请查阅接口文档

### 查看会员等级详情

```js
WXAPI.userLevelDetail(levelId)
```

> levelId 为会员等级的id

### 会员等级收费列表

```js
WXAPI.userLevelPrices(levelId)
```

> levelId 为会员等级的id，该方法可获得指定的某一个会员等级（比如：钻石会员）的收费列表

*比如：免费使用7天、30元一个月、70元买一个季度、200元买一年*

用户根据自己的需要，使用下面的方法购买会员，购买后，当前用户立即现有对应的会员等级，直到有效期截止

### 购买会员

```js
WXAPI.userLevelBuy(token, priceId, isAutoRenew, remark)
```

> priceId 为上面获取的收费列表的id
> 
> isAutoRenew = true / false ；用来标识会员到期后是否自动续费，开通自动续费后将会在到期日自动用可用余额完成续费
> 
> remark 为购买时候提交的备注信息

### 获取我的购买 / 续费记录

```js
WXAPI.userLevelBuyLogs(Object object)
```

> 具体参数请查阅接口文档


## 收货地址管理

### 获取所有的收货地址

```js
WXAPI.queryAddressV2(Object object)
```

参数说明：
- token 当前登陆用户的token
- page 获取第几页数据
- pageSize 每页显示多少数据
- nameLike 收货人姓名模糊搜索
- mobileLike 手机号码模糊搜索

### 添加收货地址

```js
WXAPI.addAddress(Object object)
```

> 你也可以结合小程序自带的读取收货地址接口，实现快速添加收货地址功能

### 更新收货地址

```js
WXAPI.updateAddress(Object object)
```

### 获取默认的地址

```js
WXAPI.defaultAddress(token)
```

### 读取地址详细

```js
WXAPI.addressDetail(token, id)
```

### 删除收货地址

```js
WXAPI.deleteAddress(token, id)
```

# CMS模块

## 分类管理

### 获取所有分类

```js
WXAPI.cmsCategories()
```

### 获取分类详情

```js
WXAPI.cmsCategoryDetail(id)
```

- info 中返回分类的基础信息
- extJson 中返回后台设置的扩展属性

## 文章管理

### 文章列表

```js
WXAPI.cmsArticles(Object object)
```

### 文章详情

```js
WXAPI.cmsArticleDetailV2(id)
```

### 读取上一篇和下一篇文章

```js
WXAPI.cmsArticlePreNext(id)
```

### 用户发布文章

```js
WXAPI.cmsArticleCreate(Object object)
```

具体参数请参阅接口文档说明

### 文章收藏

#### 收藏

```js
WXAPI.cmsArticleFavPut(token, newsId)
```

#### 检测当前用户是否已收藏

```js
WXAPI.cmsArticleFavCheck(token, newsId)
```

根据返回码（code）判断是否已收藏：
- 0 代表已收藏
- -1 代表未收藏

#### 读取收藏列表数据

```js
WXAPI.cmsArticleFavList(Object object)
```

#### 根据收藏记录的ID删除收藏

```js
WXAPI.cmsArticleFavDeleteById(token, id)
```

#### 根据文章的ID删除收藏

```js
WXAPI.cmsArticleFavDeleteByNewsId(token, newsId)
```

### 点赞/踩一下

#### 发表态度

```js
WXAPI.cmsArticleUseless(Object object)
```

参数说明：
- token 用户登录凭证，登录后才可以表态，防止作弊
- id 文章id
- isUseful 传入 true / false ，分别代表2种态度
- isCheck 传入 true ，进行模拟点赞，并不会生效

#### 读取点赞记录

```js
WXAPI.cmsArticleUsefulLogs(Object object)
```

## 单页信息(关于我们/联系我们/...)

```js
WXAPI.cmsPage(key)
```

key 为后台发布的单页信息的编号

## 获取文章标签列表(用于展示类似“标签云”)

> WXAPI.cmsTags()

## 留言 & 反馈

### 提交留言反馈

```js
WXAPI.addComment(Object object)
```

### 读取留言 & 评论列表

```js
WXAPI.commentList(Object object)
```

# 商城模块

## 门店管理

### 读取所有的门店列表

```js
WXAPI.fetchShops(Object object)
```

**接口返回示例：**

```json
{
  "code": 0,
  "data": [
    {
      "cityId": "150200000000",
      "dateAdd": "2019-07-18 17:45:26",
      "dateUpdate": "2019-07-29 09:37:19",
      "districtId": "150205000000",
      "id": 4963,
      "latitude": 39.916527,
      "linkPhone": "11",
      "longitude": 116.397128,
      "name": "111",
      "numberGoodReputation": 0,
      "numberOrder": 0,
      "paixu": 0,
      "provinceId": "150000000000",
      "status": 0,
      "statusStr": "正常",
      "userId": 2
    }
  ],
  "msg": "success"
}
```

### 门店详情

```js
WXAPI.shopSubdetail(id)
```

id 参数为门店列表返回数据中的 id 字段

该方法可以读取到门店后台设置的扩展属性信息

**接口返回示例：**

```json
{
  "code": 0,
  "data": {
    "extJson": {
      "证书编号": "",
      "3C产品型号": "",
      "电压": "",
      "电源方式": ""
    },
    "info": {
      "activity": "",
      "address": "杭州市拱墅区登云路和赵伍路交叉口",
      "characteristic": "量贩式水果超市",
      "cityId": "330100000000",
      "dateAdd": "2017-03-20 20:27:36",
      "dateUpdate": "2019-03-05 12:27:25",
      "districtId": "330105000000",
      "expressType": "",
      "id": 1,
      "introduce": "简单介绍一下吧",
      "latitude": 30.307559,
      "linkPhone": "1234",
      "longitude": 120.130023,
      "name": "鲜丰水果登云路店",
      "number": "",
      "numberGoodReputation": 0,
      "numberOrder": 0,
      "paixu": 0,
      "pic": "https://cdn.it120.cc/apifactory/2017/03/20/0f4b625100de82467f3e193d1bf3577d.png",
      "provinceId": "330000000000",
      "status": 0,
      "statusStr": "正常",
      "type": "",
      "userId": 2
    }
  },
  "msg": "success"
}
```

### 门店申请入驻

```js
WXAPI.shopSubApply(Object object)
```

具体参数请查阅接口文档说明

### 获取我的门店列表

```js
WXAPI.fetchMyShops(token)
```

读取我申请入驻的所有门店的列表数据

### 获取取货点列表（自提点）

```js
WXAPI.pickPoints(Object object)
```

用户选择自提到时候，可通过该方法可以获取到自提点列表数据

## 商品分类

### 获取所有的分类

```js
WXAPI.goodsCategory()
```

读取后台设置的所有分类数据，分类之间的上下级关系请使用 level 和 pid 进行管理

level = 1 表示 1级类目；2 表示 2级类目，以此类推

pid 代表该类目的上级类目ID（一级类目的 pid = 0）

*分类的目录树，可以根据上述2个字段，采用 js 在本地实现*

**接口返回示例：**

```json
{
  "code": 0,
  "data": [
    {
      "dateAdd": "2017-09-12 11:07:32",
      "dateUpdate": "2019-04-10 11:24:32",
      "icon": "https://cdn.it120.cc/apifactory/2019/04/09/f89753a227d26a3fe9ccc6f975857bb6.png",
      "id": 1872,
      "isUse": true,
      "key": "1",
      "level": 1,
      "name": "上装",
      "paixu": 0,
      "pid": 0,
      "type": "",
      "userId": 951
    }
  ],
  "msg": "success"
}
```

### 获取分类详情

```js
WXAPI.goodsCategoryDetail(id)
```

- info 中返回分类的基础信息
- extJson 中返回后台设置的扩展属性

## 商品管理

### 获取商品列表

```js
WXAPI.goods(Object object)
```

> 读取所有的商品数据，以分页的形式展示，支持按照多种方式进行排序
> 
> 具体参数的说明，请查阅接口文档

**接口返回示例：**

```json
{
  "code": 0,
  "data": [
    {
      "categoryId": 1875,
      "characteristic": "享受vip尊享服务，使用专业版后台，功能更强，体验更好",
      "commission": 0,
      "commissionType": 0,
      "dateAdd": "2019-03-19 09:51:08",
      "dateUpdate": "2019-08-14 09:49:34",
      "gotScore": 0,
      "gotScoreType": 0,
      "id": 124305,
      "kanjia": true,
      "kanjiaPrice": 49,
      "limitation": false,
      "logisticsId": 0,
      "miaosha": false,
      "minPrice": 198,
      "minScore": 0,
      "name": "api工厂1年vip会员",
      "numberFav": 0,
      "numberGoodReputation": 1,
      "numberOrders": 1,
      "numberSells": 1,
      "originalPrice": 198,
      "paixu": 0,
      "pic": "https://cdn.it120.cc/apifactory/2019/03/19/6828c1ced4a74e11b532c8cbd864245a.png",
      "pingtuan": false,
      "pingtuanPrice": 0,
      "recommendStatus": 1,
      "recommendStatusStr": "推荐",
      "shopId": 0,
      "status": 0,
      "statusStr": "上架",
      "stores": 9999998,
      "userId": 951,
      "views": 15955,
      "weight": 0
    },
    {
      "categoryId": 2054,
      "commission": 0,
      "commissionType": 0,
      "dateAdd": "2019-03-11 13:02:39",
      "dateUpdate": "2019-08-14 09:36:24",
      "gotScore": 0,
      "gotScoreType": 0,
      "id": 122843,
      "kanjia": false,
      "kanjiaPrice": 0,
      "limitation": false,
      "logisticsId": 386,
      "miaosha": false,
      "minPrice": 600,
      "minScore": 0,
      "name": "WIFI 58mm 热敏打印机工厂定制版",
      "numberFav": 0,
      "numberGoodReputation": 8,
      "numberOrders": 894,
      "numberSells": 872,
      "originalPrice": 800,
      "paixu": 0,
      "pic": "https://cdn.it120.cc/apifactory/2019/03/07/133eb6294e3853ebe4eb8551359a26dc.png",
      "pingtuan": false,
      "pingtuanPrice": 0,
      "recommendStatus": 1,
      "recommendStatusStr": "推荐",
      "shopId": 0,
      "status": 0,
      "statusStr": "上架",
      "stores": 9999984,
      "tags": "打印机",
      "userId": 951,
      "views": 18044,
      "weight": 0
    }
  ],
  "msg": "success"
}
```

### 获取商品详情信息

```js
WXAPI.goodsDetail(id)
```

> id 参数为上面商品列表方法返回数据里的 id 字段
>
> 访问该方法会增加商品的浏览量
> 
> 该方法获取商品基础信息、商品图文详细介绍、商品图片、可选的规格尺寸、所属分类、快递物流设置信息、商品扩展属性

**接口返回示例：**

```json
{
  "code": 0,
  "data": {
    "logistics": {
      "isFree": true,
      "feeType": 0,
      "feeTypeStr": "按件数",
      "details": [
        {
          "addAmount": 0,
          "addNumber": 1,
          "firstAmount": 8,
          "firstNumber": 100,
          "type": 0,
          "userId": 951
        }
      ]
    },
    "extJson": {},
    "category": {
      "dateAdd": "2017-09-17 19:55:09",
      "dateUpdate": "2019-04-10 11:27:49",
      "icon": "https://cdn.it120.cc/apifactory/2019/04/09/9a7356187fce687ce568ba7381685299.png",
      "id": 2054,
      "isUse": true,
      "key": "8",
      "name": "秒杀",
      "paixu": 0,
      "pid": 0,
      "type": "",
      "userId": 951
    },
    "pics": [
      {
        "goodsId": 122843,
        "id": 899846,
        "pic": "https://cdn.it120.cc/apifactory/2019/03/07/133eb6294e3853ebe4eb8551359a26dc.png",
        "userId": 951
      }
    ],
    "content": "<table class=\"table table-bordered table-hover\">\n<thead>\n<tr>\n<th colspan=\"2\">主体&nbsp;</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<th>名称</th>\n<td>WiFi无线打印机</td>\n</tr>\n<tr>\n<th>型号</th>\n<td>FP-V58W(58mm、不带切刀)</td>\n</tr>\n<tr>\n<th>传输方式</th>\n<td>WiFi网络</td>\n</tr>\n<tr>\n<th>下单方式</th>\n<td>Internet网络接口/手机应用</td>\n</tr>\n<tr>\n<th>集成方式</th>\n<td>API/驱动集成</td>\n</tr>\n<tr>\n<th>监控管理</th>\n<td>在线、缺纸状态查询</td>\n</tr>\n</tbody>\n</table>\n<table class=\"table table-bordered table-hover\">\n<thead>\n<tr>\n<th colspan=\"2\">打印&nbsp;</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<th>打印方式</th>\n<td>直接行式热敏</td>\n</tr>\n<tr>\n<th>自动切刀</th>\n<td>否</td>\n</tr>\n<tr>\n<th>图形</th>\n<td>支持二维码,条码,LOGO打印</td>\n</tr>\n<tr>\n<th>打印宽度</th>\n<td>58毫米</td>\n</tr>\n<tr>\n<th>点密度</th>\n<td>384点/行（203&times;203dpi）</td>\n</tr>\n<tr>\n<th>打印速度</th>\n<td>120毫米/秒</td>\n</tr>\n<tr>\n<th>打印纸</th>\n<td>57.5 &plusmn; 0.5毫米</td>\n</tr>\n<tr>\n<th>行间距</th>\n<td>3.75毫米（可用命令调整行间距）</td>\n</tr>\n<tr>\n<th>列数</th>\n<td>58mm纸：Font A 32列/Font B 42列/简繁体16列</td>\n</tr>\n<tr>\n<th>字符大小</th>\n<td>ANK字符，Font A 1.5&times;3.0mm（12&times;24点）Font B 1.1&times;2.1mm（9&times;17点）简繁体 3.0&times;3.0mm（24&times;24点）</td>\n</tr>\n</tbody>\n</table>\n<table class=\"table table-bordered table-hover\">\n<thead>\n<tr>\n<th colspan=\"2\">物理属性&nbsp;</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<th>输入缓冲</th>\n<td>32K Bytes</td>\n</tr>\n<tr>\n<th>NV Flash</th>\n<td>64 K Bytes</td>\n</tr>\n<tr>\n<th>电源</th>\n<td>输入AC 110V/220V，50～60Hz</td>\n</tr>\n<tr>\n<th>电源适配器</th>\n<td>DC12V/2.6A</td>\n</tr>\n<tr>\n<th>重量</th>\n<td>0.66千克</td>\n</tr>\n<tr>\n<th>外观尺寸</th>\n<td>160&times;120&times;100毫米（长&times;宽&times;高）</td>\n</tr>\n<tr>\n<th>工作环境</th>\n<td>温度：0～45℃ 湿度：10～80%</td>\n</tr>\n<tr>\n<th>存储环境</th>\n<td>温度：-10～60℃ 湿度：10～90%（不结露）</td>\n</tr>\n<tr>\n<th>使用寿命</th>\n<td>50公里</td>\n</tr>\n<tr>\n<th>产品认证</th>\n<td>3C</td>\n</tr>\n<tr>\n<th>质量标准</th>\n<td>ISO9001</td>\n</tr>\n</tbody>\n</table>",
    "basicInfo": {
      "categoryId": 2054,
      "commission": 0,
      "commissionType": 0,
      "dateAdd": "2019-03-11 13:02:39",
      "dateUpdate": "2019-08-14 09:17:23",
      "gotScore": 0,
      "gotScoreType": 0,
      "id": 122843,
      "kanjia": false,
      "kanjiaPrice": 0,
      "limitation": false,
      "logisticsId": 386,
      "miaosha": false,
      "minPrice": 600,
      "minScore": 0,
      "name": "WIFI 58mm 热敏打印机工厂定制版",
      "numberFav": 0,
      "numberGoodReputation": 8,
      "numberOrders": 894,
      "numberSells": 872,
      "originalPrice": 800,
      "paixu": 0,
      "pic": "https://cdn.it120.cc/apifactory/2019/03/07/133eb6294e3853ebe4eb8551359a26dc.png",
      "pingtuan": false,
      "pingtuanPrice": 0,
      "recommendStatus": 1,
      "recommendStatusStr": "推荐",
      "shopId": 0,
      "status": 0,
      "statusStr": "上架",
      "stores": 9999984,
      "tags": "打印机",
      "userId": 951,
      "views": 18040,
      "weight": 0
    }
  },
  "msg": "success"
}
```

### 获取商品的限购设置

```js
WXAPI.goodsLimitations(goodsId, priceId)
```

如果商品（列表、详情）信息中 **limitation** 字段为 **true**，说明该商品开启了限购，只有设置中的会员等级用户才可以在约定时间内购买不超过指定数量

该方法接收2个参数，**goodsId** 参数是必填的，代表商品id； **priceId** 参数非必填，只有在用户购买时候选择了指定的规格尺寸时候才需要传

你可以根据当前登录用户的会员等级，在商品详情页面进行相应的交互展示

**接口返回示例：**

```json
{
  "code": 0,
  "data": [
    {
      "buyNumbers": 22,
      "duration": 11,
      "goodsId": 145565,
      "id": 6,
      "priceId": 1279085,
      "unit": 0,
      "unitStr": "自然日",
      "userId": 2,
      "userLevelId": 1,
      "userLevelName": "黄金会员"
    },
    {
      "buyNumbers": 3,
      "duration": 1,
      "goodsId": 145565,
      "id": 2,
      "priceId": 1279084,
      "unit": 2,
      "unitStr": "自然年",
      "userId": 2,
      "userLevelId": 1,
      "userLevelName": "黄金会员"
    },
    {
      "buyNumbers": 4,
      "duration": 3,
      "goodsId": 145565,
      "id": 1,
      "priceId": 1279084,
      "unit": 0,
      "unitStr": "自然日",
      "userId": 2,
      "userLevelId": 0,
      "userLevelName": "无分组用户"
    }
  ],
  "msg": "success"
}
```

### 读取商品可选配件列表

```js
WXAPI.goodsAddition(goodsId)
```

返回数据示例：

```json
{
  "code": 0,
  "data": [
    {
      "id": 7,
      "items": [
        {
          "id": 3,
          "name": "不辣",
          "pid": 7,
          "price": 0
        },
        {
          "id": 4,
          "name": "微辣",
          "pid": 7,
          "price": 0
        },
        {
          "id": 5,
          "name": "多辣",
          "pid": 7,
          "price": 0
        },
        {
          "id": 6,
          "name": "特辣",
          "pid": 7,
          "price": 0
        }
      ],
      "name": "口味",
      "required": true,
      "type": 0
    },
    {
      "id": 9,
      "items": [
        {
          "id": 7,
          "name": "青菜",
          "pid": 9,
          "price": 3
        },
        {
          "id": 8,
          "name": "土豆",
          "pid": 9,
          "price": 3
        },
        {
          "id": 9,
          "name": "鸡蛋",
          "pid": 9,
          "price": 5
        },
        {
          "id": 10,
          "name": "大排",
          "pid": 9,
          "price": 12
        }
      ],
      "name": "加料",
      "required": false,
      "type": 1
    }
  ],
  "msg": "success"
}
```

简单说明一下几个参数：
- required 说明这个配件是否是必选项
- type 0 代表是单选的；1 代表是可以多选的
- price 代表选择了该配件以后，需要增加多少费用

### 获取商品价格「一般用在选择不同规格尺寸后需要实时显示售价」

```js
WXAPI.goodsPriceV2(Object object)
```

- token 可选项目，如果传入，将会返回给用户所属会员等级的会员价
- goodsId 商品id
- propertyChildIds 参数为用户选择的规格尺寸数据，多个规格尺寸数据用因为逗号分隔，该参数的格式为： 规格id:子属性id，比如： 4:15,2:10 （分别对应了 颜色:红色，内存:256G）

**接口返回示例：**

```json
{
  "code": 0,
  "data": {
    "goodsId": 139421,
    "id": 1330668,
    "originalPrice": 566,
    "pingtuanPrice": 0,
    "price": 123,
    "propertyChildIds": "1:1,",
    "propertyChildNames": "颜色:薄荷绿,",
    "score": 0,
    "stores": 99999,
    "userId": 2
  },
  "msg": "success"
}
```

### 获取商品的每日价格&每日库存「适用酒店预订、票务预订类」

```js
WXAPI.goodsPriceDaily(goodsId, priceId)
```

> goodsId 为商品id
> 
> priceId 为选择的商品规格尺寸记录id，无规格尺寸的商品，无需传该参数

**接口返回示例：**

```json
{
  "code": 0,
  "data": [
    {
      "day": "2019-08-14",
      "goodsId": 139421,
      "id": 255,
      "price": 1,
      "stores": 1,
      "userId": 2
    },
    {
      "day": "2019-08-15",
      "goodsId": 139421,
      "id": 256,
      "price": 1,
      "stores": 1,
      "userId": 2
    }
  ],
  "msg": "success"
}
```

### 时段定价-拉取可选的日期

```js
WXAPI.goodsTimesDays(goodsId, propertyChildIds)
```

参数说明：

- goodsId 商品id
- propertyChildIds 商品的规格尺寸信息,如: 49180:510817,49178:510860,

如果商品没有规格尺寸，可不传propertyChildIds参数，如果传的话，最后的逗号是必须的

### 时段定价-拉取某天的所有时段定价信息

```js
WXAPI.goodsTimesDayItems(day, goodsId, propertyChildIds)
```

参数说明：

- day 指定的日期，格式如： 2020-10-12
- goodsId 商品id
- propertyChildIds 商品的规格尺寸信息,如: 49180:510817,49178:510860,

如果商品没有规格尺寸，可不传propertyChildIds参数，如果传的话，最后的逗号是必须的

### 计算物流/快递模板费用计算方法

```js
WXAPI.goodsPriceFreight(Object object)
```

> 具体参数请查阅接口文档
> 
> 提供快递地址，本方法可计算出本次会计的计费方式

*比如： a 件（重量）内 x 元，之后每增加 b 件（重量）额外加收 y 元*

**接口返回示例：**

```json
{
  "code": 0,
  "data": {
    "firstNumber": 1,
    "addAmount": 1,
    "firstAmount": 1,
    "addNumber": 1
  },
  "msg": "success"
}
```

### 拉取当前会员可以显示的折扣信息

```js
WXAPI.goodsRebate(token, goodsId)
```

> token 为当前登录用户的登录 token
> 
> goodsId 为商品id

**接口返回示例：**

```json
{
  "code": 0,
  "data": 10,
  "msg": "success"
}
```
*上面的 10 意思就是 10折，也就是不打折的意思；*

### 获取商品的评价

```js
WXAPI.goodsReputation(Object object)
```

> 读取当前商品用户的所有评价数据
> 
> 具体参数说明请查阅接口文档

**接口返回示例：**

```json
{
  "code": 0,
  "data": [
    {
      "goods": {
        "amount": 600,
        "dateReputation": "2019-07-23 14:20:00",
        "goodReputation": 2,
        "goodReputationRemark": "系统默认好评",
        "goodReputationStr": "好评",
        "goodsId": 122843,
        "goodsName": "WIFI 58mm 热敏打印机工厂定制版",
        "id": 372497,
        "number": 1,
        "orderId": 325214,
        "pic": "https://cdn.it120.cc/apifactory/2019/03/07/133eb6294e3853ebe4eb8551359a26dc.png",
        "score": 0,
        "uid": 762217,
        "userId": 951
      },
      "user": {
        "avatarUrl": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLJpYuZ0hOPlEzOXUpibibAtELrHnoRNib5tiaicpb1ZfZT8FHWcJulH189UhmaxicKKia22LXnwt8ibLYCVw/132",
        "city": "",
        "dateAdd": "2019-03-17 10:12:22",
        "dateLogin": "2019-07-09 14:40:09",
        "id": 762217,
        "ipAdd": "118.114.6.203",
        "ipLogin": "171.209.166.143",
        "isIdcardCheck": false,
        "isSeller": false,
        "levelRenew": false,
        "mobile": "13688059703",
        "nick": "阳大锤",
        "province": "Dublin",
        "source": 0,
        "sourceStr": "小程序",
        "status": 0,
        "statusStr": "默认"
      }
    }
  ],
  "msg": "success"
}
```

### 商品购买动态

读取最近的成交信息

```js
WXAPI.goodsDynamic(type)
```

type: 0 下单； 1 支付

### 用户发布商品

适用于C2C类业务模式，用户可以发布自己的商品，管理员审核以后即可上架销售

```js
WXAPI.pushNewGoods(Object object)
```

### 删除自己发布的商品

```js
WXAPI.deleteMyGoods(token, id)
```

- token 登陆后获得的登陆凭证
- id 商品id

## 我的购买历史商品

### 获取购买过的历史商品列表

```js
WXAPI.myBuyGoodsHis(Object object)
```

### 删除购买记录

```js
WXAPI.myBuyGoodsHisDelete(token, id, goodsId)
```

id 参数为列表数据中的记录id

goodsId 为商品id

以上2个参数至少要填写1个

## 商品收藏

### 收藏某个商品

```js
WXAPI.goodsFavPut(token, goodsId)
```

**接口返回示例：**

```json
{
  "code": 0,
  "msg": "success"
}
```

### 检测当前商品是否已被收藏

```js
WXAPI.goodsFavCheck(token, goodsId)
```

**接口返回示例：**

*已收藏*
```json
{
  "code": 0,
  "data": "已收藏"
}
```

*未收藏*
```json
{
  "code": -1,
  "data": "未收藏"
}
```

### 获取收藏的商品

```js
WXAPI.goodsFavList(Object object)
```

> 具体参数说明请查阅接口文档
> 
> 支持分页读取、关键词搜索商品

**接口返回示例：**

```json
{
  "code": 0,
  "data": [
    {
      "dateAdd": "2019-08-14 10:53:44",
      "dateUpdate": "2019-08-14 11:01:02",
      "goodsId": 139421,
      "goodsName": "111",
      "id": 12537,
      "pic": "https://cdn.it120.cc/apifactory/2019/05/10/fa52e312-c8a9-4558-8280-7d67224b6f67.png"
    }
  ],
  "msg": "success"
}
```

### 删除收藏的某个商品

```js
WXAPI.goodsFavDelete(token, id, goodsId)
```

> id 参数为收藏列表数据中的记录id
> 
> goodsId 为商品id
> 
> 以上2个参数至少要填写1个

**接口返回示例：**

```json
{
  "code": 0,
  "msg": "success"
}
```

## 购物车

### 读取购物车数据

```js
WXAPI.shippingCarInfo(token, type)
```

- type 自定义购物车类型，可用来区分多个购物车

获取当前购物车的数据，数据结构如下：

```json
{
  "code": 0,
  "data": {
    "number": 6,
    "score": 0,
    "price": 700,
    "items": [
      {
        "key": "e65eb6ba3701c107cdd1eb43da31f6e2",
        "goodsId": 122843,
        "number": 1,
        "price": 600,
        "score": 0,
        "pic": "https://cdn.it120.cc/apifactory/2019/03/07/133eb6294e3853ebe4eb8551359a26dc.png",
        "name": "WIFI 58mm 热敏打印机工厂定制版",
        "logisticsId": 386
      },
      {
        "key": "2131619ef0f15d1991ad95e7bd158de8",
        "goodsId": 235853,
        "number": 2,
        "sku": [
          {
            "optionId": 869,
            "optionValueId": 1698,
            "optionName": "花色",
            "optionValueName": "粉色叶子"
          },
          {
            "optionId": 871,
            "optionValueId": 1589,
            "optionName": "颜色",
            "optionValueName": "黄色"
          }
        ],
        "price": 50,
        "score": 0,
        "pic": "https://dcdn.it120.cc/2019/12/06/ebf49ac6-4521-4bcc-92fd-8bbbd4131167.jpg",
        "name": "3分钟沙漏「儿童刷牙计时器」",
        "logisticsId": 386
      },
      {
        "key": "c1212386b114f05e62bf2441d03e4440",
        "goodsId": 235853,
        "number": 3,
        "sku": [
          {
            "optionId": 869,
            "optionValueId": 1699,
            "optionName": "花色",
            "optionValueName": "淡灰小船"
          },
          {
            "optionId": 871,
            "optionValueId": 1588,
            "optionName": "颜色",
            "optionValueName": "红色"
          }
        ],
        "price": 50,
        "score": 0,
        "pic": "https://dcdn.it120.cc/2019/12/06/ebf49ac6-4521-4bcc-92fd-8bbbd4131167.jpg",
        "name": "3分钟沙漏「儿童刷牙计时器」",
        "logisticsId": 386
      }
    ]
  },
  "msg": "success"
}
```

### 添加商品到购物车

```js
WXAPI.shippingCarInfoAddItem(token, goodsId, number, sku, addition, type)
```

- goodsId 商品编号，数字类型
- number 购买数量
- sku 商品的规格尺寸信息，json数组，示例如下：

  ```json
  [
    {
      "optionId": 869,
      "optionValueId": 1699
    },
    {
      "optionId": 871,
      "optionValueId": 1588
    }
  ]
  ```

- addition商品的可选配件信息，json数组，示例如下：

  ```json
  [
    {
      "id": 869,
      "pid": 1699
    },
    {
      "id": 871,
      "pid": 1588
    }
  ]
  ```

- type 自定义购物车类型，可用来区分多个购物车

### 修改购物车商品数量

```js
WXAPI.shippingCarInfoModifyNumber(token, key, number, type)
```

修改购物车中key对应的那条记录的商品数量为number指定的数值
- token 用户登陆凭证
- key 购物车中记录条目的key编号
- number 商品数量
- type 自定义购物车类型，可用来区分多个购物车

### 删除购物车中某条记录

```js
WXAPI.shippingCarInfoRemoveItem(token, key, type)
```

删除购物车中key对应的那条记录,多个key，请使用英文多逗号隔开即可实现批量删除
- token 用户登陆凭证
- key 购物车中记录条目的key编号
- type 自定义购物车类型，可用来区分多个购物车

### 购物车中某条记录选中/取消选中

```js
WXAPI.shippingCartSelected(token, key, selected, type)
```

- 多个key，请使用英文多逗号隔开即可实现批量操作
- selected 为 true / false，代表选中或者不选中
- type 自定义购物车类型，可用来区分多个购物车


### 一键清空购物车

```js
WXAPI.shippingCarInfoRemoveAll(token, type)
```

- token 用户登陆凭证
- type 自定义购物车类型，可用来区分多个购物车

## 订单管理

### 创建订单

```js
WXAPI.orderCreate(Object object)
```

> 具体参数说明请查看api接口文档

**主要参数说明：**

1. calculate
   
   *传 true 可以实现预下单，预下单不会真正下单，而是会返回是否允许下单，以及费用[货款、运费]金额的计算*

2. deductionScore
   
   *这个参数指定本次订单使用多少积分进行抵扣；你需要先通过积分抵扣规则、读取资产2个方法自行计算好需要抵扣的积分，订单生产后会自动计算剩余应该支付的金额*

### 关闭订单

```js
WXAPI.orderClose(token, orderId)
```

### 删除订单

```js
WXAPI.orderDelete(token, orderId)
```

> 用户删除订单，只是用户自己看不到，管理员在后台还是可以看到该订单的

### 支付订单[使用余额]

```js
WXAPI.orderPay(token, orderId)
```

> 使用用户的钱包余额完成订单的支付
> 
> 如果使用微信在线支付完成订单支付，请回顾 「微信在线支付章节」 ，通过传递 nextAction 参数实现

### 确认收货

```js
WXAPI.orderDelivery(token, orderId)
```

> 管理员针对下单进行发货操作，用户在确认收到包裹检查无误后，通过该方法来确认本次订单的收货
> 
> 确认收货后，订单将进入评价阶段，用户可实事求是的针对本次购物体验进行评价、买家秀截图等等

### 订单核销

```js
WXAPI.orderHXV2(Object object)
```

支持以下参数：
- token 传当前核销人员的登陆token
- hxNumber 核销码，商家依据核销码进行核销
- extJsonStr 扩展属性，会出现在订单详情的扩展属性信息中

订单默认不会生成核销码，如果需要开启核销功能，请在创建订单方法参数中增加 isCanHx=true 

核销后，订单即交易成功，转为待评价状态

### 获取所有订单

```js
WXAPI.orderList(Object object)
```

> 具体参数请查阅api接口文档
> 
> 可根据订单状态、好差评等条件筛选进行分页显示

### 订单详情

```js
WXAPI.orderDetail(token, id, hxNumber)
```

读取订单详情数据：订单信息、购物清单、订单日志记录、物流跟踪信息、库存明细、扩展属性

根据你自己的需要进行UI设计及合理展示

订单id 和 核销码同时传的话，核销码优先

### 评价接口

```js
WXAPI.orderReputation(Object object)
```

> 订单评价，进行 好、中、差评；留言备注；截图买家秀
> 
> 具体参数请查阅接口文档说明

### 申请退换货[售后]

```js
WXAPI.refundApply(Object object)
```

> 用户维权通道，通过该方法实现订单的退款、退货、换货等售后处理
> 
> 具体参数请查阅接口文档说明

### 申请退换货详情

```js
WXAPI.refundApplyDetail(token, orderId)
```

> 用以展示退换货详细数据

### 撤销退换货申请

```js
WXAPI.refundApplyCancel(token, orderId)
```

> 撤销 / 取消 维权

### 拉取某订单的所有售后记录

```js
WXAPI.orderRefunds(token, orderId)
```

> 一个订单允许多次退换货，该方法可以拉取到所有的售后记录

## 虚拟物品交易[知识付费]

### 商品列表

```js
WXAPI.virtualTraderList(Object object)
```

建议该功能结合 CMS 系统一起使用，这样可以实现更好的购买前的信息展示，给用户足够的参考继而考虑购买

### 商品详情

```js
WXAPI.virtualTraderDetail(token, id)
```

读取商品详情数据

购买后，才会返回付费属性、付费详情说明

所以你可以使用该功能来实现购后阅读、购后播放的应用

### 购买商品

```js
WXAPI.virtualTraderBuy(token, id)
```

使用用户余额购买知识付费商品

如何使用在线支付，请查看在线支付功能中 nextAction 的使用说明

### 我的购买记录

```js
WXAPI.virtualTraderMyBuyLogs(Object object)
```

我购买过的所有知识付费记录

# 根据视频编号读取视频详情

> WXAPI.videoDetail(videoId)

# 营销工具

## 优惠券管理

### 获取系统所有优惠券列表

```js
WXAPI.coupons(Object object)
```

### 查看优惠券详情

```js
WXAPI.couponDetail(id)
```

### 领取优惠券

```js
WXAPI.fetchCoupons(Object object)
```

### 我的所有优惠券

```js
WXAPI.myCoupons(Object object)
```

### 拉取优惠券合成规则

```js
WXAPI.mergeCouponsRules()
```

### 优惠券合成

```js
WXAPI.mergeCoupons(Object object)
```

### 赠送优惠券给他人

```js
WXAPI.sendCoupons(Object object)
```

### 使用动态口令领取优惠券

```js
WXAPI.exchangeCoupons(token, number, pwd, extJsonStr)
```

使用动态口令兑换优惠券，兑换后卡密失效，请妥善保管

参数说明：
- token 当前登陆用户的token
- number 动态口令的号码
- pwd 动态口令的密码
- extJsonStr [选填] 扩展属性，必须是 Json 格式的数据



## 商品砍价

### 获取商品砍价设置

```js
WXAPI.kanjiaSet(goodsId)
```

读取某个商品的砍价设置信息：总份数、底价、每次能砍掉的（随机）金额以及开始结束时间
同时读取多个商品的设置，请用英文逗号分隔开就行

**接口返回示例：**

```json
{
  "code": 0,
  "data": [{
    "dateAdd": "2019-08-14 15:35:29",
    "dateEnd": "2019-08-31 15:35:24",
    "helpPriceMax": 56,
    "helpPriceMin": 12,
    "id": 1067,
    "minPrice": 8,
    "number": 999,
    "numberBuy": 0,
    "originalPrice": 888,
    "status": 0,
    "statusStr": "正常"
  }],
  "msg": "success"
}
```

**上面示例接口返回数据中的 id 非常关键，下面诸多砍价方法中使用到的 kjid 参数就是这个值 1067**

**为什么下面的砍价方法要以 kjid 为参数，而不用商品id为参数呢？**

*那是因为，同一个商品可能会在后台发布多个砍价项目，有的底价低但是砍价难度大需要更多的人帮忙；有的底价高但是比较容易砍到底价；甚至会根据开始/结束时间不同同一个商品设置好几场同时进行砍价*

### 发起[创建]砍价，继而邀请好友来帮自己砍到底价

```js
WXAPI.kanjiaJoin(token, kjid)
```

> 每个用户针对同一个 kjid 只能参与一次，多次调用本方法将返回上一次砍价的信息
> 
> 如果用户对上次砍价结果不太满意，可以调用下面的 **clear** 方法，清空上一次砍价记录，重新发起砍价

**接口返回示例：**

```json
{
  "code": 0,
  "data": {
    "curPrice": 888,
    "goodsId": 139421,
    "kjId": 1067,
    "minPrice": 8,
    "uid": 979527
  },
  "msg": "success"
}
```

### 我发起[创建]的砍价详情

```js
WXAPI.kanjiaMyJoinInfo(token, kjid)
```

> 查看我发起的砍价目前的进展[进度]情况
> 
> 也可以作为判断是否有参与砍价的依据

**接口返回示例：**

```json
{
  "code": 0,
  "data": {
    "curPrice": 888,
    "dateAdd": "2019-08-14 15:46:22",
    "dateUpdate": "2019-08-14 15:46:22",
    "goodsId": 139421,
    "helpNumber": 0,
    "kjId": 1067,
    "minPrice": 8,
    "status": 0,
    "statusStr": "进行中",
    "uid": 979527
  },
  "msg": "success"
}
```

### 放弃上一次砍价

```js
WXAPI.kanjiaClear(token, kjid)
```

> 因为每个用户针对同一个  kjid  只能参与一次，如果用户希望再次发起砍价，则必须要先放弃前一次砍价才能进行
> 
> 本次操作后，你针对当前 kjid 将查不到砍价记录，砍价数据清空，你可重新调用 **kanjiaJoin** 方法创建一个新的砍价

### 砍价详情

```js
WXAPI.kanjiaDetail(kjid, joiner)
```

> joiner 参数为发起[创建]砍价的那个用户的 uid，在上述例子中，joiner = 979527
> 
> 可查看某人创建的砍价的进度情况，看看多少人参与、目前的价格砍到多少了

**接口返回示例：**

```json
{
  "code": 0,
  "data": {
    "kanjiaInfo": {
      "curPrice": 888,
      "dateAdd": "2019-08-14 15:46:22",
      "dateUpdate": "2019-08-14 15:46:22",
      "goodsId": 139421,
      "helpNumber": 0,
      "kjId": 1067,
      "minPrice": 8,
      "status": 0,
      "statusStr": "进行中",
      "uid": 979527
    },
    "joiner": {
      "nick": "gooking",
      "avatarUrl": "https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eriagnYJN3GtiaruhqTFkdpYHtQicwLiaFrwbuSInE7HN7UGw2icxPm3jibWrX9ezXROl7Gn2bHGic4nJbsw/132"
    },
    "helps": []
  },
  "msg": "success"
}
```

### 帮好友砍价

```js
WXAPI.kanjiaHelp(token, kjid, joiner, remark)
```

> 帮助好友砍价，调用该方法后，将使得好友的当前价格越来越接近底价
> 
> joiner 参数为发起[创建]砍价的那个用户的 uid，在上述例子中，joiner = 979527
> 
> 被砍到底价、或者截止时间到期后，你将无法再帮助好友进行砍价

**接口返回示例：**

```json
{
  "code": 0,
  "data": {
    "cutPrice": 26.39,
    "goodsId": 139421,
    "remark": "记得请我吃饭",
    "uid": 979527
  },
  "msg": "success"
}
```

*每个用户只能帮忙砍价一次，多次帮忙砍价将返回之前砍价的数据*

### 查询我帮好友砍掉的金额

```js
WXAPI.kanjiaHelpDetail(token, kjid, joiner)
```

> 查询针对当前 kjid ，我帮忙砍掉的金额
> 
> joiner 参数为发起[创建]砍价的那个用户的 uid，在上述例子中，joiner = 979527

**接口返回示例：**

```json
{
  "code": 0,
  "data": {
    "cutPrice": 26.39,
    "dateAdd": "2019-08-14 16:31:45",
    "goodsId": 139421,
    "remark": "记得请我吃饭",
    "uid": 979527
  },
  "msg": "success"
}
```

## 拼团功能

### 获取某一个商品的拼团配置

```js
WXAPI.pingtuanSet(goodsId)
```

> 读取团购的几个重要设置：几人成团、超时时间、超时未成团后如何退款等等

**接口返回示例：**

```json
{
  "code": 0,
  "data": {
    "dateAdd": "2018-04-27 17:39:49",
    "dateEnd": "2028-05-12 17:39:59",
    "id": 2,
    "numberDoing": 1,
    "numberPersion": 2,
    "numberSucccess": 0,
    "refundType": 0,
    "refundTypeStr": "用户钱包余额",
    "status": 0,
    "statusStr": "正常",
    "timeoutHours": 24
  },
  "msg": "success"
}
```

### 批量获取一组商品的拼团配置

```js
WXAPI.pingtuanSets(goodsIdArray)
```

> 针对上面方法的补充，在有必要的场合可以一次性的读取多个商品的团购配置信息
> 
> goodsIdArray 为商品ID的数组: [1,2,3,4,5]

**接口返回示例：**

```json
{
  "code": 0,
  "data": [
    {
      "dateAdd": "2019-08-15 07:57:19",
      "dateEnd": "2029-08-15 07:57:16",
      "goodsId": 145565,
      "id": 1569,
      "numberDoing": 0,
      "numberPersion": 2,
      "numberSucccess": 0,
      "refundType": 0,
      "refundTypeStr": "用户钱包余额",
      "status": 0,
      "statusStr": "正常",
      "timeoutHours": 24
    },
    {
      "dateAdd": "2018-04-27 17:39:49",
      "dateEnd": "2028-05-12 17:39:59",
      "goodsId": 139421,
      "id": 2,
      "numberDoing": 1,
      "numberPersion": 2,
      "numberSucccess": 0,
      "refundType": 0,
      "refundTypeStr": "用户钱包余额",
      "status": 0,
      "statusStr": "正常",
      "timeoutHours": 24
    }
  ],
  "msg": "success"
}
```

### 读取商品的默认团信息

```js
WXAPI.goodsDefaultPingtuan(goodsId)
```

商品设置团购信息以后，系统会开一个默认团，用户可以去参与这个默认团

### 拉取商品多级拼团价格信息

```js
WXAPI.pingtuanMultilevel(goodsId)
```

如果设置了多级拼团价格，通过该方法，可以拉取到所有到阶段、销量、价格信息

### 开团[我发起一个团购，我是团长，让别人来参加]

```js
WXAPI.pingtuanOpen(token, goodsId)
```

> 开团成功后，团长要先自己下单并且完成支付，团才算是真正开启成功！
> 
> 仅开团，团长自己不支付，后台可以看见开团信息，但是其他用户看不到该团购，团长完成支付后才可以看见并参与

**接口返回示例：**

```json
{
  "code": 0,
  "data": {
    "dateEnd": "2019-08-16 07:45:34",
    "goodsId": 139421,
    "id": 7380,
    "pingtuanId": 2
  },
  "msg": "success"
}
```

**上面的 id 非常重要， 7380 代表的是针对 pingtuanId=2 这个团购设置下的具体某一个团购！针对后台配置的某一个团购设置(pingtuanId=2)，可以有N个进行中的拼团，我们暂且把这个 id=7380叫做团号吧~**

*一定要明确区分，拼团ID 和 团号的区别，也就是上面 pingtuanId 和 id 的区别，否则下面的方法使用过程中恒容易出错！*

### 获取某个商品当前进行中的所有拼团

```js
WXAPI.pingtuanList(Object object)
```

> 拉取某个商品当前所有的开团列表数据，用于展示当前商品的多组进行中/已完成的团购数据，你也可以选择其中一个团购加入购买以便可以早点成团
> 
> 当然你也可以自己新开一个团购队列，让别人来参与，这个时候本方法将能多返回你刚刚开的团的信息 **团长必须完成支付后才能在这里显示**

### 获取某个团购的参与用户列表

```js
WXAPI.pingtuanJoinUsers(tuanId)
```

> tuanId 为上述例子中的团号，也就是 7380，不是 2 

### 读取我参与过的所有团购记录

```js
WXAPI.pingtuanMyJoined(Object object)
```

> 具体参数请查阅接口文档
> 
> 用以展示在个人中心 --> 我参与的所有团购，可分页

## 三级分销

### 直接购买分销商资格

```js
WXAPI.fxSetting()
```

读取后台的分销设置

### 直接购买分销商资格

```js
WXAPI.fxBuy(token)
```

无需管理员审核，用户直接购买分销商身份，支付后立即成为分销商

### 申请成为分销商

```js
WXAPI.fxApply(token, name, mobile)
```

### 申请进度查询

```js
WXAPI.fxApplyProgress(token)
```

### 团队管理

```js
WXAPI.fxMembers(Object object)
```

> 查看你的1级/2级团队列表
> 
> 具体参数说明请查阅接口文档

*你的一级团队完成销售，你将可获得二级返佣佣金奖励；你的二级团队完成销售，你将可获得三级返佣佣金奖励*

### 佣金记录[返佣明细]

```js
WXAPI.fxCommisionLog(Object object)
```

### 分销商累计销售额排行榜

```js
WXAPI.fxSaleroomRankTotal(page, pageSize)
```

系统参数中添加开关类型参数 statistics_saleroom_open 才有效

### 分销商某天的销售额排行榜

```js
WXAPI.fxSaleroomRankDaily(page, pageSize, day)
```

系统参数中添加开关类型参数 statistics_saleroom_open 才有效

### 名下团队成员人数统计

```js
WXAPI.fxMembersStatistics(token)
```

接口返回如下数据：
- totleFans 全部粉丝数量
- totleChildFxs 全部分销商数量
- totleChildFxsLevel1 全部直属分销商数量
- totleChildFxsLevel2 全部间接分销商数量

### 我的佣金统计

```js
WXAPI.fxMyCommisionStatistics(token, days)
```
参数说明：
- token 当前用户的登陆token
- days 统计的日期，多个日期用英文逗号分割，0 代表全部，日期格式如：

0,2021,202107,20210707 分别可以统计全部、某年、某月、某天

### 用户绑定分销商

```js
WXAPI.bindSeller(Object object)
```

参数说明：
- token 当前登陆的token
- uid 对方用户编号，可填分销商的用户编号
- traceSeller 这是一个 boolean 参数，传true的话，如果 uid 不是分销商，那么将会绑定到 uid 这个用户的上级分销商名下

## 合伙人/团队长/ 二级分销

### 读取合伙人分销设置

```js
WXAPI.partnerSetting()
```

- isOpen 功能是否开启
- pPartner 合伙人返佣比例
- pLeader 团队长返佣比例
- priceLeader 团队长购买费用，可购买升级
- leaderUserLevelId 升级为团队长自动绑定会员等级
- memberUserLevelId 升级为团队成员自动绑定会员等级

### 用户绑定团队长成为团队成员

```js
WXAPI.partnerBindTeamLeader(token, uid)
```

- uid 为团队长的用户编号

绑定后即可加入团队长所在的团队

### 团队成员购买升级为团队长

```js
WXAPI.partnerBuyTeamLeader(token)
```

购买成功后，立即成为团队长；

本接口是使用用户余额购买团队长，如果希望使用微信支付方式购买，请参考微信支付接口，通过设置 nextAction 实现在线支付购买团队长。

### 团队成员统计

```js
WXAPI.partnerMembersStatistics(token)
```

该接口会返回：
- leaders 名下名下团队长的数量（针对合伙人身份）
- members 名下团队成员的数量

### 团队成员列表接口

```js
WXAPI.partnerMembers(Object object)
```

# 积分模块

## 积分抵扣规则

```js
WXAPI.scoreDeductionRules(type)
```

积分可用于抵扣金额，用于商城购物消费；也可以用来兑换成长值；

**type参数：**

传0，获取所有的积分抵扣金额的规则；

传1，获取所有的积分抵扣成长值的规则；

不传type参数，着获取所有的抵扣规则

## 积分赠送规则

```js
WXAPI.scoreRules(Object object)
```

## 签到送积分

### 签到规则

```js
WXAPI.scoreSignRules()
```

> 读取签到一次送多少积分；连续签到x天赠送y积分

### 签到

```js
WXAPI.scoreSign(token)
```

### 读取今日签到信息

```js
WXAPI.scoreTodaySignedInfo(token)
```

> 判断今天有没有签到
> 
> 错误码返回 700 表示未签到；错误码返回 0 表示已经签到

### 签到记录

```js
WXAPI.scoreSignLogs(Object object)
```

> 读取历史签到记录
> 
> 分页展示，具体参数详见接口文档说明

## 使用积分券兑换积分

```js
WXAPI.scoreExchange(token, number)
```

number 为积分券的券号，兑换积分

## 将积分兑换成余额

```js
WXAPI.scoreExchangeCash(token, deductionScore)
```

根据后台设定的积分兑换现金的规则，使用该方法，用户将积分兑换成余额

deductionScore 为需要兑换的积分数量

## 转发微信群获得积分奖励

```js
WXAPI.shareGroupGetScore(code, referrer, encryptedData, iv)
```

**referrer**

*分享人的用户id*

**encryptedData**

*小程序api:wx.getShareInfo 获得*

**iv**

*小程序api:wx.getShareInfo 获得*

## 积分明细

```js
WXAPI.scoreLogs(Object object)
```

详细记录你的每一次积分变动

## 成长值

### 用积分兑换成长值

```js
WXAPI.exchangeScoreToGrowth(token, deductionScore)
```

deductionScore 参数为你希望消耗多少积分用来兑换成长值，请根据积分兑换规则，自行计算你打算消耗的积分数量

### 成长值变动明细

```js
WXAPI.growthLogs(Object object)
```

详细记录每一次成长值的变化情况

# 资金 / 财务 相关


## 交易密码

### 设置交易密码

适用于用户第一次设置交易密码，如果用户已经设置过交易密码，该接口无效，请使用修改交易密码接口或者用短信验证码重置交易密码接口

```js
WXAPI.setPayPassword(token, pwd)
```

- token 用户登陆的token
- pwd 交易密码

### 修改交易密码

```js
WXAPI.modifyPayPassword(token, pwdOld, pwdNew)
```

- token 用户登陆的token
- pwdOld 原来的交易密码
- pwdNew 新的交易密码

### 重置交易密码

配合短信验证码接口，利用当前手机号码急短信验证码，重置交易密码

```js
WXAPI.resetPayPassword(mobile, code, pwd)
```

- mobile 当前账户绑定的手机号码
- code 手机收到的短信验证码
- pwd 新的交易密码

## 获取资产信息（余额、可用积分）

```js
WXAPI.userAmount(token)
```

**返回字段说明：**

balance 可用余额

freeze 冻结金额

score 可用积分

growth 当前成长值

totleConsumed 累计消费金额


## 在线支付(充值)

### 获取充值规则（满多少送多少）

```js
WXAPI.rechargeSendRules()
```

### 微信小程序支付

```js
WXAPI.wxpay(Object object)
```

调用该方法后，可获得用于发起微信支付的所有数据，请将返回值根据小程序的微信支付文档唤起支付功能即可，参考代码如下：

```js
WXAPI.wxpay({
  token: '登录token',
  money: 100,
  payName: '支付测试',
  nextAction: '{"type": 0, "id": 1}'
}).then(function (res) {
  if (res.code == 0) {
    // 小程序代码发起支付
    wx.requestPayment({
      timeStamp: res.data.timeStamp,
      nonceStr: res.data.nonceStr,
      package: res.data.package,
      signType: res.data.signType,
      paySign: res.data.paySign,
      fail: function (aaa) {
        wx.showToast({
          title: '支付失败:' + aaa
        })
      },
      success: function () {
        // 提示支付成功
        wx.showToast({
          title: '支付成功'
        })
      }
    })
  }
})
```

### 微信小程序支付[FOMO跨境支付]

```js
WXAPI.wxpayFOMO(Object object)
```

调用该方法后，可获得用于发起微信支付的所有数据，请将返回值根据小程序的微信支付文档唤起支付功能即可，参考代码如下：

```js
WXAPI.wxpay({
  token: '登录token',
  money: 100,
  payName: '支付测试',
  nextAction: '{"type": 0, "id": 1}'
}).then(function (res) {
  if (res.code == 0) {
    // 小程序代码发起支付
    wx.requestPayment({
      timeStamp: res.data.timeStamp,
      nonceStr: res.data.nonceStr,
      package: res.data.package,
      signType: res.data.signType,
      paySign: res.data.paySign,
      fail: function (aaa) {
        wx.showToast({
          title: '支付失败:' + aaa
        })
      },
      success: function () {
        // 提示支付成功
        wx.showToast({
          title: '支付成功'
        })
      }
    })
  }
})
```

### payNow跨境支付

```js
WXAPI.payNow(Object object)
```

该接口返回：

```json
{
    "code": 0,
    "data": {
        "createdAt": 1605784207,
        "codeUrl": "00020101021226580009SG.PAYNOW010120213201543956D0020301004142020111919400752045999530370254041.005802SG5918FOMO PAY PTE. LTD.6009SINGAPORE62260122QY03022020111940207560630422F3",
        "outTradeId": "ZF2011191756701253",
        "amount": "1.00",
        "orderNo": "ZF2011191756701253",
        "subject": "在线支付",
        "id": "100500220201119402077271",
        "primaryTransactionId": "100510120201119402078121",
        "currencyCode": "SGD",
        "status": "CREATED"
    },
    "msg": "success"
}
```

然后你只需要将 codeUrl 的内容生成二维码即可

### FOMO网关支付

```js
WXAPI.fomoCheckout(Object object)
```

该接口返回：

```json
{
    "code": 0,
    "data": {
        "createdAt": 1605862553,
        "outTradeId": "ZF2011200763243499",
        "amount": "0.10",
        "orderNo": "ZF2011200763243499",
        "subject": "在线支付",
        "id": "100500120201120321535852",
        "returnUrl": "https://www.fomopay.com/",
        "currencyCode": "SGD",
        "url": "https://ipg.fomopay.net/web/100500120201120321535852?p=e....",
        "status": "CREATED"
    },
    "msg": "success"
}
```

然后你只需要让用户复制 url 字段的地址，在浏览器中打开这个地址完成支付即可

### 微信小程序支付[服务商版本]

```js
WXAPI.wxpayFWS(Object object)
```

调用该方法后，可获得用于发起微信支付的所有数据，请将返回值根据小程序的微信支付文档唤起支付功能即可，参考代码如下：

```js
WXAPI.wxpayFWS({
  token: '登录token',
  money: 100,
  payName: '支付测试',
  nextAction: '{"type": 0, "id": 1}'
}).then(function (res) {
  if (res.code == 0) {
    // 小程序代码发起支付
    wx.requestPayment({
      timeStamp: res.data.timeStamp,
      nonceStr: res.data.nonceStr,
      package: 'prepay_id=' + res.data.prepayId,
      signType: 'MD5',
      paySign: res.data.sign,
      fail: function (aaa) {
        wx.showToast({
          title: '支付失败:' + aaa
        })
      },
      success: function () {
        // 提示支付成功
        wx.showToast({
          title: '支付成功'
        })
      }
    })
  }
})
```

具体参数请查阅接口文档说明，尤其要注意 **nextAction** 参数的使用

### 扫呗在线支付

```js
WXAPI.wxpaySaobei(Object object)
```

参数以及如何调用发起小程序支付方法同上

### wepayez境外支付

```js
WXAPI.wxpayWepayez(Object object)
```

参数以及如何调用发起小程序支付方法同上

### intelsalon云美集付

```js
WXAPI.wxpayIntelsalon(Object object)
```

参数以及如何调用发起小程序支付方法同上

### 支付宝支付(半自动)

```js
WXAPI.alipay(Object object)`
```

### 充值记录

```js
WXAPI.payLogs(Object object)
```

### 查询支付结果

```js
WXAPI.payQuery(token, outTradeId)
```

查询 outTradeId 这笔在线支付的状态，有的时候，客户端会有这个需求，定期轮询检测在线支付状态

## 优惠买单

到店消费后，使用该功能完成现场消费；询问服务员消费金额后，用户自主输入消费金额后完成在线消费；系统自动按照后台设置的优惠买单规则进行满减

### 获取买单优惠

```js
WXAPI.payBillDiscounts()
```

> 读取后台设置的满减设置列表

### 买单

```js
WXAPI.payBillV2(Object object)
```

## 资金流水

```js
WXAPI.cashLogsV2(Object object)
```

## 提现管理

### 申请提现

WXAPI.withDrawApplyV2(Object object)

### 提现记录

> WXAPI.withDrawLogs(Object object)

### 提现记录详情

> WXAPI.withDrawDetail(token, id)

## 发票管理

### 申请发票
> WXAPI.invoiceApply(Object object)
### 申请的发票列表
> WXAPI.invoiceList(Object object)
### 发票详情
> WXAPI.invoiceDetail(token, id)

## 押金管理

### 支付押金

```js
WXAPI.payDeposit(Object object)
```

### 获取押金记录

```js
WXAPI.depositList(Object object)
```

### 押金详情

```js
WXAPI.depositInfo(token, id)
```

### 申请退回押金

```js
WXAPI.depositBackApply(token, id)
```

# 小程序工具类

## 无限获取二维码

```js
WXAPI.wxaQrcode(Object object)
```

> 微信有规定，只有正式上线的小程序才可以获取小程序码，所以如果你获取到的小程序码无法打开，请不要惊讶

*如果生成的小程序码无法打开，请将图片保存到本地后，用记事本打开来，里面就可以看到失败原因了的*

## 小程序数据解密

```js
WXAPI.encryptedData(code, encryptedData, iv)
```

> 类似微信运动之类的数据，都可以通过该方法解密成明文
> 
> code 为登录临时凭证

## 小程序数据解密[服务商模式]

```js
WXAPI.wxappServiceEncryptedData(Object object)
```

参数说明：
- code wx.login 获取的 code
- encryptedData 微信登录接口返回的 加密用户信息
- iv 微信登录接口返回的加密偏移数据

## 模板消息

### 保存 formid/预支付Id

```js
WXAPI.addTempleMsgFormid(token, type, formId)
```

> type: form/pay ，分别代表支付还是表单提交
> 
> formId: 表单提交场景下，为 submit 事件带上的 formId；支付场景下，为支付的 prepay_id

小程序给用户发送模板消息有特殊规定：
[https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/template-message.html](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/template-message.html)

1. 当用户在小程序内完成过支付行为，可允许开发者向用户在7天内推送有限条数的模板消息（1次支付可下发3条，多次支付下发条数独立，互相不影响）
2. 当用户在小程序内发生过提交表单行为且该表单声明为要发模板消息的，开发者需要向用户提供服务时，可允许开发者向用户在7天内推送有限条数的模板消息（1次提交表单可下发1条，多次提交下发条数独立，相互不影响）

*所以为了突破这个数量限制，我们预先收集很多的 formid/预支付Id ，这样就可以不受限制的给用户发送模板消息了*

**小程序模板消息调试请使用手机，开发工具获取到的formid 是一个 mock（模拟的），无法用来真正发送模板消息**

### 给用户发送模板消息

```js
WXAPI.sendTempleMsg(Object object)
```

> 具体参数说明详见接口文档
> 
> 可实现立即发送消息；按照条件触发发送消息

本方法可以指定一个 formid/预支付Id ，也可以不传该参数，那么系统将自动从上面的方法存储的 formid/预支付Id 里面获取一个用来发送模板消息

# 活动 & 工具

## 在线获取二维码

```js
WXAPI.commonQrcode(Object object)
```

参数说明：
- content 二维码的内容
- width 二维码的宽度，不传默认为 300
- expireHours 图片几小时后自动删除，不传则不会删除图片

## 分布式系统唯一ID

> WXAPI.uniqueId(type)

## 手机号段服务

### 归属地查询

```js
WXAPI.queryMobileLocation(mobile)
```

### 读取下一个号段

```js
WXAPI.nextMobileSegment(Object object)
```

## 抽奖功能

### 抽奖项目详情

> WXAPI.luckyInfo(id)

### 参与抽奖

> WXAPI.luckyInfoJoin(id, token)

### 我的抽奖信息

> WXAPI.luckyInfoJoinMy(id, token)

### 抽奖项目的所有抽奖记录明细

> WXAPI.luckyInfoJoinLogs(Object object)

## 预约/报名

### 读取所有的预约/报名项目

```js
WXAPI.yuyueItems(Object object)
```

> 拉取后台设置的所有预约/报名项目，小程序端可展示所有的项目、进度等情况
> 
> 具体参数详见接口文档

### 项目详情

```js
WXAPI.yuyueItemDetail(id)
```

> 读取指定 id 的预约/报名项目详情、后台设置的扩展属性

### 进行预约或者在线报名

```js
WXAPI.yuyueJoin(Object object)
```

> 具体参数详见接口文档

**可作为团队/个人直接报名，也可以加入指定的某一个团队进行报名**

参数说明：

**个人/团队报名：**

**yuyueId** 报名项目ID

**teamName** 团队名称[也可以不传]

**remark** 报名备注

**extJsonStr** 报名扩展属性

**加入某个团队：**

**yuyueId** 报名项目ID

**teamId** 团队ID

**remark** 报名备注

**extJsonStr** 报名扩展属性

**成功预约/报名后将会给你返回报名ID，也就是下述方法中使用到的 joinId 参数**

### 支付报名费

```js
WXAPI.yuyueJoinPay(token, joinId)
```

> 如果后台设置的预约/报名项目需要支付一定的费用，那么用户需要通过该方法完成报名费的支付才能完成预约/报名

### 更新预约/报名信息

```js
WXAPI.yuyueJoinUpdate(token, joinId, extJsonStr)
```

> 修改预约/报名的扩展信息，必须是非匿名情况下才能使用，否则没法确认修改者用户身份

### 我的报名信息

```js
WXAPI.yuyueMyJoinInfo(token, joinId)
```

### 我所有的预约记录/报名记录

```js
WXAPI.yuyueMyJoinLogs(Object object)
```

> 该方法将分页展示用户的参与历史记录，具体参数详见接口文档

### 读取某个项目的所有报名团队列表

```js
WXAPI.yuyueTeams(Object object)
```

### 查看团队详情

```js
WXAPI.yuyueTeamDetail(teamId)
```

> 上述方法中获取到的团队ID

### 拉取团队成员列表

```js
WXAPI.yuyueTeamMembers(Object object)
```

### 团队长删除[踢]团队成员

```js
WXAPI.yuyueTeamDeleteMember(token, joinId)
```

## 投票功能

后台新建投票项目，在该投票项目下可设置多个投票选项，用可根据后台设置的 单选/多选 设置进行投票，最后查看总体投票情况以及投票明细(非匿名的话)

### 投票项目

```js
WXAPI.voteItems(Object object)
```

> 读取所有的投票项目，下面的方法均是针对其中某一个投票项目进行参与
> 
> 具体参数详见接口文档

### 投票详情

```js
WXAPI.voteItemDetail(id)
```

> 投票项目的详细数据
> 
> 拉取当前投票项目的所有投票选项
> 
> 同时也将返回后台设置的当前投票项目的扩展属性数据

### 我的投票

```js
WXAPI.myVote(token, voteId)
```

> 查看针对 voteId 这个投票项目，我的投票情况
> 
> 如果返回 700 ，说明你还没投票，用该方法可用来判断我有没有投票

### 我要投票

```js
WXAPI.vote(token, voteId, items, remark)
```

> 投票动作，具体参数说明:

**voteId** *上述的投票项目id*

**items** *选择的投票选项数组，单选的话就一个选项，多选的话就是你选择几个就几个*

**remark** *投票备注*

### 查看投票明细

```js
WXAPI.voteLogs(Object object)
```

> 查询某个投票项目所有的参与者名录、以及具体的投票选项
> 
> 具体参数详见接口文档

## 商品条码查询

```js
WXAPI.queryBarcode(barcode)
```
> barcode 为商品的条码，可以利用小程序的扫码api、扫码枪等实现快速识别条码


## 短链接服务

> 将长链接生成短链接
> ****
> url 参数为原始的长链接地址

```
WXAPI.shortUrl(url)
```

## 地图工具

### 计算2个坐标之间的直线距离

```js
WXAPI.mapDistance(lat1, lng1, lat2, lng2)
```

### 计算2个坐标之间的导航距离

```js
WXAPI.mapDistanceNavigation(key, mode, from, to)
```

- key 请登陆 https://lbs.qq.com/ 后，左侧菜单的“key管理”自行创建一个key即可；此key需要设置启用WebserviceAPI
- mode 计算方式：driving（驾车）、walking（步行）、bicycling（自行车）
- from 起点坐标，39.071510,117.190091
- to 终点坐标，39.071510,117.190091

### 将坐标地址转换为详细地址

比如可将 30.274085,120.15507 这个坐标翻译成：

浙江省杭州市拱墅区环城北路318号

```js
WXAPI.mapQQAddress(location, coord_type)
```

### 地图上搜索

```
WXAPI.mapQQSearch(Object object)
```

> 在地图上搜索地理位置，例如找肯德基，找星巴克等等;
> 
> 参数说明：

**keyword**

*关键词，比如: kfc、星巴克、瑞幸咖啡*

**boundary**

*搜索范围，目前支持以下3种方式：*
1. 在城市类查找所有: region(北京,0)
2. 在当前定位为圆心范围内搜索: nearby(39.908491,116.374328,1000)
3. 指定的区域内搜索: rectangle(39.9072,116.3689,39.9149,116.3793)

**page**

*读取第几页数据，不传该参数默认取第一页*

**pageSize**

*每页显示几条数据，不传该参数默认取10条，该参数最多数字为20*

## 排队叫号

### 获取所有的队列

```js
WXAPI.queuingTypes(status)
```

> 获取所有的叫号队列
> 
> status 参数代表（0 正常 1 关闭 2 名额已满），不传该参数则获取所有的队列

*比如餐饮里面的: 2人桌、4人桌、大圆桌；这3个队列是独立叫号的，用户根据自己的实际情况到对应的队列里面去取号排队；*

*还比如银行办事大厅的队列：个人业务、对公业务、现金业务；这3个队列也是独立叫号的；*

### 取号

```js
WXAPI.queuingGet(token, typeId, mobile)
```

> 用户需要登录后才能取号，所以请提供正确的 token
> 
> typeId 为你要取号的队列的id，请根据上面的方法获取
> 
> mobile 为取号手机号码，非必填，后续你可以向这个手机号码推送队列进度情况及排队提醒

### 我的取号情况

```js
WXAPI.queuingMy(token, typeId, status)
```

> typeId 为你要取号的队列的id，如果不传则获取所有队列的取号信息
> 
> status 代表（0 排队中 1 受理中 2 已处理 3 已过号）不传该参数则读取所有的取号记录

# 社交通讯

## 好友管理

### 读取好友列表

```js
WXAPI.friendList(Object object)
```

> 拉取我的好友列表，分页展示
> 
> 具体参数请查阅接口文档

### 添加好友

```js
WXAPI.addFriend(token, uid)
```

> 添加 uid 指定用户编号的用户为好友

### 查看好友详情

```js
WXAPI.friendUserDetail(token, uid)
```

**后台系统参数中的开关参数ALLOW_VIEW_FRIEND设置为打开状态才能调用该接口**

token 为非必填参数，允许游客调用该接口

uid 指定用户编号的好友用户资料

游客可以查看用户分组为 **aicard** 的用户的信息，以便兼容AI名片应用，其他分组的用户只能登录用户才能查看

## 站内信管理

### 站内消息列表

```js
WXAPI.messageList(Object object)
```

> 具体参数请查阅接口文档

### 设置为已读

```js
WXAPI.messageRead(token, id)
```

### 删除站内信

```js
WXAPI.messageDelete(token, id)
```

## 用户关注

### 判断是否关注某人

```js
WXAPI.userAttentioncheck(token, uid)
```

### 关注某人

```js
WXAPI.userAttentionAdd(token, uid)
```

### 取消关注某人

```js
WXAPI.userAttentionRemove(token, uid)
```

### 读取用户详情

```js
WXAPI.userAttentionDetail(token, uid)
```

### 我关注的用户列表

```js
WXAPI.userMyAttentionList(Object object)
```

### 我的粉丝列表

```js
WXAPI.userAttentionMeList(Object object)
```

### 关注统计

```js
WXAPI.userAttentionStatistics(token)
```

该接口返回关注和被关注的数据统计：

```json
{
  myAttentionCount: 10,
  attentionMeCount: 100
}
```

# 扫码点餐

## 扫桌码获取token

```js
WXAPI.cyTableToken(tableId, key)
```

参数说明：

- tableId 后台餐桌管理，每个桌子的id
- key 桌子密钥，后台管理

功能介绍：

适用于餐饮领域扫码点餐，针对同一个桌码，不同的用户扫码后可共享同一个购物车、可以看到同一份订单数据、任意一个用户均可发起买单。

接口返回 token，后续购物车以及查看订单信息时候需要使用该token

## 下单（厨） / 加菜

```js
WXAPI.cyTableAddOrder(Object object)
```

参数说明：

- token 扫桌码接口返回的token
- goodsJsonStr 本次下单的菜品数据，如下：

```json
[
    {
        "goodsId": 11, // 商品id
        "number": 2, // 数量
        "propertyChildIds": "" // sku 信息
    },
    {
        "goodsId": 8,
        "number": 3,
        "propertyChildIds": "2:9"
    }
]
```

# 购买课程模块

## 获取课程列表

```js
WXAPI.courseInfoList(Object object)
```

参数说明：

- page 获取第几页数据，初始1
- pageSize 每页显示多少条数据

## 获取课程详情

```js
WXAPI.courseInfo(id)
```

参数说明：

- id 课程ID

## 获取某个课程的报名用户信息

```js
WXAPI.courseBuyLogPublic(Object object)
```

参数说明：

- page 获取第几页数据，初始1
- pageSize 每页显示多少条数据
- courseId 课程ID

## 获取我的报名记录

```js
WXAPI.courseBuyLogMy(Object object)
```

参数说明：

- token 用户登陆token
- page 获取第几页数据，初始1
- pageSize 每页显示多少条数据
- courseId 课程ID, 不传则获取所有的课程报名记录

## 课程购买订单详情

```js
WXAPI.courseInfoBuyLogDetail(token, id, hxNumber)
```

参数说明：

- token 用户登陆token
- id 订单id，并非课程id
- hxNumber 核销码

## 购买课程

```js
WXAPI.courseInfoBuy(Object object)
```

参数说明：

- token 用户登陆token
- courseId 课程ID
- shopId 门店ID
- sessionId 场次ID
- name 姓名
- mobile 手机号码
- number 购买数量

## 用余额支付购买课程订单

```js
WXAPI.courseInfoBuyLogPay(token, orderId)
```

参数说明：

- token 用户登陆token
- orderId 课程购买记录的ID，并非课程ID

## 关闭课程订单

```js
WXAPI.courseInfoBuyLogClose(token, orderId)
```

参数说明：

- token 用户登陆token
- orderId 课程购买记录的ID，并非课程ID

## 删除课程订单

```js
WXAPI.courseInfoBuyLogDelete(token, orderId)
```

参数说明：

- token 用户登陆token
- orderId 课程购买记录的ID，并非课程ID