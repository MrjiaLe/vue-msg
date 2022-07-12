import HomeLayout from '@/Layout'

export default {
  path: '/sys',
  name: 'sys:user:list',
  redirect: '/sys/users',
  component: HomeLayout,
  meta: {
    title: '系统管理',
    icon: 'el-icon-s-grid'
  },
  children: [
    {
      path: '/sys/users',
      name: 'sysUsers',
      meta: {
        title: '用户管理',
        icon: 'el-icon-user'
      },
      component: () => import('@/views/sys/users')
    }
  ]
}
