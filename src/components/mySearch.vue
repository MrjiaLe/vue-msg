<template>
  <div class="search-container">
    {{ label }}
    <el-input v-model.trim="search" :placeholder="'请输入' + label"></el-input>
    <el-button icon="el-icon-search" type="success" @click="$emit('search')"
      >查询</el-button
    >
    <el-button
      v-if="flag"
      class="add-button"
      icon="el-icon-edit"
      type="primary"
      @click="$emit('add')"
      >新增
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'mySearch',
  props: {
    label: String,
    value: String,
    flag: Boolean
  },
  data() {
    return {
      search: ''
    }
  },
  watch: {
    search(val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-input {
  width: 200px;
  margin: 0 10px;
}

.search-container {
  position: relative;

  .add-button {
    position: absolute;
    right: 0;
  }
}
</style>
