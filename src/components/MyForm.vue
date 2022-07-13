<template>
  <el-dialog
    :show-close="false"
    :title="title"
    :visible="diglogVisible"
    center
    width="500px"
  >
    <el-form ref="formRef" :model="model" label-width="70px">
      <el-form-item
        v-for="(item, key) in formModel"
        :key="key"
        :label="item.title"
        :prop="key"
        :rules="item.rules"
      >
        <el-avatar
          v-if="item.tag === 'avatar'"
          :size="60"
          :src="item.src"
        ></el-avatar>
        <el-input
          v-if="item.tag === 'input'"
          v-model="model[key]"
          :clearable="item.clearable"
          :placeholder="item.holader"
          :show-password="item.showPassword"
          :show-word-limit="item.showWordLimit"
        ></el-input>
        <template v-if="item.tag === 'radio'">
          <el-radio v-model="model[key]" label="1">正常</el-radio>
          <el-radio v-model="model[key]" label="2">禁用</el-radio>
        </template>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button size="mini" @click="resetFields">取消</el-button>
      <el-button size="mini" type="success" @click="$emit('determine')"
        >确定</el-button
      >
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'MyForm',
  data() {
    return {
      diglogVisible: false,
      radio: '1',
      model: {}
    }
  },
  computed: {
    formModel() {
      return { ...this.options }
    }
  },
  watch: {
    value: {
      deep: true,
      immediate: true,
      handler(val) {
        this.$nextTick(() => {
          this.model = { ...val }
        })
      }
    }
  },
  props: {
    title: String,
    options: {
      type: Object,
      default: () => {}
    },
    value: Object
  },
  methods: {
    open() {
      this.diglogVisible = true
    },
    close() {
      this.diglogVisible = false
    },
    async validate() {
      await this.$refs.formRef.validate()
      return { ...this.model }
    },
    resetFields() {
      this.$refs.formRef.resetFields()
      this.diglogVisible = false
      this.model = {}
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep(.el-dialog__body) {
  padding: 25px 25px 0 25px !important;
}
</style>
