import React, { Component, Fragment } from 'react'
import { CSSTransition, TransitionGroup }  from "react-transition-group"
import './css/transition-group.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: []
    }
    this.fnClick = this.fnClick.bind(this)
  }
  
  render () {
    return (
      <Fragment>
        <TransitionGroup>
          {
            this.state.list.map((item, i) => {
              return <CSSTransition
                unmountOnExit
                key={`item${i}`}
                timeout={1000}
                classNames='fade'
                appear={true}
                onEntered={el => el.style.color='pink'}>
                <div>React 动画</div>
              </CSSTransition>
            })
          }
        </TransitionGroup>
        <button onClick={this.fnClick}>添加元素动画</button>
      </Fragment>
    )
  }
  
  fnClick () {
    const { list } = this.state
    this.setState(() => ({list: [...list, '添加的元素']}))
  }
}

export default App
