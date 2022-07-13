export default {
  avatar: {
    title: '头像',
    tag: 'avatar',
    src: 'https://joeschmoe.io/api/v1/random'
  },
  username: {
    tag: 'input',
    holader: '请输入用户名',
    type: 'text',
    clearable: true,
    title: '用户名',
    rules: [
      {
        required: true,
        message: '请输入用户名',
        trigger: 'blur'
      }
    ]
  },
  password: {
    tag: 'input',
    holader: '请输入密码',
    type: 'password',
    showPassword: true,
    clearable: true,
    title: '密码',
    rules: [
      {
        required: true,
        message: '请输入密码',
        trigger: 'blur'
      }
    ]
  },
  email: {
    holader: '请输入邮箱',
    tag: 'input',
    type: 'text',
    clearable: true,
    title: '邮箱',
    rules: [
      {
        required: true,
        message: '请输入邮箱',
        trigger: 'blur'
      }
    ]
  },
  status: {
    tag: 'radio',
    title: '状态',
    rules: [{ require: true }]
  }
}
