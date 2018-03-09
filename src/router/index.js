import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/index'
import fourOne from '@/views/error/401'
import fourFour from '@/views/error/404'
import dashIndex from '@/views/dashboard/index'
import welcome from '@/views/dashboard/welcome'

/* layout template 模板文件 */
import Layout from '../views/layout/Layout.vue'
import system from '@/router/system' // 系统模块

Vue.use(Router)

export const constantRouterMap = [
  { path: '/login', component: Login, hidden: true },
  { path: '/404', component: fourFour, hidden: true },
  { path: '/401', component: fourOne, hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/welcome',
    // redirect:'/operation/echarts',
    name: 'Home',
    hidden: true,
    children: [
      { path: 'dashboard', component: dashIndex, name: '用户' },
      { path: 'welcome', component: welcome, name: '欢迎' }
    ]
  }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [

  /* 基础设置 */
  {
    path: '/system',
    id: 'system',
    isActive: true,
    component: Layout,
    name: '基础设置',
    children: system
  },
  { path: '*', redirect: '/401', hidden: true }
]
