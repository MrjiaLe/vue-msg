import router from '@/router/index'
import store from '@/store'

router.beforeEach(async (to, from, next) => {
  const token = store.getters.token
  if (to.path === '/login' && token) {
    return next('/')
  }
  if (to.path !== '/login' && !token) {
    return next('/login')
  }
  if (to.path !== '/login' && token) {
    return next()
  }
  next()
})
