import { Component } from 'react'
import { publish } from 'pubsub-js'

export default class TodoFooter extends Component {
	// 定义状态 - highlight
	state = {
		highlight: '',
	}

	// handler - 切换筛选条件
	handleFilter = type => {
		return () => {
			this.setState({ highlight: type })
			publish('changeFilter', type)
		}
	}

	// handler - 清除所有已完成的todo
	handleClearCompleted = () => {
		publish('clearCompletedTodo')
	}

	render() {
		const { highlight } = this.state

		const filters = [
			{ id: 1, label: 'All', value: '' },
			{ id: 2, label: 'Active', value: 'active' },
			{ id: 3, label: 'Completed', value: 'completed' },
		]

		return (
			<footer className='footer'>
				<span className='todo-count'></span>
				<ul className='filters'>
					{filters.map(({ id, label, value }) => (
						<li key={id} onClick={this.handleFilter(value)}>
							<a href={`#/${value}`} className={highlight === value ? 'selected' : ''}>
								{label}
							</a>
						</li>
					))}
				</ul>
				<button className='clear-completed' onClick={this.handleClearCompleted}>
					Clear completed
				</button>
			</footer>
		)
	}
}
