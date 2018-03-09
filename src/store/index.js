import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import permission from './modules/permission'
import getters from './getters'
import columns from './modules/columns'
import subOneCert from './licensing/certificateHall/subOneCert'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user,
    permission,
    columns,
    subOneCert
  },
  getters
})

export default store
