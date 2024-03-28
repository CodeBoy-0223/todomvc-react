import { Component } from 'react'
import { publish } from 'pubsub-js'
import { nanoid } from 'nanoid'

export default class TodoHeader extends Component {
    // 添加一条todo, 涉及到兄弟组件之间进行通信, 此处使用消息订阅与发布(pub-sub)实现
	handleAddTodo = event => {
		if (event.key !== 'Enter') return
		const value = event.target.value.trim()
		if (value.length < 2) return
		// 消息发布
		publish('addTodo', {
			id: nanoid(),
			content: value,
			done: false,
			isEdit: false,
		})
		// 清空输入框
		event.target.value = ''
	}

	render() {
		return (
			<header className='header'>
				<h1>todos</h1>
				<input
					className='new-todo'
					placeholder='What needs to be done?'
					autoFocus
					onKeyUp={this.handleAddTodo}
				/>
			</header>
		)
	}
}
