# React 实战 - 卢珑文

### npm install & yarn add
```bash
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
* Charles捕获不到localhost请求，前端数据404问题
* [http://localhost.charlesproxy.com](https://www.charlesproxy.com/documentation/faqs/localhost-traffic-doesnt-appear-in-charles/)
```bash
C:\Windows\System32\drivers\etc\hosts 设置
  127.0.0.1 localhost.charlesproxy.com  
```


## react-transition-group

```jsx harmony
  <CSSTransition
    unmountOnExit
    in={this.state.show}
    timeout={1200}
    className={fade}
    appear={true}
    onEntered={el => el.style.color='pink'}
  >
    unmountOnExit 离场删除 DOM
    onEntered 入场动画完成后的，回调函数
      el 指的是内部的元素

    appear={true} 第一次进入页面就有动画

```


## Chrome Reduce
* Reduce-devTools https://github.com/zalmoxisus/redux-devtools-extension
