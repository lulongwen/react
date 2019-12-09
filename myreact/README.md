# React 实战 - 卢珑文

### npm install & yarn add
* [npx create-react-app demo](https://create-react-app.dev/docs/getting-started)
```bash
# 初始化项目
  yarn create react-app my-app

  // 选择模板
  npx create-react-app my-app --template [template-name]

  // typescript
  npx create-react-app my-app --template typescript

  yarn add axios immutable redux react-transition-group styled-components redux-thunk

  yarn add styled-components

  yarn add react-transition-group

  yarn add antd axios

  yarn add redux redux-thunk

  yarn add redux-saga
  
```

## React 命令行

```bash
  npm start
    http://localhost:3000
  
  npm test
  
  npm run build
  
  npm run eject
    暴露 React 配置项
  
```


## Eslint 配置
```jsx
1. 根目录新建 .eslintrc

2. 从 package.json 删除 
  "eslintConfig": {
    "extends": "react-app"
  },
  

```


## Charles 模拟接口数据
* ` localhost.charlesproxy.com `
* Charles捕获不到localhost请求，前端数据404问题
* [http://localhost.charlesproxy.com](https://www.charlesproxy.com/documentation/faqs/localhost-traffic-doesnt-appear-in-charles/)
```bash
C:\Windows\System32\drivers\etc\hosts 设置
  127.0.0.1 localhost.charlesproxy.com  
```


## react-transition-group React 动画
* https://github.com/reactjs/react-transition-group
* https://reactcommunity.org/react-transition-group/transition
* https://reactcommunity.org/react-transition-group/css-transition
* https://reactcommunity.org/react-transition-group/switch-transition
* https://reactcommunity.org/react-transition-group/transition-group

```jsx
  <CSSTransition
    unmountOnExit
    in={this.state.show}
    timeout={1200}
    classNames={fade}
    appear={true}
    onEntered={el => el.style.color='pink'}
  >
    unmountOnExit 离场删除 DOM
    onEntered 入场动画完成后的，回调函数
      el 指的是内部的元素

    appear={true} 第一次进入页面就有动画

```


## Chrome Reduce
* [Reduce-devTools](https://github.com/zalmoxisus/redux-devtools-extension) 
* 1.2 Advanced store setup 高级配置


## Redux-thunk 中间件进行 ajax 发送
* https://github.com/reduxjs/redux-thunk

## Redux-saga
* https://github.com/redux-saga/redux-saga

## React-Redux
* 
