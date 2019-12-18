# React Error


## ` Cannot read property 'Consumer' of undefined `
```jsx
"export '__RouterContext' was not found in 'react-router'

// 解决方法
是react-router-dom": "^4.3.1"依赖的问题，将^去掉，不然会安装4.3.4版本
删除 package-lock.json
  node_modules/ 或 npm i react-router-dom 
```


## Expected `onClick` listener to be a function, instead got a value of `string` type
```jsx
// 错误的写法
  onClick="openSmallDesktopAboutusForm()"
  onClick={this.handleAdd}

// 正确的写法：没有引号
	<button onClick={this.handleAdd}>点击一下</button>
```



## TypeError: Cannot read property 'bind' of undefined
```
// this.handleAdd 方法没找到
	this.handleAdd.bind(this) 
```


## Import in body of module; reorder to top import/first
* import 放在最上面，const 上面
* import 语句应该放在最前面，至少要放到const定义变量的前面
