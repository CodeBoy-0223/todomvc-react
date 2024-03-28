import { Component } from 'react'

export default class TodoItem extends Component {
	// handler - 修改done状态
	handleChange = id => {
		return () => {
			// 此处需要修改父组件中的数据, 为父子组件通信 -- 父组件给子组件传递props, 并且值为一个函数
			this.props.changeDone(id)
		}
	}

	// handler - 删除指定todo
	handleDelete = id => {
		return () => {
			this.props.deleteTodo(id)
		}
	}

	// handler - 指定todo切换至编辑模式
	handleEdit = id => {
		return () => {
			this.props.changeToEdit(id)
		}
	}

	// handler - 保存指定todo
	handleSave = id => {
		return event => {
			if (event.type === 'keyup' && event.key !== 'Enter') return
			const value = event.target.value.trim()
			if (value.length < 2) return
			this.props.saveTodo(id, value)
		}
	}

	render() {
		// 获取 props
		const { id, content, done, isEdit } = this.props

		return (
			<li className={`todo-item${isEdit ? ' editing' : ''}`}>
				<div className='view' onDoubleClick={this.handleEdit(id)}>
					<input className='toggle' type='checkbox' checked={done} onChange={this.handleChange(id)} />
					<label>{content}</label>
					<button className='destroy' onClick={this.handleDelete(id)}></button>
				</div>
				{isEdit && (
					<input
						className='edit'
						autoFocus
						defaultValue={content}
						onBlur={this.handleSave(id)}
						onKeyUp={this.handleSave(id)}
					/>
				)}
			</li>
		)
	}
}
