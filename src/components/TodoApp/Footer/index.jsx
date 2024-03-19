import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
	// 移除所有已完成的 task
	handleClearCompletedTask = () => {
		this.props.clearCompletedTask()
	}

	render() {
		const { taskList } = this.props
		return (
			<footer className='footer'>
				<span className='todo-count'>{taskList.filter(task => !task.done).length} items left!</span>
				{/* 因为暂时还没有接触到 props 之外的组件通信方式以及路由, 因此 filters 这一块的内容暂时不做 */}
				{/* <ul className='filters'>
					<li>
						<a href='#/' className='selected'>
							All
						</a>
					</li>
					<li>
						<a href='#/active'>Active</a>
					</li>
					<li>
						<a href='#/completed'>Completed</a>
					</li>
				</ul> */}
				<button className='clear-completed' onClick={this.handleClearCompletedTask}>
					Clear completed
				</button>
			</footer>
		)
	}
}
