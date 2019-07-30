# apifm-wxapi

微信小程序接口工具包，无需服务器，无需开发后台，开箱即用，轻松开发小程序

交流 QQ 群: 629639122

欢迎大家进群交流，文档持续更新中...

## TA们都在用

| 天使童装| 舔果果小铺 | 面馆风格小程序 | AI名片 |
| :------:| :------: | :------: | :------: |
| <img src="https://cdn.it120.cc/apifactory/2019/06/28/a8304003-3218-4a47-95cf-84d82ebdc07b.jpg" width="200px"> | <img src="https://cdn.it120.cc/apifactory/2018/04/01/b7b8f5a0fcfc72454ade8510ab929717.jpg" width="200px"> | <img src="https://cdn.it120.cc/apifactory/2019/03/29/9e30cfe31eabcd218eb9c434f17e9295.jpg" width="200px"> | <img src="https://cdn.it120.cc/apifactory/2018/12/18/c2324da4eea91602f385db5b523b13ca.jpg" width="200px"> | 
| [开源地址](https://github.com/EastWorld/wechat-app-mall) | [开源地址](hhttps://github.com/walcer/TianguoguoXiaopu) | [开源地址](https://gitee.com/javazj/noodle_shop_procedures) | [开源地址](https://github.com/gooking/visitingCard) |

&nbsp;

| fire-shop-lite| 培训机构 | 面馆风格小程序 | AI名片 |
| :------:| :------: | :------: | :------: |
| <img src="https://camo.githubusercontent.com/d7c5eecd41942b4906399345bcdbb0d0dd336931/68747470733a2f2f626f782e6b616e636c6f75642e636e2f33303034323134376638393839316533336230316264646664323032393639305f323538783235382e6a7067" width="200px"> | <img src="https://github.com/fukcup/lofter/raw/master/img/wecode.jpg" width="200px"> | <img src="https://cdn.it120.cc/apifactory/2019/03/29/9e30cfe31eabcd218eb9c434f17e9295.jpg" width="200px"> | <img src="https://cdn.it120.cc/apifactory/2018/12/18/c2324da4eea91602f385db5b523b13ca.jpg" width="200px"> | 
| [开源地址](https://github.com/thundersword/fire-shop-lite) | [开源地址](https://github.com/fukcup/lofter) | [开源地址](https://gitee.com/javazj/noodle_shop_procedures) | [开源地址](https://github.com/gooking/visitingCard) |

## 联系作者

| ➕微信 | ➕支付宝 | ➕QQ |
| :------: | :------: | :------: |
| <img src="https://cdn.it120.cc/apifactory/2019/07/03/a86f7e46-1dbc-42fe-9495-65403659671e.jpeg" width="200px"> | <img src="https://cdn.it120.cc/apifactory/2019/07/03/fda59aeb-4943-4379-93bb-92856740bd6a.jpeg" width="200px"> | <img src="https://cdn.it120.cc/apifactory/2019/07/07/d420e29b-872e-4147-b57d-0aa988cd4853.png" width="200px"> |

## 使用方法

1. 免费注册开通后台管理账号并获得api接口权限；
   > [免费开通后台账号](https://www.it120.cc/)

2. 在你的小程序目录下安装 apifm-wxapi 模块；
   > npm install apifm-wxapi

3. 登录你的[小程序后台](https://mp.weixin.qq.com)，[设置小程序合法服务器域名](https://www.it120.cc/info/faq/10469)，修改后需要重启小程序开发工具才能生效

4. 在您需要的地方引用工具类

   > const WXAPI = require('apifm-wxapi')

   > WXAPI.init('您的专属域名')

   > // 专属域名登录你的后台首页就可以看到

5. 根据下面的文档调用接口即可

## 调用示例

> 调用：

```java
WXAPI.queryMobileLocation({ mobile: '13500000000' }).then(res => {
    console.log('接口成功返回:', res)
}).catch(e => {
    console.error('接口调用异常:', e)
})
```

> 返回：

```java
{
  "code": 0,
  "data": {
    "areaCode": "020",
    "cardType": "GSM",
    "cityName": "广州",
    "code": 1350000,
    "id": 60113,
    "postCode": "510000",
    "province": "广东",
    "segmentName": "中国移动"
  },
  "msg": "success"
}
```

## 参数说明

[「功能说明文档」](instructions.md)
[「api接口文档」](https://api.it120.cc/doc.html)