import { Component } from 'react'
import './index.css'

export default class Footer extends Component {
	render() {
		return (
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
		)
	}
}
