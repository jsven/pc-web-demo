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
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers.concat({ path: '*', redirect: '/401', hidden: true })
      state.routers = constantRouterMap.concat(routers)
    }
  },
  actions: {
    GenerateRoutes ({ commit }, data) {
      return new Promise(resolve => {
        let accessedRouters
        /* if (data.roleCode === 'JX_ADMIN') {
          accessedRouters = asyncRouterMap
        } else {
          accessedRouters = filterAsyncRouter(asyncRouterMap, data.resMap)
        } */
        /* if(data.resMap){
              accessedRouters = filterAsyncRouter(asyncRouterMap,data.resMap);
          } */
        accessedRouters = asyncRouterMap // 返回所有路由
        commit('SET_ROUTERS', accessedRouters)
        resolve()
      })
    }
  }
}

export default permission
