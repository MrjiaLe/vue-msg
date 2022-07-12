<template>
  <el-card>
    <Breadcrumb></Breadcrumb>
  </el-card>
</template>

<script>
import Breadcrumb from '@/Layout/AppMain/breadcrumb'
export default {
  components: { Breadcrumb }
}
</script>

<style lang="scss" scoped>
.el-card {
  height: 100%;
}
</style>
