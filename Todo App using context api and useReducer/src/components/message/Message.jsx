import { useContext } from 'react'
import styles from './Message.module.css'
import { TodoItemsContext } from '../../store/todo-items-context'

const Message = () => {
  const {todoItems} = useContext(TodoItemsContext)
  return (
    <div className={styles.message}>
      {todoItems.length === 0 && <p>Thank Your!</p>}
    </div>
  )
}

export default Message
