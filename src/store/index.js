import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showLoading: true
  },
  mutations: {
    //更新Loading显示状态
    updateShowLoading: (state, showLoading) => {
      state.showLoading = showLoading
    }
  },
  actions: {},
  modules: {}
})
