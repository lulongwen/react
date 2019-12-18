# Redux 状态容器与数据流管理
* 单项数据流：从父组件流向子组件
	* 兄弟组件无法共享数据

```jsx
	
	state
		react中的状态：只读对象，不可直接修改

	reducer
		函数：对 state 的业务处理，记账本

	action
		对象：用于描述事件行为，改变 state

// redux 集成，创建
	reducer.js
	actionTypes.js
	actionCreators.js
	index.js // store

// 组件里，用 connect 方法将 react 组件和 redux 做链接
	export default connect(mapStateToProps, mapDispatchToProps)(TodoList)

// 根组件里 src/index.js，Provider 作为项目的根组件，绑定 store 属性，储存数据

```



## Redux 安装
```jsx
	
	yarn add redux react-redux --save

// redux 调试工具，以下必须都安装
	yarn add redux-devtools-extension --save-dev

```



## Redux 三大原则
1. 单一数据源
2. 状态不可变
3. 纯函数修改状态