import UserApi from '@/api/user'
import { setItem, getItem } from '@/utils/storage'
export default {
  namespaced: true,
  state: {
    token: getItem('token') || ''
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem('token', token)
    }
  },
  actions: {
    async login({ commit }, loginFrom) {
      const token = await UserApi.login(loginFrom)
      commit('setToken', token)
      return token
    }
  }
}
