import React, { Component, PureComponent} from 'react'


// PureComponent 提供了对比算法，避免组件重新渲染，提升性能。
// 对比的是：简单数据类型，传入的 props 数据第一级改变，才会重新渲染，
// 如果是对象改变，不会重新渲染，[] {} 改变不会重新渲染，一个新对象会重新渲染 {...{}}
class Foo extends PureComponent {
  render () {
    console.log('Foo render')
    return <div>{ this.props.person.age }</div>
  }
}

class App extends Component {
  state = {
    count: 0,
    person: { age: 1 }
  }
  
  render () {
    const { person, count } = this.state
    return (
      <div>
        <button
          type='button'
          onClick={() => {
            person.age++
            this.setState(() => ({
              count: count + 1
            }))
          }}
        >自动增加</button>
        {/* 传入新的内联函数，也会触发重新渲染 */}
        {/*<Foo person={person} cb={() => {}} />*/}
        
        {/* 解决重新渲染 */}
        <Foo person={person} cb={this.callback} />
      </div>
    )
  }
  
  callback = () => {
    // this
  }
}

export default App
