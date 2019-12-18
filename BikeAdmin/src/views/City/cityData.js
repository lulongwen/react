export const thead = [
  {
    title: '城市ID',
    dataIndex: 'id'
  },
  {
    title: '城市名称',
    dataIndex: 'name'
  },
  {
    title: '用车模式',
    dataIndex: 'mode',
    // render(mode) {
    //   return mode === 1 ? '停车点' : '禁停区';
    // }
  },
  {
    title: '营运模式',
    dataIndex: 'op_mode',
    // render(op_mode) {
    //   return op_mode === 1 ? '自营' : '加盟';
    // }
  },
  {
    title: '授权加盟商',
    dataIndex: 'franchisee_name'
  },
  {
    title: '城市管理员',
    dataIndex: 'city_admins',
    // render(arr) {  //处理数组类型
    //   return arr.map((item) => {
    //     return item.user_name;
    //   }).join(',')
    // }
  },
  {
    title: '城市开通时间',
    dataIndex: 'open_time'
  },
  {
    title: '操作时间',
    dataIndex: 'update_time',
    // render: Utils.formatDate //格式化时间戳
  },
  {
    title: '操作人',
    dataIndex: 'sys_user_name'
  }
]
