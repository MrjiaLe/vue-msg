export default {
  type: {
    title: '类型',
    tag: 'select',
    rules: [
      {
        required: true,
        message: '请选择类型',
        trigger: 'blur'
      }
    ],
    holader: '请选择类型',
    type: [
      {
        title: '目录',
        id: '0'
      },
      {
        title: '菜单',
        id: '1'
      },
      {
        title: '按钮',
        id: '2'
      }
    ]
  },
  parentId: {
    title: '父级菜单',
    tag: 'select',
    rules: [
      {
        required: true,
        message: '请选择父级菜单'
      }
    ],
    holader: '请选择父级菜单',
    type: [
      {
        id: '0',
        title: '一级菜单'
      },
      {
        id: '1',
        title: '控制台'
      },
      {
        id: '2',
        title: '系统管理'
      },
      {
        id: '3',
        title: '菜单管理'
      },
      {
        id: '4',
        title: '角色管理'
      },
      {
        id: '5',
        title: '用户管理'
      }
    ]
  },
  label: {
    title: '展示名称',
    tag: 'input',
    rules: [
      {
        required: true,
        message: '请输入展示名称',
        trigger: 'blur'
      }
    ],
    holader: '请输入展示名称',
    clearable: true
  },
  name: {
    title: '文件名称',
    tag: 'input',
    holader: '请输入文件名称',
    clearable: true
  },
  icon: {
    title: '图标',
    tag: 'input',
    holader: '请输入图标',
    clearable: true
  },
  component: {
    title: 'component',
    tag: 'input',
    rules: [
      {
        required: true,
        message: '请输入component',
        trigger: 'blur'
      }
    ],
    holader: '请输入component',
    clearable: true
  },
  path: {
    title: '路径',
    tag: 'input',
    holader: '请输入路径',
    clearable: true
  },
  perms: {
    title: '唯一标识',
    tag: 'input',
    rules: [
      {
        required: true,
        message: '请输入唯一标识',
        trigger: 'blur'
      }
    ],
    holader: '请输入唯一标识',
    clearable: true
  },
  status: {
    title: '状态',
    tag: 'radio',
    holader: '请选择状态'
  }
}
