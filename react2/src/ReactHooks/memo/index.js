import React, { Component, PureComponent } from 'react'

class Foo1 extends Component {
  // 决定组件是否要重新渲染
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return (nextProps.name === this.props.name) ? false : true
  }
  render () {
    console.log('Foo render')
    return null
  }
}

// 一层组件对比 PureComponent
class Foo extends PureComponent {
  render () {
    console.log('Foo render')
    return null
  }
}


class App extends Component {
  state = {
    name: 'lily',
    count: 0
  }
  
  render () {
    const { count } = this.state
    return (
      <div>
        <button onClick={() => this.setState({count: count+ 1}) }>增加</button>
        <Foo name='lucy' />
      </div>
    )
  }
}

export default App
