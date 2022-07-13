<template>
  <el-card>
    <Breadcrumb class="breadcrumb"></Breadcrumb>
    <my-search
      v-model="queryModel.name"
      :flag="flag"
      label="角色"
      @add="
        model = {}
        $refs.form.open()
      "
      @search="search"
    ></my-search>
    <my-table :clos="clos" :data="roleList">
      <template v-slot:status="{ row: { status } }">
        <el-switch
          :active-value="1"
          :inactive-value="0"
          :value="status"
          active-color="#13ce66"
        ></el-switch>
      </template>
      <template v-slot:action="{ row }">
        <el-button plain size="mini" type="success" @click="handleEdit(row)"
          >编辑</el-button
        >
        <el-button plain size="mini" type="warning" @click="handleEditRole(row)"
          >分配权限</el-button
        >
        <el-button plain size="mini" type="danger">删除</el-button>
      </template>
    </my-table>
    <my-pagination
      v-model="queryModel"
      :total="total"
      @change="getRoleList"
    ></my-pagination>
    <my-form
      ref="form"
      v-model="model"
      :options="options"
      :title="title + '角色'"
      @determine="determine"
    ></my-form>
    <my-dialog ref="dg" :title="dgTitle" @determine="handleRoleCheck">
      <el-tree
        :data="treeData"
        :default-checked-keys="checkedKeys"
        :props="defaultProps"
        default-expand-all
        node-key="id"
        show-checkbox
        @check="handleCheckChange"
      ></el-tree>
    </my-dialog>
  </el-card>
</template>

<script>
import { mapGetters } from 'vuex'
import clos from './clos'
import {
  roleListAPI,
  roleAddApi,
  roleEditAPI,
  roleInfoAPI,
  rolePermAPI
} from '@/api/role'
import { setMenuNav } from '@/api/user'
import options from './options'
import { notifyTips } from '@/utils/notify'
import Breadcrumb from '@/Layout/AppMain/breadcrumb'
export default {
  components: { Breadcrumb },
  data() {
    return {
      clos,
      options,
      queryModel: {
        current: 1,
        size: 5,
        name: ''
      },
      roleList: [],
      total: 0,
      model: {
        code: '',
        name: '',
        remark: '',
        status: ''
      },
      dgTitle: '哈哈哈',
      treeData: [],
      checkedKeys: [],
      defaultProps: {
        children: 'children',
        label: 'label'
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
      return this.model.id ? '编辑' : '新增'
    }
  },
  created() {
    this.getRoleList()
  },
  methods: {
    async getRoleList() {
      try {
        const { records, total } = await roleListAPI(this.queryModel)
        this.roleList = records
        this.total = total
      } catch (e) {
        console.log(e)
      }
    },
    search() {
      this.queryModel.current = 1
      this.getRoleList()
    },
    async determine() {
      const form = this.$refs.form
      try {
        const value = await form.validate()
        value.status = value.status ? value.status : '1'
        await (this.model.id ? roleEditAPI : roleAddApi)(value)
        form.close()
        this.getRoleList()
        notifyTips(
          '提示',
          this.model.id ? '编辑角色成功' : '添加角色成功',
          'success'
        )
      } catch (e) {
        console.log(e)
      }
    },
    async getTree() {
      try {
        const { menus } = await setMenuNav()
        this.treeData = menus
      } catch (e) {
        console.log(e)
      }
    },
    async handleEdit(row) {
      try {
        this.model = { ...row }
        const { status } = await roleInfoAPI(row.id)
        this.model.status = status
        this.$refs.form.open()
      } catch (e) {
        console.log(e)
      }
    },
    async handleEditRole(row) {
      try {
        this.model = { ...row }
        this.checkedKeys = []
        await this.getTree()
        this.dgTitle = `给${row.name}分配角色`
        const { menuIds } = await roleInfoAPI(row.id)
        this.checkedKeys = menuIds
        this.$refs.dg.show()
      } catch (e) {
        console.log(e)
      }
    },
    handleCheckChange(data, { checkedKeys }) {
      this.checkedKeys = checkedKeys
    },
    async handleRoleCheck() {
      try {
        await rolePermAPI(this.model.id, this.checkedKeys)
        notifyTips('提示', '更新权限成功', 'success')
        this.$refs.dg.hide()
        this.getRoleList()
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
