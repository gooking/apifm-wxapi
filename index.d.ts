type Request = (url: string, needSubDomain: boolean, method: 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT', data: any) => Promise<{
    code: number
    data: any
    [key: string]: any
}>

type Token = {
    token: string,
}

type Pagination = {
    page?: number,
    pageSize?: number,
}

type DateQuery = {
    /**
     * 	添加时间起,格式 2018-05-16
     *
     * @type {string}
     */
    dateAddBegin?: string,
    /**
     * 	添加时间起,格式 2018-05-16
     *
     * @type {string}
     */
    dateAddEnd?: string,
}

declare interface WXAPI<RequestResult = ReturnType<Request>> {
    /**
     *
     * 初始化
     * @param {string} subDomain 子域名
     */
    init: (subDomain: string) => void

    /**
     *
     * 初始化
     * @param {string} API_BASE_URL 主域名
     * @param {string} subDomain 子域名
     */
    init2: (API_BASE_URL: string, subDomain: string) => void

    /**
     *
     * 初始化
     * @param {string} apiBaseUrl 主域名
     * @param {string} subDomain 子域名
     */
    init3: (options: {
        apiBaseUrl?: string,
        subDomain: string,
        request?: (...args: Parameters<Request>) => RequestResult,
    }) => void

    /**
     *
     * 请求工具函数
     * @param {string} url 请求 url
     * @param {string} needSubDomain 是否需要子域名
     * @param {string} method 请求方式 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT'
     */
    request: Request

    /**
     *
     * 查询手机号码归属地
     * @method GET
     * @param {string} mobile 手机号码
     */
    queryMobileLocation: (mobile: string) => RequestResult

    /**
     *
     * 获取指定城市的下一个号段
     * @method POST
     * @param {string} segment 	当前号段，要获取第一个号段请传入0
     * @param {string} cityName 所属城市，eg:杭州
     * @param {string} province 所属省份，eg:浙江
     * @param {string} segmentName 包含的运营商相关信息，例如：中国联通、移动
     */
    nextMobileSegment: (data: {
        /** 所属城市，eg:杭州 */
        segment: string,
        cityName?: string,
        province?: string,
        segmentName?: string,
    }) => RequestResult

    /**
     *
     * 读取系统参数
     * @method GET
     * @param {string} key 参数参数
     */
    queryConfigValue: (key: string) => RequestResult

    /**
     *
     * 批量读取系统参数
     * @method GET
     * @param {string} keys 参数参数
     */
    queryConfigBatch: (keys: string[]) => RequestResult

    /**
     *
     * 积分赠送规则
     * @method POST
     * @param {string} data.code 编码
     */
    scoreRules: (data: { code?: string }) => RequestResult

    /**
     *
     * 获取签到赠送积分规则
     * @method GET
     */
    scoreSignRules: () => RequestResult

    /**
     *
     * 签到
     * @method POST
     * @param {string} token 登录接口返回的token
     */
    scoreSign: (token: string) => RequestResult

    /**
     *
     * 签到记录
     * @method POST
     * @param {string} dateAddBegin 起始时间筛选，2017-11-22
     * @param {string} dateAddEnd 截止时间筛选，2017-11-22
     * @param {number} page 获取第几页数据
     * @param {number} pageSize 每页显示多少数据
     * @param {string} token 登录接口返回的token
     */
    scoreSignLogs: (data: {
        token: string,
    } & Pagination & DateQuery) => RequestResult

    /**
     *
     * 今日签到记录
     * @method GET
     * @param {string} token 登录接口返回的token
     */
    scoreTodaySignedInfo: (token: string) => RequestResult

    /**
     *
     * 积分券兑换积分
     * @method POST
     * @param {string} token 登录接口返回的token
     * @param {string} number 券号
     */
    scoreExchange: (token: string, number: string) => RequestResult

    /**
     *
     * 积分兑换成现金
     * @method POST
     * @param {string} token 登录接口返回的token
     * @param {string} deductionScore 抵扣积分数量
     */
    scoreExchangeCash: (token: string, deductionScore: string) => RequestResult

    /**
     *
     * 积分明细记录
     * @method POST
     * @param {string} behavior 收支方式 0 收入 1 支出
     * @param {string} dateAddBegin 起始时间筛选，2017-11-22
     * @param {string} dateAddEnd 截止时间筛选，2017-11-22
     * @param {number} page 获取第几页数据
     * @param {number} pageSize 每页显示多少数据
     * @param {number} remark 备注关键词搜索
     * @param {string} type 类型 0 注册 1 邀请好友 2 每日签到 3 兑换优惠券 4 管理员调整 5充值送 6 消费返
     * @param {string} token 登录接口返回的token
     */
    scoreLogs: (data: {
        behavior?: 0 | 1,
        remark?: string,
        type?: 0 | 1 | 2 | 3 | 4 | 5 | 6,
        token: string,
    } & Pagination & DateQuery) => RequestResult

    /**
     *
     * 小程序分享到微信群赠送积分
     * @method POST
     * @param {string} code 小程序登录时候获得的code临时凭证
     * @param {string} referrer 分享人的用户id
     * @param {any} encryptedData 微信登录接口返回的 加密用户信息
     * @param {string} iv 小程序api:wx.getShareInfo 获得
     */
    shareGroupGetScore: (code: string, referrer: string, encryptedData: any, iv: string) => RequestResult

    /**
     *
     * 获取砍价设置
     * @method GET
     * @param {string} goodsId 商品id,多个商品使用英文逗号分隔
     */
    kanjiaSet: (goodsId: string) => RequestResult

    /**
     *
     * 加入砍价
     * @method POST
     * @param {string} kjid 砍价ID
     * @param {string} token 登录接口返回的token
     */
    kanjiaJoin: (token: string, kjid: string) => RequestResult

    /**
     *
     * 砍价详情
     * @method GET
     * @param {string} kjid 砍价ID
     * @param {string} joiner 参与者ID
     */
    kanjiaDetail: (kjid: string, joiner: string) => RequestResult

    /**
     *
     * 帮人砍一刀
     * @method POST
     * @param {string} token 登录接口返回的token
     * @param {string} kjid 砍价ID
     * @param {string} joiner 砍价参与用户ID
     * @param {string} remark 砍价留言，选填项
     */
    kanjiaHelp: (token: string, kjid: string, joiner: string, remark?: string) => RequestResult

    /**
     *
     * 删除砍价[删除后，你依然可以重新发起砍价]
     * @method POST
     * @param {string} token 登录接口返回的token
     * @param {string} kjid 砍价ID
     */
    kanjiaClear: (token: string, kjid: string) => RequestResult

    /**
     *
     * 我的砍价
     * @method GET
     * @param {string} token 登录接口返回的token
     * @param {string} kjid 砍价ID
     */
    kanjiaMyJoinInfo: (token: string, kjid: string) => RequestResult

