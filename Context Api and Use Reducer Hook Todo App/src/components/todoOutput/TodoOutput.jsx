import styles from './TodoOutput.module.css'

const TodoOutput = ({inputData, setInputData, handleDelete}) => {

  console.log(inputData)
  return (
    <>
      {inputData.map((item)=> <div className={styles.main} key={item.id}>
        <h4>{item.todo}</h4>
        <h4>{item.date}</h4>
        <button onClick={()=>handleDelete(item.id)}>Delete</button>
      </div>)}
    </>
  )
}

export default TodoOutput
