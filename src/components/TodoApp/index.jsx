import { Component } from 'react'
import './index.css'
// 引入子组件
import Header from './Header'
import TaskList from './TaskList'
import Footer from './Footer'

export default class TodoApp extends Component {
	render() {
		return (
			<section className='todoapp'>
				<Header />
				<TaskList />
				<Footer />
			</section>
		)
	}
}
