import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
//let access_token = this.$store.getters.access_token;
import Cookies from 'js-cookie';

//console.log("bearer "+ Cookies.get('ACCESS_TOKEN'))
// 创建axios实例
const service = axios.create({
  // baseURL: window._Host.BASE_API, // api的base_url
  timeout: 60000 ,                 // 请求超时时间
//  headers: {"Authorization": "bearer "+ Cookies.get('ACCESS_TOKEN') }
});
// request拦截器
service.interceptors.request.use(config => {
    let access_token = store.getters.access_token;
    if(config.url.replace(/[^?]/g,"").length>0){    //判断链接是否有参数
        if (window.location.href.indexOf('localhost') >= 0) {
            if (config.headers && config.headers.login) {
                config.url =  window._Host.LOGIN_API + window._Host.LOGIN_CONTEXT + config.url
            } else {
                config.url =  window._Host.BASE_API + window._Host.BASE_CONTEXT + config.url + '&access_token=' + access_token
            }
            // config.url = config.url + '&access_token=' + access_token//健全系统安全
        } else {
            if (config.headers && config.headers.login) {
                config.url = window._Host.LOGIN_CONTEXT + config.url //健全系统安全
            } else {
                config.url = window._Host.BASE_CONTEXT + config.url + '&access_token=' + access_token//健全系统安全
            }
        }
    }else{
        if (window.location.href.indexOf('localhost') >= 0) {
            if (config.headers && config.headers.login) {
                config.url =  window._Host.LOGIN_API + window._Host.LOGIN_CONTEXT + config.url
            } else {
                config.url =  window._Host.BASE_API + window._Host.BASE_CONTEXT + config.url + '?access_token=' + access_token
            }
            // config.url = config.url + '?access_token=' + access_token//健全系统安全
        }else {
            if (config.headers && config.headers.login) {
                config.url = window._Host.LOGIN_CONTEXT + config.url //健全系统安全
            } else {
                config.url = window._Host.BASE_CONTEXT + config.url  + '?access_token=' + access_token//健全系统安全
            }
            // config.url = window._Host.apis + config.url + '?access_token=' + access_token//健全系统安全
        }
    }
  return config;
}, error => {
  // Do something with request error
  console.log(error); // for debug
  Promise.reject(error);
});

// respone拦截器
service.interceptors.response.use(
    //response => response,
/**
 * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
 * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
 */
    response =>{
        const res = response.data;
        if(res.code.toString() !== '200'){
            Message({
                message:res.message,
                type: 'error',
                duration: 5 * 1000,
                dangerouslyUseHTMLString:true
            });
            //return Promise.reject('error');
            return response;
        }else{
            return response;
        }
    },
//  const res = response.data;
//     if (res.code !== 20000) {
//       Message({
//         message: res.message,
//         type: 'error',
//         duration: 5 * 1000
//       });
//       // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
//       if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
//         MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
//           confirmButtonText: '重新登录',
//           cancelButtonText: '取消',
//           type: 'warning'
//         }).then(() => {
//           store.dispatch('FedLogOut').then(() => {
//             location.reload();// 为了重新实例化vue-router对象 避免bug
//           });
//         })
//       }
//       return Promise.reject('error');
//     } else {
//       return response.data;
//     }
  error => {
    console.log('err' + error);// for debug
      var message = "请求超时";
      if(error.response) {
          const res = error.response.data;
          if(res.message!==null && res.message !== "") {
              message = res.message;
          }
      }
        Message({
          message: message,
          type: 'error',
          duration: 5 * 1000,
          dangerouslyUseHTMLString:true
        });
      return {status: false, data: { status: false}};
    //return Promise.reject(error);
  }
);
//service.defaults.headers.common['Authorization'] = "bearer "+ Cookies.get('ACCESS_TOKEN');
export default service;
