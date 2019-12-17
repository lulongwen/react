import React, {Component, createContext} from 'react'

// 默认值的场景，找不到 Provider 的值时候，不会被大规模使用
const { Consumer, Provider} = createContext(30)

class Leaf extends Component {
  render () {
    return (
      <Consumer>
        { battery => <h1>Battery: {battery} </h1> }
      </Consumer>
    )
  }
}

class Middle extends Component {
  render () {
    return <Leaf />
  }
}

class App extends Component {
  state = {
    battery: 100
  }
  
  render () {
    const { battery } = this.state
    return (
      <Provider value={battery}>
        <button
          type='button'
          onClick={() => this.setState(() => ({ battery: battery+1}))}
        >点击增加</button>
        <Middle />
      </Provider>
    )
  }
}

export default App
