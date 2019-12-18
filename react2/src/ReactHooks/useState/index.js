import React, {Component, useState} from 'react'

class App1 extends Component {
  state = { count: 0 }
  
  render () {
    const { count } = this.state
    
    return (
      <button
        type='button'
        onClick={() => { this.setState({count: count + 2})}}
      >click 【{count}】</button>
    )
  }
}

// hooks useState 语法
function App () {
  // 有多个：按照运行的次序，
  const [count, setCount] = useState(0)
  
  return (
    <button
      type='button'
      onClick={() => {setCount(count + 2)}}
    >click 【{count}】</button>
  )
}

export default App
