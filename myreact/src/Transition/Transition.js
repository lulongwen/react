import React, { Component, Fragment } from 'react'
import { CSSTransition }  from "react-transition-group"
import './transition-group.css'

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
        <CSSTransition
          unmountOnExit
          in={this.state.show}
          timeout={1200}
          className='fade'
          appear={true}
          onEntered={el => el.style.color='pink'}
        >
          <div>React 动画</div>
        </CSSTransition>
        
        <button onClick={this.fnClick}>切换动画</button>
      </Fragment>
    )
  }
  
  fnClick () {
    this.setState(() => ({show: !this.state.show}))
  }
}

export default App
