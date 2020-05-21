type Request = (url: string, needSubDomain: boolean, method: 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT', data: any) => Promise<any>

type RequestResult = ReturnType<Request>

declare interface WXAPI {
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
        dateAddBegin?: string,
        dateAddEnd?: string,
        page?: number,
        pageSize?: number,
        token: string,
    }) => RequestResult

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
        dateAddBegin?: string,
        dateAddEnd?: string,
        page?: number,
        pageSize?: number,
        remark?: string,
        type?: 0 | 1 | 2 | 3 | 4 | 5 | 6,
        token: string,
    }) => RequestResult

    /**
     *
     * 小程序分享到微信群赠送积分
     * @method POST
     * @param {string} code 小程序登录时候获得的code临时凭证
     * @param {string} referrer 分享人的用户id
     * @param {any} encryptedData 截止时间筛选，2017-11-22
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
     * @param {string} kjid 砍价设置ID
     * @param {string} token 登录接口返回的token
     */
    kanjiaJoin: (token: string, kjid: string) => RequestResult

    /**
     *
     * 砍价详情
     * @method GET
     * @param {string} kjid 砍价设置ID
     * @param {string} joiner 参与者ID
     */
    kanjiaDetail: (kjid: string, joiner: string) => RequestResult

    /**
     *
     * 帮人砍一刀
     * @method POST
     * @param {string} token 登录接口返回的token
     * @param {string} kjid 砍价设置ID
     * @param {string} joiner 砍价参与用户ID
     * @param {string} remark 砍价留言，选填项
     */
    kanjiaHelp: (token: string, kjid: string, joiner: string, remark?: string) => RequestResult
}

declare var WXAPI: WXAPI
export default WXAPI
