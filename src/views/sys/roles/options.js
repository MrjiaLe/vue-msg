export default {
  name: {
    title: '角色',
    tag: 'input',
    holader: '请输入角色',
    rules: [
      {
        required: true,
        message: '请输入角色',
        trigger: 'blur'
      }
    ]
  },
  code: {
    title: '编码',
    tag: 'input',
    holader: '请输入编码',
    rules: [
      {
        required: true,
        message: '请输入编码',
        trigger: 'blur'
      }
    ]
  },
  remark: {
    title: '描述',
    tag: 'input',
    holader: '请输入描述',
    type: 'textarea',
    showWordLimit: true,
    rules: [
      {
        required: true,
        message: '请输入描述',
        trigger: 'blur'
      }
    ]
  },
  status: {
    title: '状态',
    tag: 'radio'
  }
}
