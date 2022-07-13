<template>
  <el-card>
    <Breadcrumb class="breadcrumb"></Breadcrumb>
    <div>
      <mySearch
        v-model="queryModel.username"
        :flag="flag"
        label="用户名"
        @add="
          model = {}
          $refs.form.open()
        "
        @search="search"
      ></mySearch>
      <myTable :clos="clos" :data="userLIst">
        <template v-slot:avatar="{ row: { avatar } }">
          <el-avatar :size="60" :src="avatar"></el-avatar>
        </template>
        <template v-slot:roles="{ row: { roles } }">
          <el-tag
            v-for="item in roles"
            :key="item.id"
            style="margin-right: 5px"
          >
            {{ item.name }}
          </el-tag>
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
              model = { ...row }
              $refs.form.open()
            "
            >编辑</el-button
          >
          <el-button
            :disabled="row.id === 1"
            plain
            size="mini"
            type="warning"
            @click="handleRole(row)"
            >分配角色</el-button
          >
          <el-popconfirm
            style="margin-left: 10px"
            title="确定删除嘛"
            @confirm="handleUserDel(row)"
          >
            <el-button
              slot="reference"
              :disabled="row.id === 1"
              plain
              size="mini"
              type="danger"
              >删除</el-button
            >
          </el-popconfirm>
        </template>
      </myTable>
      <my-pagination
        v-model="queryModel"
        :total="total"
        @change="getUserList"
      ></my-pagination>
      <BackTop></BackTop>
      <my-form
        ref="form"
        v-model="model"
        :options="options"
        :title="title"
        @determine="determine"
      ></my-form>
      <my-dialog ref="dg" @determine="handleEditRole">
        <el-form label-width="50px">
          <el-form-item label="角色">
            <el-select v-model="integers" multiple style="width: 100%">
              <el-option
                v-for="item in roleList"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              />
            </el-select>
          </el-form-item>
        </el-form>
      </my-dialog>
    </div>
  </el-card>
</template>

<script>
import BackTop from '@/components/BackTop.vue'
import Breadcrumb from '@/Layout/AppMain/breadcrumb'
import {
  userListApi,
  addUserApi,
  updateUserApi,
  roleApi,
  userDelApi
} from '@/api/user'
import clos from './clos'
import options from './options'
import { notifyTips } from '@/utils/notify'
import { roleListAPI } from '@/api/role'
import { mapGetters } from 'vuex'
export default {
  components: { Breadcrumb, BackTop },
  data() {
    return {
      value: 1,
      clos,
      options,
      queryModel: {
        current: 1,
        size: 5,
        username: ''
      },
      // 用户列表数据
      userLIst: [],
      total: 0,
      model: {
        username: '',
        password: '',
        avatar: '',
        email: '',
        status: ''
      },
      roleList: [],
      integers: []
    }
  },
  created() {
    this.getUserList()
  },
  computed: {
    ...mapGetters(['authoritys']),
    title() {
      return this.model.id ? '编辑用户' : '新增用户'
    },
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
  watch: {
    queryModel: {
      deep: true,
      handler(val) {
        if (val.username.length <= 0) {
          this.getUserList()
        }
      }
    }
  },
  methods: {
    async getUserList() {
      try {
        const { records, total } = await userListApi(this.queryModel)
        this.userLIst = records
        this.total = total
      } catch (e) {
        console.log(e)
      }
    },
    search() {
      this.queryModel.current = 1
      this.getUserList()
    },
    async determine() {
      const form = this.$refs.form
      try {
        const value = await form.validate()
        value.status = value.status ? value.status : '1'
        console.log(value)
        await (this.model.id ? updateUserApi : addUserApi)(value)
        this.getUserList()
        form.close()
        notifyTips(
          '提示',
          `${this.model.id ? '编辑' : '新增'}请求成功`,
          'success'
        )
      } catch (e) {
        console.log(e)
      }
    },
    async handleRole(row) {
      this.integers = []
      try {
        const { records } = await roleListAPI()
        this.roleList = records
        const result = []
        records.forEach((i) => {
          result.push(
            ...row.roles.filter((item) => {
              return item.id === i.id
            })
          )
        })
        this.integers = result.map((v) => v.id)
        this.$refs.dg.show()
        this.model = { ...row }
      } catch (e) {
        console.log(e)
      }
    },
    async handleEditRole() {
      try {
        await roleApi(this.model.id, this.integers)
        this.$refs.dg.hide()
        notifyTips('提示', '请求成功', 'success')
        this.getUserList()
      } catch (e) {
        console.log(e)
      }
    },
    async handleUserDel(row) {
      try {
        await userDelApi(row.id)
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
