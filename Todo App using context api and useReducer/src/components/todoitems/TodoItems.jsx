import styles from './TodoItems.module.css'
import SingleTodo from '../singletodo/SingleTodo'

const TodoItems = ({todoItems, deleteItem}) => {
  return (
    <div className={styles.todoItems}>
      {todoItems.map((item)=> <SingleTodo key={item.id} id={item.id} todoName={item.todoName} todoDate={item.todoDate} deleteItem={deleteItem} />)}
    </div>
  )
}

export default TodoItems
