import React, {Component, createContext} from 'react'

// createContext() 类似全局变量
const { Provider, Consumer } = createContext(30)

// 消费者
class Leaf extends Component {
  render () {
    return (
      // Consumer 不能渲染其它组件，必须声明一个函数
      <Consumer>
        { battery => <h1>Consumer: {battery} </h1> }
      </Consumer>
    )
  }
}

// 中间组件，无条件的渲染下一级组件
class Middle extends Component {
  render () {
    return <Leaf />
  }
}

class App extends Component {
  render () {
    return (
      <Provider value={100}>
        <Middle />
      </Provider>
    )
  }
}

export default App
