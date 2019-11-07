# 功能介绍

微信小程序接口工具包，无需服务器，无需开发后台，开箱即用，轻松开发小程序

交流 QQ 群: 629639122

欢迎大家进群交流，文档持续更新中...

# 平台支持

* [微信小程序开发](https://github.com/gooking/apifm-wxapi)
* [web/h5 网站开发](https://github.com/gooking/apifm-webapi)
* [Flutter 开发](https://github.com/gooking/apifm-flutter)

# 使用方法

## 安装

```
npm install apifm-wxapi
```

*如果你的项目还不支持 npm (检查根目录下有没有 package.json 文件)，请先初始化：*

```
npm init
```

## 构建 npm 模块

小程序安装的 npm 模块，还不能直接使用，你需要在开发工具： “工具” --> “构建 npm” ，提示构建成功后，才能使用！

## 小程序调用

1. js文件头部引入插件：

    ```
    const WXAPI = require('apifm-wxapi')
    WXAPI.init('gooking')
    ```

2. js文件直接调用方法：

    ```
    WXAPI.banners().then(res => {
      if (res.code == 0) {
        this.setData({
          banners: res.data
        })
      }
    })
    ```

*上述例子完成了读取后台的 banner 轮播图片的数据，后台发布轮播图，小程序端直接这样简单调用即可~*

# 返回值说明

WXAPI 方法返回数据主要包含 3 个内容： 

1. code 错误码，0 代表操作重构，其他数字均表示错误，具体错误描述请查看 msg；
2. msg 如果上面的code不为0，那么 msg 将会返回具体的错误说明描述
3. data 字段保存了 code 为0 时候的数据，一起你需要的数据，都保存在 data 中返回给你

# 相关资源

[「5分钟使用教程」](https://www.yuque.com/apifm/doc/mdldsd)
[「Demo程序下载」](https://github.com/gooking/apifm-wxapi-demo)
[「功能说明文档」](instructions.md)
[「api接口文档」](https://api.it120.cc/doc.html)

# TA们在用

| 天使童装| 舔果果小铺 | 面馆风格小程序 | AI名片 |
| :------:| :------: | :------: | :------: |
| <img src="https://cdn.it120.cc/apifactory/2019/06/28/a8304003-3218-4a47-95cf-84d82ebdc07b.jpg" width="200px"> | <img src="https://cdn.it120.cc/apifactory/2018/04/01/b7b8f5a0fcfc72454ade8510ab929717.jpg" width="200px"> | <img src="https://cdn.it120.cc/apifactory/2019/03/29/9e30cfe31eabcd218eb9c434f17e9295.jpg" width="200px"> | <img src="https://cdn.it120.cc/apifactory/2018/12/18/c2324da4eea91602f385db5b523b13ca.jpg" width="200px"> | 
| [开源地址](https://github.com/EastWorld/wechat-app-mall) | [开源地址](hhttps://github.com/walcer/TianguoguoXiaopu) | [开源地址](https://gitee.com/javazj/noodle_shop_procedures) | [开源地址](https://github.com/gooking/visitingCard) |

&nbsp;

| fire-shop-lite| 培训机构 | 面馆风格小程序 | AI名片 |
| :------:| :------: | :------: | :------: |
| <img src="https://camo.githubusercontent.com/d7c5eecd41942b4906399345bcdbb0d0dd336931/68747470733a2f2f626f782e6b616e636c6f75642e636e2f33303034323134376638393839316533336230316264646664323032393639305f323538783235382e6a7067" width="200px"> | <img src="https://github.com/fukcup/lofter/raw/master/img/wecode.jpg" width="200px"> | <img src="https://cdn.it120.cc/apifactory/2019/03/29/9e30cfe31eabcd218eb9c434f17e9295.jpg" width="200px"> | <img src="https://cdn.it120.cc/apifactory/2018/12/18/c2324da4eea91602f385db5b523b13ca.jpg" width="200px"> | 
| [开源地址](https://github.com/thundersword/fire-shop-lite) | [开源地址](https://github.com/fukcup/lofter) | [开源地址](https://gitee.com/javazj/noodle_shop_procedures) | [开源地址](https://github.com/gooking/visitingCard) |

# 联系作者

| ➕微信 | ➕支付宝 | ➕QQ |
| :------: | :------: | :------: |
| <img src="https://cdn.it120.cc/apifactory/2019/07/03/a86f7e46-1dbc-42fe-9495-65403659671e.jpeg" width="200px"> | <img src="https://cdn.it120.cc/apifactory/2019/07/03/fda59aeb-4943-4379-93bb-92856740bd6a.jpeg" width="200px"> | <img src="https://cdn.it120.cc/apifactory/2019/07/07/d420e29b-872e-4147-b57d-0aa988cd4853.png" width="200px"> |

# 授权协议

[MIT License](LICENSE)