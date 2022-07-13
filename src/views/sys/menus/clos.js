export default [
  {
    title: '序号',
    type: 'index',
    align: 'center',
    width: 70
  },
  {
    title: '展示名称',
    prop: 'label',
    align: 'center'
  },
  {
    title: '文件名称',
    prop: 'name',
    align: 'center'
  },
  {
    title: '路径',
    prop: 'path',
    align: 'center'
  },
  {
    title: '前端component',
    prop: 'component',
    align: 'center'
  },
  {
    title: '唯一标识',
    prop: 'perms',
    align: 'center'
  },
  {
    title: '图标',
    prop: 'icon',
    align: 'center'
  },
  {
    title: '类型',
    slot: 'type',
    align: 'center'
  },
  {
    title: '注册时间',
    prop: 'createTime',
    align: 'center',
    width: 200
  },
  {
    title: '状态',
    slot: 'status',
    align: 'center'
  },
  {
    title: '操作',
    slot: 'action',
    width: 200,
    align: 'center'
  }
]
