import styles from './AddTodo.module.css'

const AddTodo = () => {
  return (
    <div className={styles.addTodo}>
      <input type="text" placeholder='Add todo..' />
      <input type="date"  />
      <button>ADD</button>
    </div>
  )
}

export default AddTodo
