import { Component } from 'react'
import './index.css'
// 引入子组件
import Header from './Header'
import TaskList from './TaskList'
import Footer from './Footer'

export default class TodoApp extends Component {
	// 定义状态: 考虑到 Header, TaskList, Footer 三个子组件中均会使用到 taskList, 因此使用状态提升机制, 将状态写到父组件中
	state = {
		taskList: [],
	}

	// 新增 task
	addTask = task => {
		const { taskList } = this.state
		this.setState({
			taskList: [...taskList, task],
		})
	}

	// 更改 task 的 done 状态
	changeTaskDoneStatus = (id, done) => {
		const { taskList } = this.state
		this.setState({
			taskList: taskList.map(task => {
				if (task.id === id) {
					task.done = done
				}
				return task
			}),
		})
	}

    // 切换 task 至编辑模式
    editTask = (id) => {
        const { taskList } = this.state
		this.setState({
			taskList: taskList.map(task => {
				if (task.id === id) {
					task.editing = true
				}
				return task
			}),
		})
    }

    // 保存 task
    saveTask = (id, content) => {
        const { taskList } = this.state
        this.setState({
			taskList: taskList.map(task => {
				if (task.id === id) {
					task.editing = false
                    task.content  = content
				}
				return task
			}),
		})
    }

	// 移除 task
	destroyTask = id => {
		const { taskList } = this.state
		this.setState({
			taskList: taskList.filter(task => task.id !== id),
		})
	}

	// 移除所有已完成的 task
	clearCompletedTask = () => {
		const { taskList } = this.state
		this.setState({
			taskList: taskList.filter(task => !task.done),
		})
	}

	render() {
		const { taskList } = this.state

		return (
			<section className='todoapp'>
				<Header addTask={this.addTask} />
				{/* 考虑到 TaskList 组件中渲染的 TaskItem 数据来源于 taskList, 因此需要通过 props 的方式传递给子组件 */}
				<TaskList
					taskList={taskList}
					changeTaskDoneStatus={this.changeTaskDoneStatus}
					destroyTask={this.destroyTask}
                    editTask={this.editTask}
                    saveTask={this.saveTask}
				/>
				{taskList.length > 0 && <Footer taskList={taskList} clearCompletedTask={this.clearCompletedTask} />}
			</section>
		)
	}
}
