import router from '@/router/index'
import store from '@/store'

router.beforeEach(async (to, from, next) => {
  const token = store.getters.token
  if (to.path === '/login' && token) {
    return next(from.path)
  }
  if (to.path !== '/login' && !token) {
    return next('/login')
  }
  if (to.path !== '/login') {
    const userInfo = store.getters.userInfo
    if (JSON.stringify(userInfo) === '{}') {
      await store.dispatch('user/userInfo')
    }
    const authoritys = store.getters.authoritys
    if (JSON.stringify(authoritys) === '[]') {
      const res = await store.dispatch('user/userNav')
      const routes = await store.dispatch(
        'permission/filterMenus',
        res.authoritys
      )
      routes.forEach((item) => router.addRoute(item))
      return next(to.path)
    }
  }
  next()
})