    /**
     *
     * 帮忙砍价信息
     * @method GET
     * @param {string} token 登录接口返回的token
     * @param {string} kjid 砍价ID
     * @param {string} joiner 砍价参与用户ID
     */
    kanjiaHelpDetail: (token: string, kjid: string, joiner: string) => RequestResult

    /**
     *
     * 检测登录token是否有效
     * @method GET
     * @param {string} token 登录接口返回的token
     */
    checkToken: (token: string) => RequestResult

    /**
     *
     * 检测referrer[邀请码]是否有效
     * @method GET
     * @param {string} referrer 邀请码
     */
    checkReferrer: (referrer: string) => RequestResult

    /**
     *
     * 小程序支付
     * @method POST
     * @param {number} money 支付金额
     * @param {string} nextAction 支付成功后的后续工作，具体详见: https://www.it120.cc/help/aetmlb.html
     * @param {string} payName 微信支付弹出页面显示的支付名目
     * @param {string} remark 支付备注说明
     * @param {string} token 登录接口返回的token
     */
    wxpay: (data: {
        money: number,
        nextAction?: string,
        payName?: string,
        remark?: string,
        token: string,
    }) => RequestResult

    /**
     *
     * 头条/抖音小程序支付
     * @method POST
     * @param {number} money 支付金额
     * @param {string} nextAction 支付成功后的后续工作，具体详见: https://www.it120.cc/help/aetmlb.html
     * @param {string} payName 微信支付弹出页面显示的支付名目
     * @param {string} remark 支付备注说明
     * @param {string} token 登录接口返回的token
     */
    ttpay: typeof WXAPI.wxpay

    /**
     *
     * 查询在线支付状态
     * @method GET
     * @param {number} outTradeId 支付订单号
     * @param {string} token 登录接口返回的token
     */
    payQuery: (token: string, outTradeId: string) => RequestResult

    /**
     *
     * 查询在线支付状态
     * @method GET
     * @param {number} outTradeId 支付订单号
     * @param {string} token 登录接口返回的token
     */

    // wxpaySaobei: (data) => {
    //     return request('/pay/lcsw/wxapp', true, 'post', data)
    // },

    /**
     *
     * 小程序支付[wepayez]
     * @method POST
     * @param {number} money 支付金额
     * @param {string} nextAction 支付成功后的后续工作，具体详见: https://www.it120.cc/help/aetmlb.html
     * @param {string} payName 微信支付弹出页面显示的支付名目
     * @param {string} remark 支付备注说明
     * @param {string} token 登录接口返回的token
     */
    wxpayWepayez: typeof WXAPI.wxpay

    /**
     *
     * [支付宝半自动转账]获取支付地址
     * @method POST
     * @param {number} money 支付金额
     * @param {string} nextAction 支付成功后的后续工作，具体详见: https://www.it120.cc/help/aetmlb.html
     * @param {string} remark 支付备注说明
     * @param {string} token 登录接口返回的token
     */
    alipay: (data: {
        money: number,
        nextAction?: string,
        remark?: string,
        token: string,
    }) => RequestResult

    /**
     *
     * 微信小程序登录
     * @method POST
     * @param {string} code string
     */
    login_wx: (code: string) => RequestResult

    /**
     *
     * 通过微信绑定的手机号码登录
     * @method POST
     * @param {string} code 小程序登录时候获得的code临时凭证
     * @param {any} encryptedData 微信登录接口返回的 加密用户信息
     * @param {string} iv 小程序api:wx.getShareInfo 获得
     */
    loginWxaMobile: (code: string, encryptedData: any, iv: string) => RequestResult

    /**
     *
     * 用户登录
     * @method POST
     * @param {string} deviceId 登录设备ID，自定义即可
     * @param {string} deviceName 登录设备名称， 自定义即可
     * @param {string} pwd 登录密码
     * @param {string} username 用户名
     */
    login_username: (data: {
        deviceId?: string,
        deviceName?: string,
        pwd: string,
        username: string,
    }) => RequestResult

    /**
     *
     * 设置用户名
     * @method POST
     * @param {string} token 登录接口返回的token
     * @param {string} pwd 登录密码
     * @param {string} username 用户名
     */
    bindUsername: (token: string, username: string, pwd?: string) => RequestResult

    /**
     *
     * 用户登录
     * @method POST
     * @param {string} mobile 登录接口返回的token
     * @param {string} pwd 登录密码
     * @param {string} deviceId 设备 id
     * @param {string} deviceName 登录设备名称， 自定义即可
     */
    login_mobile: (mobile: string, pwd: string, deviceId: string, deviceName?: string) => RequestResult

    /**
     *
     * 重设密码[手机找回密码]
     * @method POST
     * @param {string} mobile 手机号码
     * @param {string} pwd 登录密码
     * @param {string} code 短信验证码
     */
    resetPwdUseMobileCode: (mobile: string, pwd: string, code: string) => RequestResult

    /**
     *
     * 重设密码[邮箱找回密码]
     * @method POST
     * @param {string} email 邮件地址
     * @param {string} pwd 登录密码
     * @param {string} code 邮件验证码
     */
    resetPwdUseEmailCode: (email: string, pwd: string, code: string) => RequestResult

    /**
     *
     * 微信小程序用户详细注册
     * @method POST
     * @param {string} code 小程序登录时候获得的code临时凭证
     * @param {string} referrer 分享人的用户id
     * @param {any} encryptedData 微信登录接口返回的 加密用户信息
     * @param {string} iv 小程序api:wx.getShareInfo 获得
     * @param {string} postJsonString 用户的扩展数据，必须是 json 格式
     */
    register_complex: (data: {
        code: string,
        encryptedData: any,
        iv: string,
        referrer?: string,
        postJsonString?: string
    }) => RequestResult

    /**
     *
     * 微信小程序用户快速注册
     * @method POST
     * @param {string} code 小程序登录时候获得的code临时凭证
     * @param {string} referrer 分享人的用户id
     * @param {string} postJsonString 用户的扩展数据，必须是 json 格式
     */
    register_simple: (data: {
        code: string,
        referrer?: string,
        postJsonString?: string
    }) => RequestResult

    /**
     *
     * 用户注册[用户名注册]
     * @method POST
     * @param {string} pwd 密码
     * @param {string} username 用户名
     * @param {boolean} autoLogin true / false 是否在注册后自动完成登录【对于之前已注册的用户，自动完成登录】
     * @param {string} city 所属城市
     * @param {string} nick 昵称
     * @param {string} postJsonString 用户的扩展数据，必须是 json 格式
     * @param {string} province 所属省份
     * @param {string} referrer 邀请人的用户id
     */
    register_username: (data: {
        pwd: string,
        username: string,
        autoLogin?: boolean,
        city?: string,
        nick?: string,
        postJsonString?: string,
        province?: string,
        referrer?: string,
    }) => RequestResult

