import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
// 地图
import VueAMap from 'vue-amap'
// 全局filter 过滤器
import * as filters from './filters'
import publicFunction from './utils/publicFun'
// 表格校验
import Validate from './utils/validation'

// 路由拦截器
import './permission'

import 'nprogress/nprogress.css'

Vue.use(Validate)
// 自定义插件  所有的插件全部应该放入这个地方
Vue.use(publicFunction)

Vue.config.productionTip = false
Vue.use(ElementUI)

// 注入全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

/* 地图 */
Vue.use(VueAMap)
VueAMap.initAMapApiLoader({
  key: '8c318365cfef01656d814eb6a2ffc06d',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
})
/* 地图 end */

let vm = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  data: {
    hubBus: new Vue()
  }
})
global.vm = vm // Define you app variable globally
