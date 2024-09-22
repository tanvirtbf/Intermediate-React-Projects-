import styles from './SingleTodo.module.css'

const SingleTodo = ({id, todoName, todoDate, deleteItem}) => {
  return (
    <div className={styles.singleTodo}>
      <div>{todoName}</div>
      <div>{todoDate}</div>
      <button className={styles.button} onClick={()=> deleteItem(id)}>Remove</button>
    </div>
  )
}

export default SingleTodo
