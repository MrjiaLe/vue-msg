<template>
  <el-card>
    <Breadcrumb class="breadcrumb"></Breadcrumb>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="用户名">
        <el-input v-model="formInline.user" placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item>
        <el-button type="success">查询</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
import Breadcrumb from '@/Layout/AppMain/breadcrumb'
export default {
  components: { Breadcrumb },
  data() {
    return {
      formInline: {
        user: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.el-card {
  height: 100%;
}
.breadcrumb {
  margin-bottom: 20px;
}
</style>
