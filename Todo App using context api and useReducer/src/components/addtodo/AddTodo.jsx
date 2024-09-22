import { useState } from 'react'
import styles from './AddTodo.module.css'

const AddTodo = ({addNewItem}) => {

  const [todoName,setTodoName] = useState("")
  const [todoDate,setTodoDate] = useState("")

  function handleClick(){
    addNewItem(todoName,todoDate)
    setTodoName("")
    setTodoDate("")
  }
  return (
    <div className={styles.addTodo}>
      <input type="text" placeholder='Add todo..' value={todoName} onChange={(e)=> setTodoName(e.target.value)} />
      <input type="date" value={todoDate} onChange={(e)=> setTodoDate(e.target.value)} />
      <button onClick={handleClick}>ADD</button>
    </div>
  )
}

export default AddTodo
