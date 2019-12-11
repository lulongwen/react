import React, { Component, Fragment } from 'react'
import './style.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      show: true
    }
    this.fnClick = this.fnClick.bind(this)
  }
  
  render () {
    return (
      <Fragment>
        <div className={this.state.show ? 'show2' : 'hide2' }>React 动画</div>
        <button onClick={this.fnClick}>切换动画</button>
      </Fragment>
    )
  }
  
  fnClick () {
    this.setState(() => ({show: !this.state.show}))
  }
}

export default App
