<template>
  <div class="app-header">
    <div class="tagview">
      <i
        @click="folding"
        :class="
          $store.state.user.collapse
            ? 'el-icon-s-unfold scaling'
            : 'el-icon-s-fold scaling'
        "
      ></i>
      <div>
        <el-tag
          v-for="(item, i) in tags"
          :key="i"
          :closable="item.path !== '/system'"
          class="el-Tagview"
          effect="dark"
          :type="$route.path === item.path ? 'warning' : 'info'"
          @click="routingHop(item)"
          @close="closeTag(item, i)"
        >
          {{ item.title }}
        </el-tag>
      </div>
    </div>
    <div class="app-test">
      <el-tooltip class="item" effect="dark" content="全屏" placement="bottom">
        <i class="el-icon-rank tooltip" @click="fullScreen"></i>
      </el-tooltip>
      <el-tooltip
        class="el-icon-circle-close"
        effect="dark"
        content="关闭全部标签"
        placement="bottom"
      >
        <i class="el-icon-rank tooltip"></i>
      </el-tooltip>
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
import screenfull from 'screenfull'
import { mapGetters, mapMutations } from 'vuex'
export default {
  methods: {
    // 全屏
    fullScreen() {
      if (screenfull.isEnabled && !screenfull.isFullscreen) {
        screenfull.request()
      }
    },
    folding() {
      this.$store.commit('user/folding')
    },
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
    },

    // tagview标签
    ...mapMutations({
      setTags: 'tagsView/setTags',
      deleteTags: 'tagsView/deleteTags'
    }),
    routingHop(item) {
      if (item.path === this.$route.path) return
      this.$router.push(item.path)
    },
    closeTag(item, i) {
      const tags = this.tags
      if (item.path === this.$route.path) {
        this.$router.push(tags[i - 1].path)
      }
      this.deleteTags(i)
    }
  },
  computed: {
    ...mapGetters(['tags'])
  },
  watch: {
    $route: {
      immediate: true,
      deep: true,
      handler(val) {
        const {
          path,
          meta: { title }
        } = val
        this.setTags({ path, title })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tooltip {
  font-size: 25px;
  color: white;
}
.el-Tagview {
  margin-left: 15px;
}
.tagview {
  display: flex;
  align-items: center;
}
.scaling {
  color: white;
  font-size: 25px;
}
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
  width: 220px;
}
.el-dropdown-link {
  color: white;
  font-size: 18px;
  font-weight: 800;
}
</style>
