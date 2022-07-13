<template>
  <el-backtop
    :bottom="100"
    :right="40"
    :visibility-height="100"
    target=".el-card"
  >
    <div class="up">
      <i class="el-icon-caret-top"></i>
    </div>
  </el-backtop>
</template>

<script>
export default {
  name: 'BackTop'
}
</script>

<style lang="scss" scoped>
.up {
  width: 100%;
  background-color: #f2f5f6;
  box-shadow: 0 0 6px rgb(0 0 0 / 12%);
  text-align: center;
  line-height: 40px;
  color: #18bc9c;
  border-radius: 100%;
}
</style>
