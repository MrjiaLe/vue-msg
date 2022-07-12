import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import permission from './modules/permission'
import tagsView from './modules/tagview'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {
    token: (state) => state.user.token,
    userInfo: (state) => state.user.userInfo,
    authoritys: (state) => state.user.authoritys,
    menus: (state) => state.user.menus,
    tags: (state) => state.tagsView.tags
  },
  mutations: {},
  actions: {},
  modules: {
    user,
    permission,
    tagsView
  }
})