    /**
     *
     * 用户注册[手机号]
     * @method POST
     * @param {string} code  短信验证码
     * @param {string} mobile  手机号码
     * @param {string} pwd 密码
     * @param {string} username 用户名
     * @param {boolean} autoLogin true / false 是否在注册后自动完成登录【对于之前已注册的用户，自动完成登录】
     * @param {string} city 所属城市
     * @param {string} nick 昵称
     * @param {string} postJsonString 用户的扩展数据，必须是 json 格式
     * @param {string} province 所属省份
     * @param {string} referrer 邀请人的用户id
     */
    register_mobile: (data: {
        code: string,
        mobile: string,
        pwd: string,
        autoLogin?: boolean,
        city?: string,
        nick?: string,
        postJsonString?: string,
        province?: string,
        referrer?: string,
    }) => RequestResult

    /**
     *
     * Banner列表
     * @method GET
     * @param {string} type 类型，多个类型请用英文逗号隔开
     */
    banners: (data: {
        type?: string,
    }) => RequestResult

    /**
     *
     * 商品类别
     * @method GET
     */
    goodsCategory: () => RequestResult

    /**
     *
     * 分类详情
     * @method GET
     * @param {string} id 分类id
     *
     */
    goodsCategoryDetail: (id: string) => RequestResult

    /**
     *
     * 商品列表
     * @method POST
     * @param {string} barCode 商品条码
     * @param {string} categoryId 获取指定分类下的商品
     * @param {string} day 格式: yyyy-MM-dd，是指配置了按天定价后查找某天还有库存的商品
     * @param {string} hidden 传1读取所有的隐藏商品，否则只获取不隐藏的商品
     * @param {string} k 搜索关键词，高度模糊匹配标题、标签、介绍
     * @param {string} kanjia true 为拉取支持砍价的商品
     * @param {string} miaosha true 为拉取支持秒杀的商品
     * @param {string} nameLike nameLike
     * @param {string} orderBy 排序规则：priceUp 价格升序，priceDown 价格倒序，ordersUp 销量升序，ordersDown 销量降序，addedUp 发布时间升序，addedDown 发布时间倒序, nameUp 商品名称升序
     * @param {string} page 获取第几页数据
     * @param {string} pageSize 每页显示多少数据
     * @param {string} pingtuan true 为拉取支持拼团的商品
     * @param {string} priceMax 金额搜索最大值
     * @param {string} priceMin 金额搜索最小值
     * @param {string} recommendStatus 推荐状态：不传该参数获取所有商品；0为一般商品；1为推荐商品
     * @param {string} shopId 获取指定店铺的商品数据，不传获取全部商品；0获取未归类店铺商品；其他数字为指定的店铺编号下的商品
     * @param {string} status -1 全部状态 0 上架 1 下架
     * @param {string} tagsLike 商品标签搜索
     */
    goods: (data: {
        barCode?: string,
        categoryId?: string,
        day?: string,
        hidden?: number,
        k?: string,
        kanjia?: boolean,
        miaosha?: boolean,
        nameLike?: string,
        orderBy?: 'priceUp' | 'priceDown' | 'ordersUp' | 'ordersDown' | 'addedUp' | 'addedDown' | 'nameUp',
        pingtuan?: boolean,
        priceMax?: number,
        priceMin?: number,
        recommendStatus?: 0 | 1,
        shopId?: string,
        status?: -1 | 0 | 1,
        tagsLike?: string,
    } & Pagination) => RequestResult

    /**
     *
     * 商品详情
     * @method GET
     * @param {string} id 商品id
     *
     */
    goodsDetail: (id: string) => RequestResult

    /**
     *
     * 读取商品的限购设置列表
     * @method GET
     * @param {string} goodsId 商品id
     * @param {string} priceId 规格尺寸记录信息的ID
     *
     */
    goodsLimitations: (goodsId: string, priceId?: string) => RequestResult

    /**
     *
     * 获取商品价格
     * @method POST
     * @param {string} goodsId 商品id
     * @param {string} propertyChildIds 选择的规格尺寸信息：如：4:15,2:10,1:4 。多个规格请用英文的逗号分割，4:15 中的 4 获取代表颜色，15 或许代表 土豪金
     *
     */
    goodsPrice: (goodsId: string, propertyChildIds: string) => RequestResult

    /**
     *
     * 读取商品的按天定价数据列表
     * @method GET
     * @param {string} goodsId 商品id
     * @param {string} priceId 规格尺寸记录信息的ID
     *
     */
    goodsPriceDaily: (goodsId: string, priceId?: string) => RequestResult

    /**
     *
     * 获取物流费用
     * @method GET
     * @param {string} templateId 运费模板编号，可通过商品列表、商品详情接口获取
     * @param {number} type 快递方式：0 快递 1 EMS 2 平邮
     * @param {string} cityId 用户城市编号
     * @param {string} districtId 用户区县编号
     * @param {string} provinceId 用户省份编号
     *
     */
    goodsPriceFreight: (data: {
        templateId?: string,
        type?: number,
        cityId?: string,
        districtId?: string,
        provinceId?: string,
    }) => RequestResult

    /**
     *
     * 获取商品的会员折扣
     * @method GET
     * @param {string} goodsId 商品id
     * @param {string} token 登录接口返回的token
     *
     */
    goodsRebate: (token: string, goodsId: string) => RequestResult

    /**
     *
     * 获取商品评价列表
     * @method POST
     * @param {string} goodsId 商品id
     * @param {string} page 获取第几页数据
     * @param {string} pageSize 每页显示多少数据
     *
     */
    goodsReputation: (data: {
        goodsId: string,
    } & Pagination) => RequestResult

    /**
     *
     * 商品收藏列表
     * @method POST
     * @param {string} nameLike 商品标题模糊搜索关键词
     * @param {string} page 获取第几页数据
     * @param {string} pageSize 每页显示多少数据
     * @param {string} token 登录接口返回的token
     *
     */
    goodsFavList: (data: {
        nameLike: string,
    } & Pagination & Token) => RequestResult

    /**
     *
     * 获取购买过的商品列表
     * @method POST
     * @param {string} page 获取第几页数据
     * @param {string} pageSize 每页显示多少数据
     * @param {string} token 登录接口返回的token
     *
     */
    myBuyGoodsHis: (data: Pagination & Token) => RequestResult

    /**
     *
     * 删除商品历史购买记录
     * @method POST
     * @param {string} goodsId 商品id，2个参数任意传一个就行
     * @param {string} id 记录id 2个参数任意传一个就行
     * @param {string} token 登录接口返回的token
     *
     */
    myBuyGoodsHisDelete: (token: string, id?: string, goodsId?: string) => RequestResult

    /**
     *
     * 添加商品收藏
     * @method POST
     * @param {string} goodsId 商品id
     * @param {string} token 登录接口返回的token
     *
     */
    goodsFavPut: (token: string, goodsId: string) => RequestResult

