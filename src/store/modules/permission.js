/* eslint-disable no-unused-vars */
import { asyncRouterMap, constantRouterMap } from '@/router/index'

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param asyncRouterMap
 * @param resMap
 */
function filterAsyncRouter (asyncRouterMap, resMap) {
  const accessedRouters = asyncRouterMap.filter(route => {
    let id = route.path.replace('/', '')
    if (resMap[id] !== undefined) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, resMap)
      }
    } else {
      return false
    }
    return true
  })
  return accessedRouters
}

const permission = {
  state: {
    routers: constantRouterMap,
    // 动态路由列表
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, accessedRouters) => {
      state.addRouters = accessedRouters.concat({ path: '*', redirect: '/401', hidden: true })
      state.routers = constantRouterMap.concat(accessedRouters)
    }
  },
  actions: {
    GenerateRoutes ({ commit }, data) {
      return new Promise(resolve => {
        let accessedRouters
        /**
         * describe 注释动态路由部分，暂时全局放开
         * */
        /* if (data.roleCode === 'JX_ADMIN') {
          accessedRouters = asyncRouterMap
        } else {
          accessedRouters = filterAsyncRouter(asyncRouterMap, data.resMap)
        } */
        /* if(data.resMap){
              accessedRouters = filterAsyncRouter(asyncRouterMap,data.resMap);
          } */
        // 返回所有路由
        accessedRouters = asyncRouterMap
        commit('SET_ROUTERS', accessedRouters)
        resolve()
      })
    }
  }
}

export default permission
