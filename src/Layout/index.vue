<template>
  <el-container>
    <el-aside :width="$store.state.user.collapse ? '64px' : '200px'">
      <app-aside></app-aside>
    </el-aside>
    <el-container>
      <el-header>
        <app-header></app-header>
      </el-header>
      <el-main>
        <app-main></app-main>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import AppAside from '@/Layout/AppAside'
import AppHeader from '@/Layout/AppHeader'
import AppMain from '@/Layout/AppMain'
export default {
  name: 'index',
  components: {
    AppAside,
    AppHeader,
    AppMain
  }
}
</script>

<style lang="scss" scoped>
.el-header {
  background-color: $header-bg-color;
  color: #333;
}

.el-aside {
  background-color: $aside-bg-color;
}

.el-main {
  background-color: $main-bg-color;
  color: #333;
  overflow: auto;
}

.el-container {
  height: 100%;
}
</style>
