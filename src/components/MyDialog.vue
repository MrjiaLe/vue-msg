<template>
  <el-dialog
    :show-close="false"
    :visible="diglogVisible"
    center
    title="分配角色"
    width="500px"
  >
    <slot></slot>
    <div slot="footer">
      <el-button size="mini" @click="diglogVisible = false">取消</el-button>
      <el-button size="mini" type="success" @click="$emit('determine')"
        >确定</el-button
      >
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'MyDialog',
  data() {
    return {
      diglogVisible: false
    }
  },
  methods: {
    show() {
      this.diglogVisible = true
    },
    hide() {
      this.diglogVisible = false
    }
  }
}
</script>

<style scoped></style>
