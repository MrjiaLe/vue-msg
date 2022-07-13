<template>
  <el-menu
    :default-active="$route.path"
    class="el-menu-vertical-demo"
    text-color="#fff"
    background-color="#222d32"
    active-text-color="#ffd04b"
    router
    :collapse="$store.state.user.collapse"
    :collapse-transition="true"
  >
    <menus v-for="item in menuList" :key="item.path" :item="item"></menus>
  </el-menu>
</template>

<script>
import Menus from './Menus'
import { mapGetters } from 'vuex'
import { removeChildren, filterMenus } from '@/utils/removeChidren'
export default {
  components: {
    Menus
  },
  computed: {
    ...mapGetters(['menus']),
    menuList() {
      const data = removeChildren(this.menus)
      return filterMenus(data)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-menu {
  border-right: none;
}
</style>
