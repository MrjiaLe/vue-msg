<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item v-for="item in arr" :key="item.path" :to="item.path">{{
      item.meta.title
    }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  data() {
    return {
      arr: []
    }
  },
  created() {
    this.arr = this.$route.matched
  },
  watch: {
    $route(val) {
      this.arr = val.matched
    }
  }
}
</script>

<style lang="scss" scoped></style>
