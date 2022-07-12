import HomeLayout from '@/Layout'

export default {
  path: '/sys',
  name: 'sys:role:list',
  component: HomeLayout,
  meta: {
    title: '系统管理',
    icon: 'el-icon-s-grid'
  },
  children: [
    {
      path: '/sys/roles',
      name: 'sysroles',
      meta: {
        title: '角色管理',
        icon: 'el-icon-user-solid'
      },
      component: () => import('@/views/sys/roles')
    }
  ]
}
