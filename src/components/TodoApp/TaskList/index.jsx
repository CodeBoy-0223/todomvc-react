import { Component } from 'react'
import './index.css'
import TaskItem from './TaskItem'

export default class TaskList extends Component {
	render() {
		// 接收父组件传递过来的 props
		const { taskList, changeTaskDoneStatus, destroyTask, editTask, saveTask } = this.props

		return (
			<main className='main'>
				<div className='toggle-all-container'>
					<input className='toggle-all' type='checkbox' />
					<label className='toggle-all-label' htmlFor='toggle-all'>
						Mark all as complete
					</label>
				</div>
				<ul className='todo-list'>
					{/* 使用数组的 map 方法, 遍历生成 TaskItem 组件 */}
					{taskList.map(taskItem => (
						// 这里使用 babel 提供的语法, 将 taskItem 中的属性展开, 以 props 的方式逐个传递给 TaskItem 组件
						<TaskItem
							key={taskItem.id}
							{...taskItem}
							changeTaskDoneStatus={changeTaskDoneStatus}
							destroyTask={destroyTask}
                            editTask={editTask}
                            saveTask={saveTask}
						/>
					))}
				</ul>
			</main>
		)
	}
}
