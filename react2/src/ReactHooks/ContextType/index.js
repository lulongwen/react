import React, {Component, createContext} from 'react'

// Provider 是必须的
const BatteryContext = createContext(30)

class Leaf extends Component {
  // contextType 静态变量
  static contextType = BatteryContext
  
  render () {
    const battery = this.context
    
    return <h1>Battery: {battery} </h1>
  }
}

class Middle extends Component {
  render () {
    return <Leaf />
  }
}

class App extends Component {
  state = { battery: 100 }
  
  render () {
    const { battery } = this.state
    return (
      <BatteryContext.Provider value={battery}>
        <button
          type='button'
          onClick={() => this.setState(() => ({ battery: battery+1}))}
        >点击增加</button>
        <Middle />
      </BatteryContext.Provider>
    )
  }
}

export default App
