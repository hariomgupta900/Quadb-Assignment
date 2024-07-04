import {Component} from 'react'
import {v4} from 'uuid'

import TodoItem from '../TodoItems'

import './index.css'

// Class Component is used


class Todos extends Component {
  state = {
    nameInput: '',
    taskInput: '',
    tasksList: [],
  }

  deleteTask = taskId => {
    const {tasksList} = this.state

    this.setState({
      tasksList: tasksList.filter(tasks => tasks.id !== taskId),
    })
  }

  toggleIsCompleted = id => {
    this.setState(prevState => ({
      tasksList: prevState.tasksList.map(eachTask => {
        if (id === eachTask.id) {
          return {...eachTask, isCompleted: !eachTask.isCompleted}
        }
        return eachTask
      }),
    }))
  }

  // Component Todo item will be rendered in list form at end of of homepage
  renderTasksList = () => {
    const {tasksList} = this.state

    return tasksList.map(eachTask => (
      <TodoItem
        key={eachTask.id}
        taskDetails={eachTask}
        toggleIsCompleted={this.toggleIsCompleted}
        deleteTask={this.deleteTask}
      />
    ))
  }

  onAddTask = event => {
    event.preventDefault()
    const {nameInput, taskInput} = this.state
    const newTask = {
      id: v4(),
      name: nameInput,
      task: taskInput,
      date: new Date(),
      isCompleted: false,
    }

    this.setState(prevState => ({
      tasksList: [...prevState.tasksList, newTask],
      nameInput: '',
      taskInput: '',
    }))
  }

  onChangeTaskInput = event => {
    this.setState({
      taskInput: event.target.value,
    })
  }

  onChangeNameInput = event => {
    this.setState({
      nameInput: event.target.value,
    })
  }

  //Raw structure of web application is defined here
  render() {
    const {nameInput, tasksList} = this.state
    return (
      <div className="main-container">
        <div className="sub-container-1">
          <form onSubmit={this.onAddTask}>
            <div className="component-container">
              <h1 className="app-heading">Todo List</h1>
              <p className="form-description">Schedule your Tasks</p>
              <input
                type="text"
                placeholder="Your Name"
                value={nameInput}
                onChange={this.onChangeNameInput}
                size="40"
                className="name-input"
                required
              />
              <br />

              <button type="submit" className="add-button">
                Add Task
              </button>
            </div>
          </form>
        </div>

        <p className="heading">
          <span className="comments-count">{tasksList.length}</span>
          Total Tasks
        </p>
        <ul className="comments-list">{this.renderTasksList()}</ul>
      </div>
    )
  }
}
export default Todos
