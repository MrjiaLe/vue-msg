import UserApi from '@/api/user'
import router from '@/router'
import { setItem, getItem } from '@/utils/storage'
export default {
  namespaced: true,
  state: {
    token: getItem('token') || '',
    userInfo: getItem('userInfo') || {}
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
    }
  },
  actions: {
    async login({ commit }, loginFrom) {
      const token = await UserApi.login(loginFrom)
      commit('setToken', token)
      return token
    },
    async getInfo({ commit }) {
      const res = await UserApi.getUserInfo()
      commit('setInfo', res)
    }
  }
}
