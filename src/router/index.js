import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeLayout from '@/Layout'
import users from './modules/users'
import roles from './modules/roles'
import menus from './modules/menus'

Vue.use(VueRouter)

// 公有路由表
export const publicRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  },
  {
    path: '/',
    name: 'layout',
    redirect: '/system',
    component: HomeLayout,
    children: [
      {
        path: '/system',
        name: 'system',
        component: () => import('@/views/sys/home'),
        meta: {
          title: '控制台',
          icon: 'el-icon-s-home'
        }
      },
      {
        path: '/404',
        name: '404',
        component: () => import('@/views/404')
      }
    ]
  }
]

// 私有路由表
export const privateRoutes = [users, roles, menus]

const router = new VueRouter({
  routes: publicRoutes
})

export default router
