
import './index.css'

//todolist component code, this part of code generates todolist each time user clicks on Add Task button

const TodoItem = props => {
  const {taskDetails} = props
  const {id, name, isCompleted} = taskDetails
  const completedTextClassName = isCompleted ? 'button active' : 'button'
  const completedText = isCompleted ? 'Completed' : 'Mark as completed'

  const onClickCompleted = () => {
    const {toggleIsCompleted} = props
    toggleIsCompleted(id)
  }

  const onDeleteTask = () => {
    const {deleteTask} = props
    deleteTask(id)
  }
  return (
    <li className="task-item">
      <div className="tasks-container">
        <p className="username">{name}</p>
      </div>
      <div className="buttons-container">
        <button
          className={completedTextClassName}
          type="button"
          onClick={onClickCompleted}
        >
          {completedText}
        </button>
        <button
          className="button"
          type="button"
          onClick={onDeleteTask}
          data-testid="delete"
        >
          <img
            className="delete"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default TodoItem
