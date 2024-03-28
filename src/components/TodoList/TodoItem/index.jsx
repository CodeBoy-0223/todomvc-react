import { Component } from 'react'

export default class TodoItem extends Component {
	render() {
		return (
			<li className='todo-item'>
				<div className='view'>
					<input className='toggle' type='checkbox' />
					<label>task-1</label>
					<button className='destroy'></button>
				</div>
			</li>
		)
	}
}
