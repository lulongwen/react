const menuList = [
  // { title: '', key: '', children: [] }
  {
    title: '首页',
    key: 'home' // 路由的名字就是 key
  },
  {
    title: '登录',
    key: 'login'
  },
  {
    title: '注册',
    key: 'register'
  },
  {
    title: 'UI',
    key: 'ui',
    children: [
      {
        title: '按钮',
        key: 'ui/buttons',
      },
      {
        title: '弹框',
        key: 'ui/modals',
      },
      {
        title: 'Loading',
        key: 'ui/loadings',
      },
      {
        title: '通知提醒',
        key: 'ui/notices',
      },
      {
        title: '全局Message',
        key: 'ui/messages',
      },
      {
        title: 'Tab页签',
        key: 'ui/tabs',
      },
      {
        title: '图片画廊',
        key: 'ui/gallery',
      },
      {
        title: '轮播图',
        key: 'ui/carousels',
      }
    ]
  },
  {
    title: '表单',
    key: 'form',
    children: [
      {
        title: '搜索表单',
        key: 'form/search',
      },
      {
        title: '多个搜索条件',
        key: 'form/searchmore',
      }
    ]
  },
  {
    title: '表格',
    key: 'table',
    children: [
      {
        title: '基础表格',
        key: 'table/basic',
      },
      {
        title: '高级表格',
        key: 'table/high',
      }
    ]
  },
  {
    title: '富文本',
    key: 'richtext'
  },
  {
    title: '城市管理',
    key: 'city'
  },
  {
    title: '订单管理',
    key: 'order',
    btnList: [
      {
        title: '订单详情',
        key: 'detail'
      },
      {
        title: '结束订单',
        key: 'finish'
      }
    ]
  },
  {
    title: '员工管理',
    key: 'user'
  },
  {
    title: '车辆地图',
    key: 'bikeMap'
  },
  {
    title: '图表',
    key: 'charts',
    children: [
      {
        title: '柱形图',
        key: 'charts/bar'
      },
      {
        title: '饼图',
        key: 'charts/pie'
      },
      {
        title: '折线图',
        key: 'charts/line'
      },
    ]
  },
  {
    title: '权限设置',
    key: 'permission'
  }
]

export default menuList
