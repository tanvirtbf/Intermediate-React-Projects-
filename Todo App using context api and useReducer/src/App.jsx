import AppName from './components/appname/AppName'
import styles from  './App.module.css'
import AddTodo from './components/addtodo/AddTodo'
import { useState } from 'react'

function App() {

  const [todoItems, setTodoItems] = useState([])

  const addNewItem = (todoName,todoDate)=>{
    setTodoItems((prevState)=> [...prevState, {id: crypto.randomUUID(), todoName: todoName, todoDate: todoDate}])
  }

  return (
    <div className={styles.main}>
      <AppName />
      <AddTodo addNewItem={addNewItem} />
    </div>
  )
}

export default App
