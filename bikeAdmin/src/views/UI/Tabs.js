import React, { Component, Fragment } from 'react'
import { Card, Tabs, message, Icon } from 'antd'
import './ui.less'

const TabPane = Tabs.TabPane
class Buttons extends Component {
  state = {}
  UNSAFE_componentWillMount () {
    const panes = [
      {
        title: '前端开发',
        content: '前端开发页签 前端开发页签',
        key: 'w1'
      },
      {
        title: 'UI设计',
        content: 'UI设计页签 UI设计页签 ',
        key: 'w2'
      },
      {
        title: '架构设计',
        content: '架构设计页签 架构设计页签',
        key: 'w3'
      }
    ]
    
    this.newTabIndex = 0
    this.setState(() => ({panes, activeKey: panes[0].key}))
  }
  
  render () {
    return (
      <Fragment>
        <Card title="Tab页签" className="card-wrap">
          <Tabs defaultActiveKey='1' onChange={this.fnChange}>
            <TabPane tab='鹿柴' key='w1'>
              <p>空山不见人，但闻人语响。</p>
              <p>返景入深林，复照青苔上。</p>
            </TabPane>
            <TabPane tab='使至塞上' key='w2'>
              <p>单车欲问边，属国过居延。</p>
              <p>征蓬出汉塞，归雁入胡天。</p>
            </TabPane>
            <TabPane tab='大漠孤烟直' key='w3'>
              <p>大漠孤烟直，长河落日圆。</p>
              <p>萧关逢候骑，都护在燕然。</p>
            </TabPane>
          </Tabs>
        </Card>
  
        <Card title="Tab带图页签" className="card-wrap">
          <Tabs defaultActiveKey='1' onChange={this.fnChange} animated={false}>
            <TabPane tab={<span><Icon type='plus'/>鹿柴</span>} key='w1'>
              <p>空山不见人，但闻人语响。</p>
              <p>返景入深林，复照青苔上。</p>
            </TabPane>
            <TabPane tab={<span><Icon type='edit'/>使至塞上</span>} key='w2'>
              <p>单车欲问边，属国过居延。</p>
              <p>征蓬出汉塞，归雁入胡天。</p>
            </TabPane>
            <TabPane tab={<span><Icon type='delete'/>大漠孤烟直</span>} key='w3'>
              <p>大漠孤烟直，长河落日圆。</p>
              <p>萧关逢候骑，都护在燕然。</p>
            </TabPane>
          </Tabs>
        </Card>
  
        <Card title="Tab动态页签" className="card-wrap">
          <Tabs
            defaultActiveKey='1'
            type='editable-card'
            activeKey={this.state.activeKey}
            onEdit={this.fnEdit}
            onChange={this.tabChange}>
            { this.state.panes.map(item => (
              <TabPane tab={item.title} key={item.key}>{item.content}</TabPane>
            )) }
          </Tabs>
        </Card>
      </Fragment>
    )
  }
  
  fnChange = activeKey => message.info(`您点击了页签 ${activeKey}`)
  
  tabChange = activeKey => this.setState(() => ({activeKey}))
  
  fnEdit = (targetKey, action) => this[action](targetKey)
  
  add = () => {
    const { panes } = this.state;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: 'New Tab', content: 'New Tab Pane', key: activeKey });
    this.setState({ panes, activeKey });
  }
  
  remove = targetKey => {
    let { activeKey } = this.state;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        activeKey = panes[lastIndex].key;
      } else {
        activeKey = panes[0].key;
      }
    }
    this.setState({ panes, activeKey });
  }
}

export default Buttons
