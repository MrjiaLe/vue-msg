<template>
  <el-card>
    <Breadcrumb class="breadcrumb"></Breadcrumb>
    <my-search
      v-model="queryModel.username"
      :flag="flag"
      label="菜单"
      @add="$refs.form.open()"
      @search="search"
    ></my-search>
    <my-table
      :clos="clos"
      :data="menuList"
      :treeProps="{ children: 'children' }"
    >
      <template v-slot:type="{ row: { type } }">
        <el-tag :type="color[type]">{{ level[type] }}</el-tag>
      </template>
      <template v-slot:status="{ row: { status } }">
        <el-switch
          :active-value="1"
          :inactive-value="0"
          :value="status"
          active-color="#13ce66"
        ></el-switch>
      </template>
      <template v-slot:action="{ row }">
        <el-button
          plain
          size="mini"
          type="success"
          @click="
            formModel = { ...row }
            $refs.form.open()
          "
          >编辑</el-button
        >
        <el-button plain size="mini" type="danger">删除</el-button>
      </template>
    </my-table>
    <my-form
      ref="form"
      v-model="formModel"
      :menu="menuList"
      :options="options"
      :title="title"
      lw="100px"
      @determine="handleMenu"
    ></my-form>
  </el-card>
</template>

<script>
import options from './options'
import { menuListApi, menuAddAPI, menuUpdateAPI } from '@/api/menu'
import clos from './clos'
import { level, color } from './level'
import { mapGetters } from 'vuex'
import { notifyTips } from '@/utils/notify'
import Breadcrumb from '@/Layout/AppMain/breadcrumb'
export default {
  components: { Breadcrumb },
  data() {
    return {
      clos,
      level,
      color,
      options,
      menuList: [],
      queryModel: {
        current: '1',
        size: '10',
        username: ''
      },
      formModel: {
        children: [],
        component: '',
        icon: '',
        label: '',
        parentId: '',
        path: '',
        perms: '',
        status: '',
        type: ''
      }
    }
  },
  computed: {
    ...mapGetters(['authoritys']),
    flag() {
      let f = false
      this.authoritys.forEach((item) => {
        if (item === 'sys:user:add') {
          f = true
        }
      })
      return f
    },
    title() {
      return this.formModel.id ? '编辑菜单' : '添加菜单'
    }
  },
  created() {
    this.getMenuList()
  },
  methods: {
    async getMenuList() {
      try {
        this.menuList = await menuListApi(this.queryModel)
      } catch (e) {
        console.log(e)
      }
    },
    async handleMenu() {
      try {
        const res = await this.$refs.form.validate()
        await (this.formModel.id ? menuUpdateAPI : menuAddAPI)(res)
        await this.$refs.form.resetFields()
        notifyTips(
          '提示',
          this.formModel.id ? '编辑菜单成功' : '添加菜单成功',
          'success'
        )
        this.getMenuList()
      } catch (e) {
        console.log(e)
      }
    },
    async search() {
      try {
        this.queryModel.current = '1'
        await this.getMenuList()
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.breadcrumb {
  margin-bottom: 20px;
}
</style>
