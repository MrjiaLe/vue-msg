import UserApi from '@/api/user'
import router from '@/router'
import { setItem, getItem } from '@/utils/storage'
export default {
  namespaced: true,
  state: {
    token: getItem('token') || '',
    userInfo: getItem('userInfo') || {},
    collapse: getItem('collapse') || false,
    authoritys: [],
    menus: []
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem('token', token)
    },
    setInfo(state, info) {
      state.userInfo = info
      setItem('userInfo', info)
    },
    logout(state) {
      state.token = ''
      setItem('token', '')
      state.userInfo = {}
      setItem('userInfo', {})
      router.push('/login')
    },
    folding(state) {
      state.collapse = !state.collapse
      setItem('collapse', state.collapse)
    },
    setNav(state, nav) {
      state.menus = nav.menus
      state.authoritys = nav.authoritys
    }
  },
  actions: {
    async login({ commit }, loginFrom) {
      const token = await UserApi.login(loginFrom)
      commit('setToken', token)
      return token
    },
    async userInfo({ commit }) {
      const res = await UserApi.getUserInfo()
      commit('setInfo', res)
    },
    async userNav({ commit }) {
      const res = await UserApi.MenuNav()
      commit('setNav', res)
      return res
    }
  }
}
