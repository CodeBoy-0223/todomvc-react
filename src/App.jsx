import { Component, Fragment } from 'react'
// 引入子组件
import TodoHeader from './components/TodoHeader'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'

// 类式组件
export default class App extends Component {
	render() {
		return (
			<Fragment>
				<section className='todoapp'>
					<TodoHeader />
					<TodoList />
					<TodoFooter />
				</section>
				<footer className='info'>
					<p>Double-click to edit a todo</p>
					<p>
						Created by <a href='http://twitter.com/oscargodson'>Oscar Godson</a>
					</p>
					<p>
						Refactored by <a href='https://github.com/cburgmer'>Christoph Burgmer</a>
					</p>
					<p>Maintenanced by the TodoMVC team</p>
					<p>
						Part of <a href='http://todomvc.com'>TodoMVC</a>
					</p>
				</footer>
			</Fragment>
		)
	}
}
