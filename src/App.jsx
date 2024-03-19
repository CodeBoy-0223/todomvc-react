import { Component } from 'react'

// 类式组件
export default class App extends Component {
	render() {
		return (
			<>
				<section className='todoapp'>
					<header className='header'>
						<h1>todos</h1>
						<input className='new-todo' placeholder='What needs to be done?' autoFocus />
					</header>
					<main className='main'>
						<div className='toggle-all-container'>
							<input className='toggle-all' type='checkbox' />
							<label className='toggle-all-label' htmlFor='toggle-all'>
								Mark all as complete
							</label>
						</div>
						<ul className='todo-list'></ul>
					</main>
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
			</>
		)
	}
}
