import React, {Component, createContext} from 'react'

const { Consumer, Provider} = createContext(30)
const OnlineContext = createContext()

class Leaf extends Component {
  render () {
    return (
      <Consumer>
        { battery => (
          <OnlineContext.Consumer>
            {online => (
              <h1>Battery: {battery} <br/>
                {/* Boolean 渲染不出来 */}
                <mark>Online: {String(online)}</mark>
              </h1>
            ) }
          </OnlineContext.Consumer>
        ) }
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
    battery: 100, online: true
  }
  
  render () {
    const { battery, online } = this.state
    return (
      <Provider value={battery}>
        <OnlineContext.Provider value={online}>
          <button
            type='button'
            onClick={() => this.setState(() => ({ battery: battery+1}))}
          >点击增加</button>
  
          <br/><br/>
          <button
            type='button'
            onClick={() => this.setState(() => ({ online: !online}))}
          >SWITCH 切换</button>
          <Middle />
        </OnlineContext.Provider>
      </Provider>
    )
  }
}

export default App
