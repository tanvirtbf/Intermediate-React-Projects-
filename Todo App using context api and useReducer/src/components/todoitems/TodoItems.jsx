import styles from './TodoItems.module.css'
import SingleTodo from '../singletodo/SingleTodo'
import { useContext } from 'react'
import { TodoItemsContext } from '../../store/todo-items-context'

const TodoItems = () => {
  const {todoItems} = useContext(TodoItemsContext)
  return (
    <div className={styles.todoItems}>
      {todoItems.map((item)=> <SingleTodo key={item.id} id={item.id} todoName={item.todoName} todoDate={item.todoDate} />)}
    </div>
  )
}

export default TodoItems
