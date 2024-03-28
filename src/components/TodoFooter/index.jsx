import { Component } from 'react'

export default class TodoFooter extends Component {
	render() {
		return (
			<footer className='footer'>
				<span className='todo-count'></span>
				<ul className='filters'>
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
				</ul>
				<button className='clear-completed'>Clear completed</button>
			</footer>
		)
	}
}