    /**
     *
     * 检测是否已收藏
     * @method GET
     * @param {string} goodsId 商品id
     * @param {string} token 登录接口返回的token
     *
     */
    goodsFavCheck: (token: string, goodsId) => RequestResult

    /**
     *
     * 删除商品收藏
     * @method POST
     * @param {string} goodsId 商品id，2个参数任意传一个就行
     * @param {string} id 记录id 2个参数任意传一个就行
     * @param {string} token 登录接口返回的token
     *
     */
    goodsFavDelete: (token: string, id?: string, goodsId?: string) => RequestResult

    /**
     *
     * 获取可领取优惠券列表
     * @method GET
     * @param {string} refId 优惠券使用对象
     * @param {string} type 优惠券类型
     * @param {string} token 登录接口返回的token
     *
     */
    coupons: (data: {
        refId?: string,
        type?: string,
        token?: string,
    }) => RequestResult

    /**
     *
     * 优惠券规格详情
     * @method GET
     * @param {string} id 	优惠券规则id
     *
     */
    couponDetail: (id: string) => RequestResult

    /**
     *
     * 我的优惠券
     * @method GET
     * @param {string} consumAmount 当前消费金额，传了该参数，将拉取满足使用条件的优惠券
     * @param {string} status 优惠券状态:0 正常 1 失效 2 过期已结束 3 已使用；同时多种状态，请用英文逗号隔开即可
     * @param {string} token 登录接口返回的token
     *
     */
    myCoupons: (data: {
        consumAmount?: string,
        status?: string,
        token: string,
    }) => RequestResult


    /**
     *
     * 获取优惠券合并规则
     * @method GET
     *
     */
    mergeCouponsRules: () => RequestResult

    /**
     *
     * 优惠券合并
     * @method POST
     * @param {string} couponIds 用来合并的优惠券ID，多张用英文逗号分隔
     * @param {string} mergeId 合并规则id
     * @param {string} token 登录接口返回的token
     *
     */
    mergeCoupons: (data: {
        couponIds: string,
        mergeId: string,
        token?: string,
    }) => RequestResult


    /**
     *
     * 领取优惠券
     * @method POST
     * @param {string} detect 如果传了该参数，并且是 true ，则不获取优惠券，而是检测当前用户是否可以获取
     * @param {string} id 优惠券ID
     * @param {string} pwd 优惠券口令
     * @param {string} token 登录接口返回的token
     *
     */
    fetchCoupons: (data: {
        detect: string,
        id: string,
        pwd?: string,
        token: string,
    }) => RequestResult


    /**
     *
     * 赠送优惠券
     * @method POST
     * @param {string} mobile 受赠人手机号码
     * @param {string} id 优惠券ID
     * @param {string} uid 受赠人用户ID
     * @param {string} token 登录接口返回的token
     *
     */
    sendCoupons: (data: {
        mobile?: string,
        id?: string,
        uid?: string,
        token?: string,
    }) => RequestResult

    /**
     *
     * 使用优惠券/红包的动态口令兑换优惠券
     * @method POST
     * @param {string} number 号码
     * @param {string} pwd 密码
     * @param {string} extJsonStr 扩展数据JSON
     * @param {string} token 登录接口返回的token
     *
     */
    exchangeCoupons: (token: string, number: string, pwd: string, extJsonStr?: string) => RequestResult

    /**
     *
     * 获取公告列表
     * @method POST
     * @param {number} page 获取第几页数据
     * @param {number} pageSize 每页显示多少数据
     * @param {string} token 登录接口返回的token
     * @param {string} type 公告自定义类型
     *
     */
    noticeList: (data: {
        type?: string,
    } & Pagination) => RequestResult


    /**
     *
     * 获取公告列表
     * @method GET
     * @param {string} type 公告自定义类型
     *
     */
    noticeLastOne: (type?: string) => RequestResult

    /**
     *
     * 获取公告详情
     * @method GET
     * @param {string} id 	公告id
     *
     */
    noticeDetail: (id: string) => RequestResult

    /**
     *
     * 添加收货地址
     * @method POST
     * @param {string} address	详细地址
     * @param {string} cityId	所属城市编码
     * @param {string} linkMan	联系人
     * @param {string} mobile	手机号码
     * @param {string} provinceId	所属省份编码
     * @param {string} code	邮编
     * @param {string} districtId	所属区县编码
     * @param {string} extJsonStr	扩展属性信息,JSON格式
     * @param {string} idcard	身份证号码，国际件使用
     * @param {boolean} isDefault	是否设置为默认收货地址，true 为设置；false 或者不传该参数为 不设置
     * @param {string} latitude	坐标 纬度
     * @param {string} longitude	坐标 经度
     * @param {string} status	状态：0 为正常 1 为停用
     * @param {string} token	登录接口返回的token
     *
     */
    addAddress: (data: {
        address: string,
        cityId: string,
        linkMan: string,
        mobile: string,
        provinceId: string,
        code?: string,
        districtId?: string,
        extJsonStr?: string,
        idcard?: string,
        isDefault?: boolean,
        latitude?: string,
        longitude?: string,
        status?: 0 | 1,
        token: string,
    }) => RequestResult

    /**
     *
     * 修改收货地址
     * @method POST
     * @param {string} address	详细地址
     * @param {string} cityId	所属城市编码
     * @param {string} linkMan	联系人
     * @param {string} mobile	手机号码
     * @param {string} provinceId	所属省份编码
     * @param {string} code	邮编
     * @param {string} districtId	所属区县编码
     * @param {string} extJsonStr	扩展属性信息,JSON格式
     * @param {string} idcard	身份证号码，国际件使用
     * @param {boolean} isDefault	是否设置为默认收货地址，true 为设置；false 或者不传该参数为 不设置
     * @param {string} latitude	坐标 纬度
     * @param {string} longitude	坐标 经度
     * @param {string} status	状态：0 为正常 1 为停用
     * @param {string} token	登录接口返回的token
     *
     */
    updateAddress: (...args: Parameters<typeof WXAPI.addAddress>) => RequestResult

    /**
     *
     * 删除收货地址
     * @method POST
     * @param {string} id	地址id
     * @param {string} token	登录接口返回的token
     *
     */
    deleteAddress: (token: string, id: string) => RequestResult

    /**
     *
     * 获取所有的收货地址
     * @method GET
     * @param {string} token	登录接口返回的token
     *
     */
    queryAddress: (token: string) => RequestResult

    /**
     *
     * 获取默认收货地址
     * @method GET
     * @param {string} token 登录接口返回的token
     *
     */
    defaultAddress: (token: string) => RequestResult

    /**
     *
     * 收货地址详情
     * @method GET
     * @param {string} id 地址 id
     * @param {string} token 登录接口返回的token
     *
     */
    addressDetail: (token: string, id: string) => RequestResult

