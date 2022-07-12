<template>
  <div class="login-container">
    <h1>智慧服务平台</h1>
    <div class="login-form">
      <h2>欢迎登录</h2>
      <el-form :rules="rules" ref="form" :model="loginForm">
        <el-form-item prop="username">
          <el-input
            suffix-icon="el-icon-user-solid"
            v-model.trim="loginForm.username"
            placeholder="请输入账号"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            show-password
            placeholder="请输入密码"
            v-model.trim="loginForm.password"
            suffix-icon="el-icon-s-goods"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <div class="verify">
            <el-input
              v-model.trim="loginForm.code"
              placeholder="请输入验证码"
              clearable
            ></el-input>
            <el-image @click.stop="handleCode" :src="captchaUrl"></el-image>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button
            :loading="loadingStatus"
            class="log-but"
            @click="handleLogin()"
            type="danger"
            >立即登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import UserApi from '@/api/user'
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      // 按钮加载状态
      loadingStatus: false,
      // 验证码路径
      captchaUrl: '',
      // 表单参数
      loginForm: {
        username: '',
        password: '',
        code: '',
        token: ''
      },
      // 表单验证规则
      rules: {
        username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        code: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
      }
    }
  },
  created() {
    this.handleCaptcha()
  },
  methods: {
    // 辅助函数
    ...mapActions({ login: 'user/login', getInfo: 'user/getInfo' }),
    // 表单验证登录
    handleLogin() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.handleSubmitLogin()
        }
      })
    },
    // 登录功能
    async handleSubmitLogin() {
      try {
        const token = await this.login(this.loginForm)
        if (!token) return
        this.$notify({ title: '提示', message: '登录成功', type: 'success' })
        this.loadingStatus = true
        await this.$router.push('/')
        await this.getInfo()
      } catch (error) {
        console.log(error)
      } finally {
        this.loadingStatus = false
      }
    },
    // 点击图片刷新验证码
    handleCode() {
      this.loginForm.code = ''
      this.handleCaptcha()
    },
    // 获取验证码 token
    async handleCaptcha() {
      const { captchaImg, token } = await UserApi.getCaptcha()
      this.captchaUrl = captchaImg
      this.loginForm.token = token
    }
  }
}
</script>

<style scoped>
.login-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  font-family: Verdana;
  background-size: cover;
  background: url('../../assets/images/bg.jpg') no-repeat fixed center;
}
h1 {
  text-align: center;
  font-size: 42px;
  margin-top: 50px;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 5px;
}
.login-form {
  margin: 10% auto 13%;
  width: 20%;
}
h2 {
  color: #fff;
  font-size: 30px;
  margin-bottom: 30px;
}
.log-but {
  width: 100%;
  border-radius: 5px;
}
.verify {
  width: 100%;
  display: flex;
  align-items: center;
}
.el-image {
  width: 80%;
  height: 100%;
  border-radius: 5px;
  margin-left: 10px;
  cursor: pointer;
}
</style>
