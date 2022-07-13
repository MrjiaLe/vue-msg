<template>
  <el-card>
    <Breadcrumb class="breadcrumb"></Breadcrumb>
  </el-card>
</template>

<script>
import Breadcrumb from '@/Layout/AppMain/breadcrumb'
export default {
  components: { Breadcrumb }
}
</script>

<style lang="scss" scoped>
.breadcrumb {
  margin-bottom: 20px;
}
</style>