    /**
     *
     *  获取拼团设置
     * @method GET
     * @param {string} goodsId 商品id
     *
     */
    pingtuanSet: (goodsId: string) => RequestResult

    /**
     *
     *  获取拼团设置（批量接口）
     * @method GET
     * @param {Array} goodsIdArray 商品id
     *
     */
    pingtuanSets: (goodsIdArray: string[]) => RequestResult

    /**
     *
     * 开团接口
     * @method POST
     * @param {string} goodsId 	商品id
     * @param {string} token 登录接口返回的token
     *
     */
    pingtuanOpen: (token: string, goodsId: string) => RequestResult

    /**
     *
     * 获取所有进行中的团购
     * @method POST
     * @param {string} goodsId 	商品id
     * @param {string} status 	拼团状态
     * @param {number} page 获取第几页数据
     * @param {number} pageSize 每页显示多少数据
     *
     */
    pingtuanList: (data: {
        goodsId: string
        status: number,
    } & Pagination) => RequestResult

    /**
     *
     * 查看某团的所有参与用户
     * @method GET
     * @param {string} tuanId 	团号,请注意不是拼团id，是每个人开团后的团号
     *
     */
    pingtuanJoinUsers: (tuanId: string) => RequestResult

    /**
     *
     * 我的拼团记录
     * @method POST
     * @param {string} goodsId 	商品id
     * @param {string} orderId 	订单id
     * @param {number} page 获取第几页数据
     * @param {number} pageSize 每页显示多少数据
     * @param {string} pingtuanId 拼团id
     * @param {string} tuanId 团号,请注意不是拼团id，是每个人开团后的团号
     *
     */
    pingtuanMyJoined: (data: {
        goodsId?: string,
        orderId?: string,
        pingtuanId?: string,
        tuanId?: string,
    } & Pagination) => RequestResult

    /**
     *
     * 友情链接列表
     * @method POST
     * @param {string} type 类型
     *
     */
    friendlyPartnerList: (type?: string) => RequestResult

    /**
     *
     * 获取我的好友列表
     * @method POST
     * @param {string} dateAddBegin 起始时间筛选，2017-11-22
     * @param {string} dateAddEnd 截止时间筛选，2017-11-22
     * @param {number} page 获取第几页数据
     * @param {number} pageSize 每页显示多少数据
     * @param {number} token 登录接口返回的token
     * @param {number} uids 	好友用户编号
     */
    friendList: (data: {
        uids?: string,
    } & DateQuery & Pagination & Token) => RequestResult

    /**
     *
     * 添加某人为好友
     * @method POST
     * @param {string} token 登录接口返回的token
     * @param {string} uids 好友用户编号
     */
    addFriend: (token: string, uid: string) => RequestResult

    /**
     *
     * 查看好友用户详情
     * @method GET
     * @param {string} token 登录接口返回的token
     * @param {string} uids 好友用户编号
     */
    friendUserDetail: (token: string, uid: string) => RequestResult

    /**
     *
     * 获取视频素材详情
     * @method GET
     * @param {string} videoId 视频编号
     */
    videoDetail: (videoId: string) => RequestResult

    /**
     *
     * 小程序绑定手机号码
     * @method POST
     * @param {string} pwd 	设置登录密码
     * @param {any} encryptedData 微信登录接口返回的 加密用户信息
     * @param {string} iv 小程序api:wx.getShareInfo 获得
     * @param {string} token 登录接口返回的token
     */
    bindMobileWxa: (token: string, encryptedData: string, iv: string, pwd?: string) => RequestResult

    bindMobileSms: (token: string, mobile: string, code: string, pwd?: string) => RequestResult

    userDetail: (token: string) => RequestResult

    userWxinfo: (token: string) => RequestResult

    userAmount: (token: string) => RequestResult

    /**
     *
     * 创建订单[下单]
     * @method POST
     * @param {string} goodsJsonStr 购买的商品、规格尺寸、数量信息的数组，如：[{"goodsId":11,"number":2,"propertyChildIds":"","logisticsType":0, "days": ["2019-07-26", "2019-07-27"]}, {"goodsId":8,"number":3,"propertyChildIds":"2:9","logisticsType":0, "inviter_id":邀请用户ID, "days": ["2019-07-26", "2019-07-27"]}]
     * @param {string} address 收货地址详细地址
     * @param {boolean} autoDeliver 是否自动发货，true 启用，需要开通自动发货插件后方可使用
     * @param {boolean} calculate	true 不实际下单，而是返回价格计算
     * @param {string} cityId	收货地址城市编码
     * @param {string} code	收货地址邮政编码
     * @param {string} couponId	使用的优惠券编号,多张优惠券请用英文的逗号分隔
     * @param {string} dadaLat	达达收货地址的纬度
     * @param {string} dadaLng	达达收货地址的经度
     * @param {string} dadaShopNo	达达商户ID
     * @param {string} deductionScore	用多少积分来抵扣本次交易，请配合后台积分抵扣规则使用
     * @param {string} districtId	收货地址区县编码
     * @param {string} expireMinutes	expireMinutes
     * @param {number} integer (int32)
     * @param {string} extJsonStr	订单扩展属性信息,JSON格式
     * @param {string} idcard	身份证号码【国际件使用】
     * @param {boolean} isCanHx	是否支持核销，true 支持，默认不支持
     * @param {string} kjid	砍价编号，可直接购买砍价商品
     * @param {string} linkMan	收货地址联系人信息
     * @param {string} mobile	收货地址联系人手机号码
     * @param {string} orderPeriod	周期订单参数: {"unit":1,"duration":1,"dateStart":"2020-05-05 11:47:19"}, unit: 0 天 1 月 2 年
     * @param {number} payOnDelivery	1 为货到付款，其他数字为先支付
     * @param {string} peisongType	配送类型，kd 代表快递；zq代表到店自取； keloop 快跑者
     * @param {string} pingtuanOpenId	拼团购买的团号
     * @param {string} provinceId	收货地址省份编码
     * @param {string} remark	下单备注信息
     * @param {string} shopIdZt	自提门店id
     * @param {string} shopNameZt	自提门店名称
     * @param {string} token	登录接口返回的token
     * @param {string} trips	小费金额，用户可自行输入小费金额
     */
    orderCreate: (data: {
        goodsJsonStr: string,
        address?: string,
        autoDeliver?: boolean,
        calculate?: string,
        cityId?: string,
        code?: string,
        couponId?: string,
        dadaLat?: string,
        dadaLng?: string,
        dadaShopNo?: string,
        deductionScore?: string,
        districtId?: string,
        expireMinutes?: string,
        integer?: number,
        extJsonStr?: string,
        idcard?: string,
        isCanHx?: boolean,
        kjid?: string,
        linkMan?: string,
        mobile?: string,
        orderPeriod?: string,
        payOnDelivery?: number,
        peisongType?: 'kd' | 'zq' | 'keloop',
        pingtuanOpenId?: string,
        provinceId?: string,
        remark?: string,
        shopIdZt?: string,
        shopNameZt?: string,
        token?: string,
        trips?: string,
    }) => RequestResult

