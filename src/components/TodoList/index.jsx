import { Component } from 'react'
// 引入子组件
import TodoItem from './TodoItem'

export default class TodoList extends Component {
	// TodoMvc应用所依赖的状态只在TodoList组件中进行展示, 而在其他组件中只是会修改它的值. 因此可以把状态定义在此处
	state = {
		todoList: [
			{ id: '001', content: '学习react', done: false },
			{ id: '002', content: '学习AI知识', done: false },
		],
	}

	render() {
		// 获取状态 - todoList
		const { todoList } = this.state

		return (
			<main className='main'>
				<div className='toggle-all-container'>
					<input className='toggle-all' type='checkbox' />
					<label className='toggle-all-label' htmlFor='toggle-all'>
						Mark all as complete
					</label>
				</div>
				<ul className='todo-list'>
					{/* 使用状态 - todoList */}
					{todoList.map(todo => (
						<TodoItem key={todo.id} {...todo} />
					))}
				</ul>
			</main>
		)
	}
}
