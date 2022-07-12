<template>
  <div class="app-header">
    <div>111</div>
    <div class="app-test">
      <el-avatar :size="40" :src="$store.getters.userInfo.avatar"></el-avatar>
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          {{ $store.getters.userInfo.username
          }}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="setup">个人设置</el-dropdown-item>
          <el-dropdown-item command="logout">安全退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleCommand(command) {
      switch (command) {
        case 'setup':
          this.handelSetup()
          break
        case 'logout':
          this.handelLogout()
          break
      }
    },
    handelSetup() {
      alert('个人设置')
    },
    handelLogout() {
      this.$confirm('您确定要退出登录吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$store.commit('user/logout')
          this.$message({
            type: 'success',
            message: '退出成功!'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消退出'
          })
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.app-header {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.app-test {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 20px;
  width: 130px;
}
.el-dropdown-link {
  color: white;
  font-size: 18px;
  font-weight: 800;
}
</style>
