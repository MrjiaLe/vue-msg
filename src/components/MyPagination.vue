<template>
  <el-pagination
    :current-page="pagination.current"
    :page-size="pagination.size"
    :page-sizes="[5, 10, 15, 20]"
    :total="total"
    layout="total, sizes, prev, pager, next, jumper"
    @size-change="(size) => change('size', size)"
    @current-change="(current) => change('current', current)"
  >
  </el-pagination>
</template>

<script>
export default {
  name: 'MyPagination',
  props: {
    total: Number,
    value: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    pagination() {
      return this.value || {}
    }
  },
  methods: {
    change(type, value) {
      const person = {
        ...this.value,
        [type]: value
      }
      this.$emit('input', person)
      this.$emit('change', person)
    }
  }
}
</script>

<style scoped>
.el-pagination {
  margin-top: 20px;
}
</style>
