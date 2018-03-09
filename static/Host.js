/**
 * describe 本地开发的服务器配置文件
 * */
var host = [
  // 开发环境
  {
    LOGIN_CONTEXT: '',
    BASE_CONTEXT: '/apis',
    NODE_ENV: '"development"',
    // 登录
    LOGIN_API: 'http://192.168.87.211:10019',
    // AJAX接口
    BASE_API: 'http://192.168.87.211:10020'
  },
  // 测试环境
  {
    LOGIN_CONTEXT: '',
    BASE_CONTEXT: '/apis',
    NODE_ENV: '"development"',
    // 登录
    LOGIN_API: 'http://192.168.87.211:10019',
    // AJAX接口
    BASE_API: 'http://192.168.87.211:10020'
  },
  // UAT环境
  {
    LOGIN_CONTEXT: '',
    BASE_CONTEXT: '',
    NODE_ENV: '"development"',
    // 登录
    LOGIN_API: 'http://uat.yjx.chelizitech.com:10019',
    // AJAX接口
    BASE_API: 'http://uat.yjx.chelizitech.com:10020'
  },
  // 生产环境
  {
    LOGIN_CONTEXT: '',
    BASE_CONTEXT: '/apis',
    NODE_ENV: '"development"',
    // 登录
    LOGIN_API: 'http://192.168.87.211:10019',
    // AJAX接口
    BASE_API: 'http://192.168.87.211:10020'
  }
]

var _Host = host[2]
console.log(_Host)
