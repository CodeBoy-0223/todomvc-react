import { Component } from 'react'
import { nanoid } from 'nanoid'
import './index.css'

export default class Header extends Component {
	// 新增 task
	handleAddTask = e => {
		if (e.key === 'Enter') {
			// 如果键入的按键为 Enter, 则新增一条 task 至 taskList 中
			/*
                分析:
                    1. 子组件要把用户输入的 task 插入到父组件 taskList 中, 即通信方式为: 子组件给父组件传递数据
                    2. 因此, 父组件需要传递 props 给子组件, 并且该 props 为函数, 函数接收一个参数 task(即为新增的 task), 函数体内执行新增操作
            */
			// 对输入的内容进行限制(目前只做非空限制)
			const content = e.target.value
			if (!content) return

            // 新增 task
			const task = { id: nanoid(), content, done: false, editing: false }
			this.props.addTask(task)

			// 新增成功后, 清除输入框中的内容(已弃用的方式)
			// this.refs.inputRef.value = ''
			this.inputRef.value = ''
		}
	}
    
	render() {
		return (
			<header className='header'>
				<h1>todos</h1>
				<input
					// 注意, 字符串形式的 ref 尽量不用, 官方声明该方式已被弃用
					// ref='inputRef'
					ref={e => (this.inputRef = e)}
					className='new-todo'
					placeholder='What needs to be done?'
					autoFocus
					onKeyUp={this.handleAddTask}
				/>
			</header>
		)
	}
}
