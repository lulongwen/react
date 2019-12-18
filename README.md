# React
* React 常用技术栈
* React 设计模式
* 用 React 开发大型项目的能力
	* 常见场景下的编程实战指南


## 项目工程化
1. 项目架构设计
2. 目录结构定义
3. 指定项目开发规范：比如 ESlint 规范
4. 模块化，组件化
5. 前后端接口规范
6. 性能优化
7. 自动化部署
	* 压缩
	* 合并
	* 打包


## 如何避免出现性能问题
* 性能永远是第一需求，时刻考虑性能问题

1. 了解常见的性能问题场景
	* 键盘的输入，页面卡顿
	* 鼠标的移动
	* 页面的缩放

2. 时刻注意代码的潜在性能问题
	* 第三方封装组件的限制
	* 更新 & 页面离开销毁
	* 网络性能优化，自动化按需加载

3. 注重可重构的代码
	* 组件拆分的粒度是否足够细，组件越细优化空间越大
	* 代码的耦合性
	* 切换到页面，才加载对应的代码，webpack 自动化按需加载
	* react-loadable
	* reselect

4. 了解如何使用工具定位性能问题
	* chrome devtools 定位性能瓶颈
	* react devtools 找到多余的渲染，找没用的代码 



## React Router 路由管理
1. React Router 动态路由机制
2. 区分受保护的路由和公开路由
3. 访问未授权的路由，重定向到登录页面



## 集成第三方 JS 库的要点
1. 使用 ref 获取 原生的 DOM
2. 手动将组件更新到 DOM 节点
3. 组件销毁时，删除原生节点

```jsx

	componentDidUpdate(prevProps, prevState) {
		if (this.state.data !== prevSatate.data) this.init()
	}

```


## React 实现布局的方式
1. 原生 CSS 实现
2. 使用 CSS Grid 实现，比如：bootstrap
3. 使用组件库，比如：antd


## React 概念
```
	react-router

	react-router-dom
		https://blog.csdn.net/u014618485/article/details/89517371

	jsx

	props
		传入变量，函数，组件，只读的属性
		props 类型检测，默认值

	state
		初始化 setState 方法，向下传递数据
		this.setState(fn, fn) 是异步的
			第一个 fn 是异步函数
			第二个 fn 是回调函数

	keys
		唯一性
		元素被增加或删除的时候帮助 React 识别哪些元素发生了变化

	context

	dva
		https://www.cnblogs.com/lucas27/p/9292058.html

	函数式组件

	类组件

	高阶组件

	虚拟 DOM
		diff算法

	模板字符串

	属性

	扩展属性


	可变变量 immutable.js
```



## 虚拟 DOM
* 本质上讲就是一个 JS对象
* 之所以能够提升性能，是 JS对象之间的对比，不是真实DOM之间的对比
* 对比的方式就是 diff 算法，找差异
	* jsx - js 对象 （虚拟DOM） - 真实的 DOM
	* 同层比对


### umi.js 可插拔的架构
* 其实就是低耦合
* 功能插件化
* 模块插件化,降低耦合
* 需要的时候就装上去，不需要的时候可以拿下来。 不会牵涉其它框架的使用



## React 核心




## React 项目
* 项目文件夹统一以 大驼峰命名

### BikeAdmin 共享单车后台

### Blog 博客项目

### AntdPro Ant Design Pro

