import { Component } from 'react'
// 引入子组件
import TodoItem from './TodoItem'
// 引入pubsub-js
import { subscribe, unsubscribe } from 'pubsub-js'

export default class TodoList extends Component {
	// TodoMvc应用所依赖的状态只在TodoList组件中进行展示, 而在其他组件中只是会修改它的值. 因此可以把状态定义在此处
	state = {
		todoList: [
			{ id: '001', content: '学习react', done: false, isEdit: false },
			{ id: '002', content: '学习AI知识', done: false, isEdit: false },
		],
		filter: '',
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

	// 新增todo
	addTodo = todo => {
		this.setState({
			todoList: [...this.state.todoList, todo],
		})
	}

	// 更新filter, 切换展示的todoList
	changeFilter = type => {
		this.setState({
			filter: type,
		})
	}

    // 清除已完成的todo
	clearCompletedTodo = () => {
		this.setState({
			todoList: this.state.todoList.filter(todo => !todo.done),
		})
	}

	// 组件挂载完成后执行的钩子
	componentDidMount() {
		// 组件挂载完成后, 订阅消息
		this.addTodoToken = subscribe('addTodo', (_, data) => {
			this.addTodo(data)
		})
		this.changeFilterToken = subscribe('changeFilter', (_, type) => {
			this.changeFilter(type)
		})
		this.clearCompletedTodoToken = subscribe('clearCompletedTodo', () => {
			this.clearCompletedTodo()
		})
	}

	// 组件将要卸载时执行的钩子
	componentWillUnmount() {
		// 组件将要卸载时, 取消订阅
		unsubscribe(this.addTodoToken)
		unsubscribe(this.changeFilterToken)
		unsubscribe(this.clearCompletedTodoToken)
	}

	render() {
		// 获取状态 - todoList
		const { todoList, filter } = this.state

		// 计算得到页面实际渲染的todoList
		const renderTodoList = todoList.filter(todo => {
			switch (filter) {
				case 'active':
					return todo.done === false
				case 'completed':
					return todo.done === true
				default:
					return true
			}
		})

		return (
			<main className='main'>
				<div className='toggle-all-container'>
					<input id='toggle-all' className='toggle-all' type='checkbox' />
					<label className='toggle-all-label' htmlFor='toggle-all' onClick={this.changeAllDone}>
						Mark all as complete
					</label>
				</div>
				<ul className='todo-list'>
					{/* 使用计算后的todoList - renderTodoList */}
					{renderTodoList.map(todo => (
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
