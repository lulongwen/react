import React, { Component } from 'react'

// react 技巧
class Life extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 1
    }
  }
  // state 的简洁语法，声明 state
  // state = { number: 1 }
  
  
  render () {
    // style={{color: '#90f'}}
    const style = {
      padding: '10px',
      borderColor: '#90f'
    }
    return (
      <div style={style}>
        <button onClick={this.fnClick}>点击</button>
      </div>
    )
  }
  
  // 箭头函数代替 this.fnClick.bind(this)
  fnClick = () => {
    this.setState(() => {
      this.state.number++
    })
  }
}

export default Life
