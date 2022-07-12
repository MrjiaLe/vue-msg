import HomeLayout from '@/Layout'

export default {
  path: '/sys',
  name: 'sys:menu:list',
  component: HomeLayout,
  meta: {
    title: '系统管理',
    icon: 'el-icon-s-grid'
  },
  children: [
    {
      path: '/sys/menus',
      name: 'sysMenus',
      meta: {
        title: '菜单管理',
        icon: 'el-icon-menu'
      },
      component: () => import('@/views/sys/menus')
    }
  ]
}
