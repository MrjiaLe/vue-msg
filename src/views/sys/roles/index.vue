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
      <template v-slot:action>
        <el-button plain size="mini" type="success">编辑</el-button>
        <el-button plain size="mini" type="warning">分配权限</el-button>
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
      title="新增角色"
      @determine="determine"
    ></my-form>
  </el-card>
</template>

<script>
import { mapGetters } from 'vuex'
import clos from './clos'
import { roleListAPI, roleAddApi } from '@/api/role'
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
        await roleAddApi(value)
        notifyTips('提示', '添加角色成功', 'success')
        form.close()
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