    /**
     *
     * 订单列表
     * @method POST
     * @param {number} goodReputation 	评价状态：0 差评 1 中评 2 好评
     * @param {boolean} hasRefund true / false ，读取是否有退款的订单
     * @param {string} orderNumber 订单编号，如：OD1703281618955938
     * @param {string} shopId 所属门店ID，用于查询该门店下的订单
     * @param {number} status 订单状态，-1 已关闭 0 待支付 1 已支付待发货 2 已发货待确认 3 确认收货待评价 4 已评价
     * @param {number} statusBatch 状态之间用逗号隔开，-1 已关闭 0 待支付 1 已支付待发货 2 已发货待确认 3 确认收货待评价 4 已评价
     * @param {string} token 登录接口返回的token
     */
    orderList: (data: {
        goodReputation?: 0 | 1 | 2,
        hasRefund?: boolean,
        orderNumber?: string,
        shopId?: string,
        status?: number,
        statusBatch?: number,
    } & Pagination & Token) => RequestResult


    orderDetail: (token: string, id: string, hxNumber?: string) => RequestResult


    orderDelivery: (token: string, orderId: string) => RequestResult

    /**
     *
     * 评价接口
     * @method POST
     * @param {string} postJsonString 格式： {token:"登录接口获取的登录凭证",orderId:"数字订单号，订单接口的id，不是 orderNumber",reputations:[{id:"订单归属的商品列表数据的id字段",reputation:"0 差评 1 中评 2 好评",remark:"评价备注，限200字符", pics: ["1.jpg", "2.jpg"]},{id:"订单归属的商品列表数据的id字段",reputation:"0 差评 1 中评 2 好评",remark:"评价备注，限200字符", pics: ["1.jpg", "2.jpg"]}]}
     */
    orderReputation: (data: {
        postJsonString: string,
    }) => RequestResult


    orderClose: (token: string, orderId: string) => RequestResult

    orderDelete: (token: string, orderId: string) => RequestResult

    orderPay: (token: string, orderId: string) => RequestResult

    orderHX: (hxNumber: string) => RequestResult

    orderStatistics: (token: string) => RequestResult

    orderRefunds: (token: string, orderId: string) => RequestResult

    withDrawApply: (token: string, money: string | number) => RequestResult

    withDrawDetail: (token: string, id: string) => RequestResult

    withDrawLogs: (data: Pagination & Token) => RequestResult

    province: () => RequestResult

    nextRegion: (pid: string) => RequestResult

    /**
     *
     * 用户资金流水
     * @method POST
     * @param {string} postJsonString 格式： {token:"登录接口获取的登录凭证",orderId:"数字订单号，订单接口的id，不是 orderNumber",reputations:[{id:"订单归属的商品列表数据的id字段",reputation:"0 差评 1 中评 2 好评",remark:"评价备注，限200字符", pics: ["1.jpg", "2.jpg"]},{id:"订单归属的商品列表数据的id字段",reputation:"0 差评 1 中评 2 好评",remark:"评价备注，限200字符", pics: ["1.jpg", "2.jpg"]}]}
     * @param {number} behavior	0 收入； 1 支出
     * @param {string} dateAddBegin	支付时间起,格式 2018-05-16
     * @param {string} dateAddEnd	支付时间起,格式 2018-05-16
     * @param {string} orderId	业务订单号
     * @param {string} page	获取第几页数据
     * @param {string} pageSize	每页显示多少数据
     * @param {string} token	登录接口返回的token
     * @param {number} type	交易类型 0 充值 11 提现申请 12 提现失败 1 提现成功 2 支付订单 3 退款 4支付预约报名费 5 知识付费 6分销返佣 7 分享商品奖励； 8 优惠买单； 100 押金；101 押金退还； 110 购买会员； 120 货款收入； 130 分润收入； 140 积分兑换
     * @param {string} types	交易类型，同时获取多种类型请用英文逗号分隔
     *
     */
    cashLogs: (data: {
        postJsonString?: string
        behavior?: number
        orderId?: string
        type?: number
        types?: string
    } & DateQuery & Pagination & Token) => RequestResult

    /**
     *
     * 用户资金流水
     * @method POST
     * @param {string} postJsonString 格式： {token:"登录接口获取的登录凭证",orderId:"数字订单号，订单接口的id，不是 orderNumber",reputations:[{id:"订单归属的商品列表数据的id字段",reputation:"0 差评 1 中评 2 好评",remark:"评价备注，限200字符", pics: ["1.jpg", "2.jpg"]},{id:"订单归属的商品列表数据的id字段",reputation:"0 差评 1 中评 2 好评",remark:"评价备注，限200字符", pics: ["1.jpg", "2.jpg"]}]}
     * @param {number} behavior	0 收入； 1 支出
     * @param {string} dateAddBegin	支付时间起,格式 2018-05-16
     * @param {string} dateAddEnd	支付时间起,格式 2018-05-16
     * @param {string} orderId	业务订单号
     * @param {string} page	获取第几页数据
     * @param {string} pageSize	每页显示多少数据
     * @param {string} token	登录接口返回的token
     * @param {number} type	交易类型 0 充值 11 提现申请 12 提现失败 1 提现成功 2 支付订单 3 退款 4支付预约报名费 5 知识付费 6分销返佣 7 分享商品奖励； 8 优惠买单； 100 押金；101 押金退还； 110 购买会员； 120 货款收入； 130 分润收入； 140 积分兑换
     * @param {string} types	交易类型，同时获取多种类型请用英文逗号分隔
     *
     */
    cashLogsV2: (data: {
        postJsonString?: string
        behavior?: number
        orderId?: string
        type?: number
        types?: string
    } & DateQuery & Pagination & Token) => RequestResult

    payLogs: (data: Pagination & Token) => RequestResult

    rechargeSendRules: () => RequestResult

    payBillDiscounts: () => RequestResult

    payBill: (token: string, money: number | string) => RequestResult

    vipLevel: () => RequestResult

    fxApply: (token: string, name: string, mobile: string) => RequestResult

    fxApplyProgress: (token: string) => RequestResult

    /**
     *
     * 团队管理
     * @method POST
     * @param {string} dateAddBegin	支付时间起,格式 2018-05-16
     * @param {string} dateAddEnd	支付时间起,格式 2018-05-16
     * @param {number} level 直接发展为1，间接发展为2
     * @param {string} page	获取第几页数据
     * @param {string} pageSize	每页显示多少数据
     * @param {string} token登录接口返回的token
     * @param {number} uids	团队成员用户id
     *
     */
    fxMembers: (data: {
        level?: 1 | 2,
        uids?: string,
    } & DateQuery & Pagination & Token) => RequestResult

