# React 全家桶 + Antd 后台管理系统

* 技术选型
* 项目架构
    * 页面结构
    * 目录结构
    * 栅格系统
* 项目规范
* 封装项目公共组件
	* 丰富的组件
* 提高开发效率
	* 前沿的前端技术栈
	

```bash
    npx create-react-app demo # 安装 React
    yarn create react-app demo

	yarn start
	yarn test
    yarn eject # 显示 webpack 配置
	yarn build # 打包

yarn add axios react-router

```


## 后台管理系统知识点
* React 全家桶 & Antd
* 地图和 React 集成
* 前端图表开发技巧
* 前端后台架构设计，公共组件封装，后台管理系统开发经验


## 前端架构
```jsx
    public/assets/ 打包后的静态资源目录
        css, images
```


## react-router-dom 文档
* [react training](https://reacttraining.com/react-router/web/guides/quick-start)


## 工具文档
* [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
* [React documentation React文档](https://reactjs.org/)
* [代码分割 Code Splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### 配置 less
```jsx

// 1 package.json/babel 添加代码
"babel": {
    "presets": [
      "react-app"
    ],
    "plugins": [
      ["import",
        {
          "libraryName": "antd",
          "style": true
        }
      ]
    ]
}

// 2 config/webpack.config.js 85 行的 const getStyleLoaders 
// const loaders 数组后面添加 less-loader
{
    loader:require.resolve('less-loader'),
    options:{
      javascriptEnabled: true    //允许通过js调用antd组件
    }
  }

// 3 46 行 cssRegex 变量后面添加
const cssRegex = /\.(css|less)$/;   //包括less文件


// importLoaders: 1 说明
    1 post-css-loader
    0 no loaders 默认
    2 postcss-loader, sass-loader

// yarn start 不用打开和新标签页
// 注释掉 scripts/start.js 133 行
    openBrowser(urls.localUrlForBrowser);

// 打包后路径问题导致页面空白
    "homepage": ".",

// 设置代理
    "proxy": "http://xxx.xxx"

// 生产环境去掉map文件 webpack.config.prod.js
    devtool: shouldUseSourceMap ? 'source-map' : false
    // 改为
    devtool: false,

```

### webpack.config.prod.js
* react 配置参考 https://www.jianshu.com/p/e09b2c57cf20
* [jsconfig.json](https://create-react-app.dev/docs/importing-a-component/#absolute-imports)
```jsx
// 别名配置 'react-native': 'react-native-web', 后面加上
    '@': path.join(__dirname, '..', 'src')
    '@': paths.appSrc, // paths.appSrc变量是该脚手架中已存在，可直接使用
```


### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


### 代码优化 Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### PWA Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### 高级配置 Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
