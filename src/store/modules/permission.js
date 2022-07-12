import { publicRoutes, privateRoutes } from '@/router'

export default {
  namespaced: true,
  state: () => ({
    menus: publicRoutes
  }),
  mutations: {
    setMenus(state, menus) {
      state.menus.push(...privateRoutes)
    }
  },
  actions: {
    filterMenus({ commit }, menus) {
      const result = []
      menus.forEach((name) => {
        result.push(...privateRoutes.filter((item) => item.name === name))
      })
      result.push({
        path: '/:catchAll(.*)',
        redirect: '/404'
      })
      commit('setMenus', result)
      return result
    }
  }
}