    /**
     *
     * 佣金明细
     * @method POST
     * @param {string} dateAddBegin	支付时间起,格式 2018-05-16
     * @param {string} dateAddEnd	支付时间起,格式 2018-05-16
     * @param {boolean} isSettlement 	true / false 是否结算
     * @param {number} level 分销级别，1，2，3
     * @param {number} unit 0 现金返佣 1 积分返佣
     * @param {string} page	获取第几页数据
     * @param {string} pageSize	每页显示多少数据
     * @param {string} token登录接口返回的token
     * @param {number} uids	团队成员用户id
     *
     */
    fxCommisionLog: (data: {
        isSettlement?: boolean,
        level?: number,
        unit?: 0 | 1,
        uids?: string,
    } & DateQuery & Pagination & Token) => RequestResult

    /**
     *
     * 无限生成小程序码
     * @method POST
     * @param {string} scene	小程序码参数，具体详见小程序文档
     * @param {boolean} autoColor	自动配置线条颜色，默认 false
     * @param {string} expireHours	多少小时后自动删除该图片，不传该参数则不删除
     * @param {boolean} is_hyaline	是否需要透明底色，为 true 时，生成透明底色的小程序，默认 false
     * @param {string} page	例如 "pages/index/index" ,根路径前不要填加'/',不能携带参数（参数请放在scene字段里），如果不填写这个字段，默认跳主页面
     * @param {string} postJsonString	线条颜色，auto_color 为 false 时生效，使用 rgb 设置颜色 例如 {"r":"xxx","g":"xxx","b":"xxx"}
     * @param {string} width	二维码的宽度，默认430
     *
     */
    wxaQrcode: (data: {
        scene: string,
        autoColor?: boolean,
        expireHours?: string,
        is_hyaline?: boolean,
        page?: string,
        postJsonString?: string,
        width?: string,
    }) => RequestResult

    uploadFile: (token: string, tempFilePath: string, expireHours?: string) => RequestResult

    uploadFileFromUrl: (remoteFileUrl?: string, ext?: string) => RequestResult

    uploadFileList: (path?: string) => RequestResult

    /**
     *
     * 无限生成小程序码
     * @method POST
     * @param {number} amount 退款、退货填写金额；换货请传0
     * @param {number} logisticsStatus	0 未收到货 1 已收到货
     * @param {string} orderId	订单ID
     * @param {string} reason 退换货原因
     * @param {number} type	0 仅退款 1 退款退货 2 换货
     * @param {string} pic 可提交多张截图的图片地址
     * @param {string} remark 退换货描述
     *
     */
    refundApply: (data: {
        amount: number,
        logisticsStatus: 0 | 1,
        orderId: string,
        reason: string,
        type: 0 | 1 | 2,
        pic?: string,
        remark?: string,
    }) => RequestResult

    refundApplyDetail: (token: string, orderId: string) => RequestResult

    refundApplyCancel: (token: string, orderId: string) => RequestResult

    cmsCategories: () => RequestResult

    cmsCategoryDetail: (id: string) => RequestResult

    cmsArticles: (data: {
        categoryId?: string,
        dateUpdateBegin?: string,
        dateUpdateEnd?: string,
        id?: string,
        isRecommend?: boolean,
        keywordsLike?: string,
        orderBy?: string,
        tagsLike?: string,
        titleLike?: string,
        token?: string,
    } & Pagination & DateQuery) => RequestResult

    cmsArticleUsefulLogs: (data: {
        id: string,
    } & Pagination) => RequestResult

    cmsArticleDetail: (id: string) => RequestResult
    cmsArticlePreNext: (id: string) => RequestResult

    cmsArticleCreate: (data: {
        categoryId?: string,
        content?: string,
        descript?: string,
        title?: string,
        author?: string,
        id?: string,
        income?: string,
        keywords?: string,
        paixu?: string,
        pic?: string,
        postJsonString?: string,
        tags?: string,
        token?: string,
    }) => RequestResult

    cmsArticleDelete: (token: string, id: string) => RequestResult

    cmsArticleUseless: (data: {
        id: string,
        isCheck?: boolean,
        isUseful?: boolean
        token?: string,
    }) => RequestResult

    cmsPage: (key: string) => RequestResult

    cmsTags: () => RequestResult

    invoiceList: (data: {
        token?: string,
    } & Pagination) => RequestResult

    invoiceApply: (data: {
        amount?: number,
        comName?: string,
        consumption?: string,
        extJsonStr?: string,
        orderId?: string,
        remark?: string,
        tfn?: string,
    }) => RequestResult

    invoiceDetail: (token: string, id: string) => RequestResult

    depositList: (data: {
        status?: 0 | 1 | 2
    } & Pagination & Token) => RequestResult

    payDeposit: (data: {
        amount: number,
        extJsonStr?: string,
        refCode?: string,
        remark?: string,
    } & Token) => RequestResult

    depositInfo: (token: string, id: string) => RequestResult

    depositBackApply: (token: string, id: string) => RequestResult

    fetchShops: (data: {
        cityId?: string,
        curlatitude?: string,
        curlongitude?: string,
        nameLike?: string,
        districtId?: string,
        provinceId?: string,
        type?: string,
    } & Pagination) => RequestResult

    fetchMyShops: (token: string) => RequestResult

    shopSubdetail: (id: string) => RequestResult

    shopSubApply: (data: {
        address: string,
        cityId: string,
        districtId: string,
        latitude: string,
        longitude: string,
        name: string,
        provinceId: string,
        status: string,
        activity?: string,
        characteristic?: string,
        expressType?: string,
        extJsonStr?: string,
        introduce?: string,
        linkPhone?: string,
        number?: string,
        paixu?: string,
        pic?: string,
        token?: string,
        type?: string,
    }) => RequestResult

    addComment: (data: {
        content?: string,
        extJsonStr?: string,
        pid?: string,
        refId?: string,
        type?: string,
        token?: string,
    }) => RequestResult

    commentList: (data: {
        isReply?: boolean,
        pid?: string,
        refId?: string,
        type?: string,
        st?: string,
        status?: 0 | 1 | 2,
        uid?: string,
        token?: string,
    } & Pagination) => RequestResult

    modifyUserInfo: (data: {
        avatarUrl?: string,
        city?: string,
        nick?: string,
        birthday?: string,
        extJsonStr?: string,
        gender?: string,
        token: string,
    }) => RequestResult

    modifyUserPassword: (token: string, pwdOld: string, pwdNew: string) => RequestResult

    uniqueId: (type?: string) => RequestResult

    queryBarcode: (barcode?: string) => RequestResult

    luckyInfo: (id: string) => RequestResult

    luckyInfoJoin: (id: string, token: string) => RequestResult

    luckyInfoJoinMy: (id: string, token: string) => RequestResult

