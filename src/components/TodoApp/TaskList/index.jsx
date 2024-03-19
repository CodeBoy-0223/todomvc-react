import { Component } from 'react'
import './index.css'
import TaskItem from './TaskItem'

export default class TaskList extends Component {
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
					<TaskItem />
					<TaskItem />
				</ul>
			</main>
		)
	}
}
