import styles from './TodoItems.module.css'
import SingleTodo from '../singletodo/SingleTodo'

const TodoItems = () => {
  return (
    <div className={styles.todoItems}>
      <SingleTodo />
      <SingleTodo />
      <SingleTodo />
    </div>
  )
}

export default TodoItems
