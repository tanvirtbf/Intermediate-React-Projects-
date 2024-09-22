import styles from './SingleTodo.module.css'

const SingleTodo = () => {
  return (
    <div className={styles.singleTodo}>
      <div>Math</div>
      <div>04/12/2024</div>
      <button className={styles.button}>Remove</button>
    </div>
  )
}

export default SingleTodo
