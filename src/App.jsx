import { Component } from 'react'
// 引入子组件
import TodoApp from './components/TodoApp'
import Footer from './components/Footer'

// 类式组件
export default class App extends Component {
	render() {
		return (
			<>
				<TodoApp />
                <Footer />
			</>
		)
	}
}
