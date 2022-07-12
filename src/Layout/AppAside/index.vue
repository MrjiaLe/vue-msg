<template>
  <el-menu
    :default-active="$route.path"
    class="el-menu-vertical-demo"
    text-color="#fff"
    background-color="#222d32"
    active-text-color="#ffd04b"
    router
  >
    <el-menu-item index="/">
      <i class="el-icon-s-home"></i>
      <span slot="title">控制台</span>
    </el-menu-item>
    <el-submenu index="sys">
      <template slot="title">
        <i class="el-icon-s-grid"></i>
        <span>系统管理</span>
      </template>
      <el-menu-item index="/sys/users">
        <i class="el-icon-user"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
      <el-menu-item index="/sys/roles">
        <i class="el-icon-user-solid"></i>
        <span slot="title">角色管理</span>
      </el-menu-item>
      <el-menu-item index="/sys/menus">
        <i class="el-icon-menu"></i>
        <span slot="title">菜单管理</span>
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.el-menu {
  border-right: none;
}
</style>
