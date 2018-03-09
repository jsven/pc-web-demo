# wb

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

├── build                      // 构建相关
├── config                     // 配置相关
├── src                        // 源代码
│   ├── api                    // 所有请求
│   ├── assets                 // 图片 字体等静态资源
│   ├── components             // 全局公用组件
│   ├── filtres                // 全局filter
│   ├── router                 // 路由
│   ├── store                  // 全局store管理
│   ├── styles                 // 全局样式
│   ├── utils                  // 全局公用方法
│   ├── view                   // view
│   ├── App.vue                //
│   └── main.js                // 程序主入口
│   └── permission.js          // 路由过滤器 包括动态路由注册
├── static                     // 第三方不打包资源
│   ├── region                 // 城市级联数据
│   ├── theme                  // 主题样式
│   ├── Host.js                // 后台服务器配置，ajax服务器，仅仅适用于本地开发。
├── .babelrc                   // babel-loader 配置  ES语法版本转换
├── eslintrc.js                // eslint 配置项 代码检测
├── .gitignore                 // git 忽略项
├── index.html                 // html模板，主入口main.js加载的所有东西 默认会被webpack打包到这个html中来
└── package.json               // package.json

########## 示例 ##########

    本地存储localStorage的封装
    http://geek.csdn.net/news/detail/62484  //API地址
    let localStorage = require('storejs');
    localStorage.set('nick',data) //设置缓存
    localStorage("nick")    //获取缓存

##########################################




























