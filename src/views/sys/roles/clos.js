export default [
  {
    title: '序号',
    type: 'index',
    align: 'center',
    width: 70
  },
  {
    title: '角色',
    align: 'center',
    prop: 'name'
  },
  {
    title: '编码',
    align: 'center',
    prop: 'name'
  },
  {
    title: '描述',
    align: 'center',
    prop: 'remark'
  },
  {
    title: '状态',
    align: 'center',
    prop: 'email',
    slot: 'status'
  },
  {
    title: '创建时间',
    align: 'center',
    prop: 'createTime'
  },
  {
    title: '操作',
    align: 'center',
    slot: 'action',
    width: 260
  }
]