    luckyInfoJoinLogs: (data: {
        lid: string,
        token?: string,
    } & Pagination) => RequestResult

    jsonList: (data: {
        id?: string,
        refId?: string,
        type?: string,
    } & Pagination) => RequestResult

    jsonSet: (data: {
        content: string,
        id?: string,
        refId?: string,
        type?: string,
    }) => RequestResult

    jsonDelete: (token: string, id: string) => RequestResult

    graphValidateCodeUrl: (key?: number | string) => RequestResult

    graphValidateCodeCheck: (code: string, key?: number | string) => RequestResult

    shortUrl: (url?: string) => RequestResult

    smsValidateCode: (mobile: string, key?: string, picCode?: string) => RequestResult

    smsValidateCodeCheck: (mobile: string, code: string) => RequestResult

    mailValidateCode: (mail: string) => RequestResult

    mailValidateCodeCheck: (mail: string, code: string) => RequestResult

    mapDistance: (lat1: string | number, lng1: string | number, lat2: string | number, lng2: string | number) => RequestResult

    mapQQAddress: (location?: string, coord_type?: string) => RequestResult

    mapQQSearch: (data: {
        boundary: string,
        keyword: string,
    } & Pagination) => RequestResult

    virtualTraderList: (data: {
        status?: 0 | 1,
    } & Pagination) => RequestResult

    virtualTraderDetail: (token: string, id: string) => RequestResult

    virtualTraderBuy: (token: string, id: string) => RequestResult

    virtualTraderMyBuyLogs: (data: Pagination & Token) => RequestResult

    queuingTypes: (status?: string) => RequestResult

    queuingGet: (token: string, typeId: string, mobile?: string) => RequestResult

    queuingMy: (token: string, typeId?: string, status?: string) => RequestResult

    idcardCheck: (token: string, name: string, idCardNo: string) => RequestResult

    loginout: (token: string) => RequestResult

    userLevelList: (data: Pagination) => RequestResult

    userLevelDetail: (levelId: string) => RequestResult

    userLevelPrices: (levelId: string) => RequestResult

    userLevelBuy: (token: string, priceId: string, isAutoRenew: boolean, remark?: string) => RequestResult

    userLevelBuyLogs: (data: Pagination & Token) => RequestResult

    messageList: (data: {
        isRead?: boolean,
        mod?: 0 | 1,
        source?: 0 | 1 | 2,
        token: string,
        type?: string,
    } & Pagination) => RequestResult

    messageRead: (token: string, id: string) => RequestResult

    messageDelete: (token: string, id: string) => RequestResult

    bindOpenid: (token: string, code: string) => RequestResult

    encryptedData: (code: string, encryptedData: string, iv: string) => RequestResult

    scoreDeductionRules: (type?: string) => RequestResult

    voteItems: (data: {
        status?: 0 | 1,
    } & Pagination) => RequestResult

    voteItemDetail: (id: string) => RequestResult

    vote: (token: string, voteId: string, items: string[], remark: string) => RequestResult

    myVote: (token: string, voteId: string) => RequestResult

    voteLogs: (data: {
        voteId: string,
    } & Pagination & Token) => RequestResult

    yuyueItems: (data: {
        status?: 0 | 2,
    } & Pagination & Token) => RequestResult

    yuyueItemDetail: (id: string) => RequestResult

    yuyueJoin: (data: {
        yuyueId: string,
        extJsonStr?: string,
        remark?: string,
        teamId?: string,
        teamName?: string,
    } & Token) => RequestResult

    yuyueJoinPay: (token: string, joinId: string) => RequestResult

    yuyueJoinUpdate: (token: string, joinId: string, extJsonStr: string) => RequestResult

    yuyueMyJoinInfo: (token: string, joinId: string) => RequestResult

    yuyueMyJoinLogs: (data: Pagination & Token) => RequestResult

    yuyueTeams: (data: {
        yuyueId: string,
        token?: string,
    } & Pagination) => RequestResult

    yuyueTeamDetail: (teamId: string) => RequestResult

    yuyueTeamMembers: (data: {
        teamId: string,
        token?: string,
    } & Pagination) => RequestResult

    yuyueTeamDeleteMember: (token: string, joinId: string) => RequestResult

    /**
     *
     * 用户注册[邮箱注册]
     * @method POST
     * @param {string} code 邮件验证码
     * @param {string} email 电子邮件
     * @param {string} pwd 密码
     * @param {boolean} autoLogin true / false 是否在注册后自动完成登录【对于之前已注册的用户，自动完成登录】
     * @param {string} city 所属城市
     * @param {string} nick 昵称
     * @param {string} postJsonString 用户的扩展数据，必须是 json 格式
     * @param {string} province 所属省份
     * @param {string} referrer 邀请人的用户id
     */
    register_email: (data: {
        code: string,
        email: string,
        pwd: string,
        autoLogin?: boolean,
        city?: string,
        nick?: string,
        postJsonString?: string,
        province?: string,
        referrer?: string,
    }) => RequestResult

    /**
     *
     * 用户登录[邮箱登录]
     * @method POST
     * @param {string} email 登录接口返回的token
     * @param {string} pwd 登录密码
     * @param {string} deviceId 设备 id
     * @param {string} deviceName 登录设备名称， 自定义即可
     */
    login_email: (data: {
        email: string,
        pwd: string,
        deviceId?: string,
        deviceName?: string,
    }) => RequestResult

    bindEmail: (token: string, email: string, code: string, pwd?: string) => RequestResult

    siteStatistics: () => RequestResult

    goodsDynamic: (type: any) => RequestResult

    fetchSubDomainByWxappAppid: (appid: string) => RequestResult

    cmsArticleFavPut: (token: string, newsId: string) => RequestResult

    cmsArticleFavCheck: (token: string, newsId: string) => RequestResult

    cmsArticleFavList: (data: {
        titleLike?: string
    } & Pagination & Token) => RequestResult

    cmsArticleFavDeleteById: (token: string, id: string) => RequestResult

    cmsArticleFavDeleteByNewsId: (token: string, newsId: string) => RequestResult

    shippingCarInfo: (token: string) => RequestResult

    shippingCarInfoAddItem: (token: string, goodsId: string, number: number, sku: string) => RequestResult

    shippingCarInfoModifyNumber: (token: string, key: string, number: number) => RequestResult

    shippingCarInfoRemoveItem: (token: string, key: string) => RequestResult

    shippingCarInfoRemoveAll: (token: string) => RequestResult

    growthLogs: (data: {
        behavior?: 0 | 1,
        remark?: string,
        type?: number,
    } & DateQuery & Pagination & Token) => RequestResult

    exchangeScoreToGrowth: (token: string, deductionScore: any) => RequestResult

    wxaMpLiveRooms: () => RequestResult

    wxaMpLiveRoomHisVedios: (roomId: string) => RequestResult
}

declare var WXAPI: WXAPI
export default WXAPI
