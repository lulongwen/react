import React, { Component, PureComponent, memo } from 'react'

// 无状态组件，不能继承 PureComponent
// memo 包括，来达到同样的效果，拆分的越细的组件，使用 memo 的次数越多
const Foo = memo(function Foo(props) {
  console.log('Foo render')
  return <div>{ props.person.age }</div>
})


class App extends Component {
  state = {
    count: 0,
    person: { age: 1 }
  }
  
  render () {
    const { person, count } = this.state
    
    return (
      <div>
        <button type='button'
          onClick={() => {
            person.age++
            this.setState({ count: count + 2 })
          }}>自动增加</button>
        
        <Foo person={person} cb={this.callback} />
      </div>
    )
  }
  
  callback = () => {
    // this
  }
}

export default App
