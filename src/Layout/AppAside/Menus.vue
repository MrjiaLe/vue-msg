<template>
  <fragment>
    <template v-if="!item.children">
      <el-menu-item :index="item.path">
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </el-menu-item>
    </template>
    <el-submenu
      v-if="item.children && item.children.length > 0"
      :index="item.id + ''"
    >
      <template slot="title">
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </template>
      <menus
        v-for="child in item.children"
        :key="child.path"
        :item="child"
      ></menus>
    </el-submenu>
  </fragment>
</template>

<script>
export default {
  name: 'menus',
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped></style>
