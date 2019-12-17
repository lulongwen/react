import React, {Component, useState} from 'react'

class App2 extends Component {
  state = {
    count: 0
  }
  
  render () {
    const { count } = this.state
    
    return (
      <button
        type='button'
        onClick={() => { this.setState(() => ({count: count++}))}}
      >click 【{count}】</button>
    )
  }
}

// useState 语法
function App () {
  const [count, setCount] = useState(0)
  
  return (
    <button
      type='button'
      onClick={() => {setCount(count++)}}
    >click 【{count}】</button>
  )
}

export default App

