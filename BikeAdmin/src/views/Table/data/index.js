export const thead = [
  {
    title: '用户名', //表头标题
    dataIndex: 'username' //数据源
  },
  {
    title: '性别',
    dataIndex: 'sex',
    render(sex){
      return sex === 1 ? '男' : '女'
    }
  },
  {
    title: '状态',
    dataIndex: 'state',
    render(state){
      let config = {
        '1': '咸鱼一条',
        '2': '人民公仆',
        '3': '医院护士',
        '4': '科技公司FE',
        '5': '创业者'
      }
      return config[state]
    }
  },
  {
    title: '爱好',
    dataIndex: 'interest',
    render(abc){
      let config = {
        '1': '游泳',
        '2': '打篮球',
        '3': '踢足球',
        '4': '跑步',
        '5': '爬山',
        '6': '骑行',
        '7': '桌球',
        '8': '麦霸'
      }
      return config[abc]
    }
  },
  {
    title: '生日',
    dataIndex: 'birthday'
  },
  {
    title: '地址',
    dataIndex: 'address'
  },
  {
    title: '早起时间',
    dataIndex: 'time'
  }
]

export const tbody = [
  {
    id: '0',
    username: 'Elena',
    sex: '1',
    state: '1',
    interest: '1',
    birthday: '2019-01-01',
    address: '西虹市海淀区桃花公园',
    time: '07:00'
  },
  {
    id: '1',
    username: 'Mary',
    sex: '1',
    state: '2',
    interest: '3',
    birthday: '2019-01-01',
    address: '西虹市海淀区桃花公园',
    time: '07:00'
  },
  {
    id: '2',
    username: 'Tom',
    sex: '2',
    state: '3',
    interest: '4',
    birthday: '2019-01-01',
    address: '西虹市海淀区桃花公园',
    time: '07:00'
  }
]
