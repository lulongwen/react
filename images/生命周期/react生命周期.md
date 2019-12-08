# React组件的生命周期

```js
getDefaultProps

getInitialState

componentWillMount

render


componentDidMount

componentWillReceiveProps


shouldComponentUpdate

componentWillUpdate

componentDidUpdate

componentWillUnmount



第一阶段可能会调用下面这些生命周期函数，说是“可能会调用”是因为不同生命周期调用的函数不同
  componentWillMount
  componentWillReceiveProps
  shouldComponentUpdate
  componentWillUpdate


生命周期函数则会在第二阶段调用
  componentDidMount
  componentDidUpdate
  componentWillUnmount

在React Fiber中，第一阶段中的生命周期函数在一次加载和更新过程中可能会被多次调用！

```