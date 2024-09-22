import { useContext } from 'react'
import styles from './SingleTodo.module.css'
import { TodoItemsContext } from '../../store/todo-items-context'

const SingleTodo = ({id, todoName, todoDate }) => {
  const {deleteItem} = useContext(TodoItemsContext)
  return (
    <div className={styles.singleTodo}>
      <div>{todoName}</div>
      <div>{todoDate}</div>
      <button className={styles.button} onClick={()=> deleteItem(id)}>Remove</button>
    </div>
  )
}

export default SingleTodo
