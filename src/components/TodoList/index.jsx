import { Component } from 'react'
// 引入子组件
import TodoItem from './TodoItem'

export default class TodoList extends Component {
	// TodoMvc应用所依赖的状态只在TodoList组件中进行展示, 而在其他组件中只是会修改它的值. 因此可以把状态定义在此处
	state = {
		todoList: [
			{ id: '001', content: '学习react', done: false, isEdit: false },
			{ id: '002', content: '学习AI知识', done: false, isEdit: false },
		],
	}

	// 修改指定todo的done状态
	changeDone = id => {
		this.setState({
			todoList: this.state.todoList.map(todo => {
				if (todo.id === id) {
					todo.done = !todo.done
				}
				return todo
			}),
		})
	}

	// 修改所有todo的done状态
	changeAllDone = () => {
		this.setState({
			todoList: this.state.todoList.map(todo => {
				todo.done = !todo.done
				return todo
			}),
		})
	}

	// 删除指定todo
	deleteTodo = id => {
		this.setState({
			todoList: this.state.todoList.filter(todo => todo.id !== id),
		})
	}

	// 更改指定todo的编辑状态
	changeToEdit = id => {
		this.setState({
			todoList: this.state.todoList.map(todo => {
				if (todo.id === id) {
					todo.isEdit = true
				}
				return todo
			}),
		})
	}

	// 保存指定todo
	saveTodo = (id, content) => {
		this.setState({
			todoList: this.state.todoList.map(todo => {
				if (todo.id === id) {
					todo.content = content
					todo.isEdit = false
				}
				return todo
			}),
		})
	}

	render() {
		// 获取状态 - todoList
		const { todoList } = this.state

		return (
			<main className='main'>
				<div className='toggle-all-container'>
					<input id='toggle-all' className='toggle-all' type='checkbox' />
					<label className='toggle-all-label' htmlFor='toggle-all' onClick={this.changeAllDone}>
						Mark all as complete
					</label>
				</div>
				<ul className='todo-list'>
					{/* 使用状态 - todoList */}
					{todoList.map(todo => (
						<TodoItem
							key={todo.id}
							{...todo}
							changeDone={this.changeDone}
							deleteTodo={this.deleteTodo}
							changeToEdit={this.changeToEdit}
							saveTodo={this.saveTodo}
						/>
					))}
				</ul>
			</main>
		)
	}
}
