// 引入react核心库
import React from 'react'
// 引入react-dom, 使得react支持操作dom
import ReactDOM from 'react-dom'

// 引入根组件
import App from './App'
// 引入样式文件(样式文件就不做拆分了, 没有实际意义)
import './assets/todomvc/base.css'
import './assets/todomvc/index.css'

// 渲染根组件到页面中
ReactDOM.render(
	// React.StrictMode为React提供的一种严格模式, 可以帮开发人员检查出一些React不推荐的语法以及可能会出现的问题
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.querySelector('#root')
)
