import React, { Component } from 'react'
import './index.css'

export default class TaskItem extends Component {
	render() {
		return (
			<li className='todo-item'>
				<div className='view'>
					<input className='toggle' type='checkbox' />
					<label>task</label>
					<button className='destroy'></button>
				</div>
			</li>
		)
	}
}
