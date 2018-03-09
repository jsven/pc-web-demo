import fetch from '@/utils/fetch'
import axios from 'axios' // 引入axios
import store from '@/store'

export function login (username, password) {
  let loginUrl = window.location.href.indexOf('localhost') >= 0 ? window._Host.LOGIN_API + window._Host.LOGIN_CONTEXT + '/sec/oauth/token' : window._Host.LOGIN_CONTEXT + '/sec/oauth/token'
  return axios({
    method: 'POST',
    url: loginUrl,
    headers: {
      'Authorization': 'Basic ' + btoa('clientapp' + ':' + '123456'),
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: 'username=' + username + '&password=' + password + '&grant_type=password'
  })
}

export function getInfo () {
  return axios({
    method: 'POST',
    url: process.env.GET_INFO + '/system/sysUser/getUserInfo' + '?access_token=' + store.getters.access_token
  })
}

export function logout () {
  return fetch({
    url: '/user/logout',
    method: 'post'
  })
}

export function verification (res) {
  return axios({
    url: 'http://192.168.185.237:10019/sec/verify/verification',
    method: 'post',
    data: res
  })
}

/* 数字字典 */

export function loadDictCache () {
  return fetch({
    method: 'GET',
    url: '/system/home/loadDictCache'
  })
}

export function loadOrgCache () {
  return fetch({
    method: 'GET',
    url: '/system/home/loadOrgCache'
  })
}
export function load () {
  return fetch({
    method: 'GET',
    url: '/system/home/load'
  })
}
