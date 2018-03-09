const subOneCert = {
  state: {
    certDetailThree: '',
    tableList: []
  },
  mutations: {
    SET_TABLE_LIST: (state, data) => {
      state.certDetailThree = data
    }
  },
  actions: {
    setTableList: ({ commit }, data) => {
      commit('SET_TABLE_LIST', data)
    }

  }
}

export default subOneCert
