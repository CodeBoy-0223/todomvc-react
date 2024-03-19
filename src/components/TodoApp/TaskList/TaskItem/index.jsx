import React, { Component } from 'react'
import './index.css'

export default class TaskItem extends Component {
	// 更改 task 的 done 状态
	handleChangeDone = id => {
		/*
            分析:
                1. 改变 task 的 done 状态, 实际上要操作 taskList 中的数据, 因此组件通信方式为: 祖孙之间传递数据
                2. 孙组件传递数据给祖辈组件, 因此 props 为函数
                3. 因为该函数要接收额外的参数(id), 因此可以使用高阶函数
        */
		return e => {
			this.props.changeTaskDoneStatus(id, e.target.checked)
		}
	}

	// 移除 task
	handleDestroyTask = id => {
		return () => {
			if (window.confirm('您确定要删除该task吗?')) {
				this.props.destroyTask(id)
			}
		}
	}

	// 切换 task 至编辑模式
	handleEditTask = (id, content) => {
		return () => {
			// 切换模式
			this.props.editTask(id)
		}
	}

	// 保存 task
	handleSavaTask = id => {
		return e => {
			const content = e.target.value
			if (!content) return
			switch (e.type) {
				case 'blur':
					this.props.saveTask(id, content)
					break
				case 'keyup':
					if (e.key === 'Enter') {
						this.props.saveTask(id, content)
					}
					break
				default:
					break
			}
		}
	}

	render() {
		// 接收父组件传递过来的 props
		const { id, content, done, editing } = this.props

		return (
			<li className={['todo-item', editing && ' editing']} onDoubleClick={this.handleEditTask(id, content)}>
				<div className='view'>
					<input className='toggle' type='checkbox' checked={done} onChange={this.handleChangeDone(id)} />
					<label>{content}</label>
					<button className='destroy' onClick={this.handleDestroyTask(id)}></button>
				</div>
				{editing && (
					<input
						ref={e => (this.inputRef = e)}
						type='text'
						className='edit'
						onBlur={this.handleSavaTask(id)}
						onKeyUp={this.handleSavaTask(id)}
					/>
				)}
			</li>
		)
	}

    // 模拟 vue 中的 nextTick?
	componentDidUpdate(prevProps) {
		const { editing, content } = prevProps
		// 如果 prevProps 中的 editing 为 false, 且 this.inputRef 有值, 则表明当前操作为切换edit模式
		if (!editing && this.inputRef) {
			// 聚焦
			this.inputRef.focus()
			// 回显数据
			this.inputRef.value = content
		}
	}
}
