import styles from './TodoInput.module.css'
const TodoInput = () => {
  return (
    <div className={styles.todoInput}>
      <input type="text" placeholder='Enter Todo Here' />
      <input type="date" name="" id="" />
    </div>
  )
}

export default TodoInput
