/**
 * describe 本地开发的服务器配置文件
 * */
var _Host = [
  {
    LOGIN_CONTEXT: '',
    BASE_CONTEXT: '/apis',
    NODE_ENV: '"development"',
    // 登录
    LOGIN_API: 'http://192.168.87.211:10019',
    // AJAX接口
    BASE_API: 'http://192.168.87.211:10020'
  },
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

var host = _Host[0]
console.log(host)
