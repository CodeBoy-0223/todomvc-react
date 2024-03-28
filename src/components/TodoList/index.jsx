import { Component } from 'react'
// 引入子组件
import TodoItem from './TodoItem'

export default class TodoList extends Component {
	render() {
		return (
			<main className='main'>
				<div className='toggle-all-container'>
					<input className='toggle-all' type='checkbox' />
					<label className='toggle-all-label' htmlFor='toggle-all'>
						Mark all as complete
					</label>
				</div>
				<ul className='todo-list'>
					<TodoItem />
				</ul>
			</main>
		)
	}
}
