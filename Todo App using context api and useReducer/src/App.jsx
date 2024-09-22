import AppName from './components/appname/AppName'
import styles from  './App.module.css'
import AddTodo from './components/addtodo/AddTodo'
import { useState } from 'react'
import TodoItems from './components/todoitems/TodoItems'
import Message from './components/message/Message'

function App() {
  const [todoItems, setTodoItems] = useState([])
  console.log(todoItems)
  const addNewItem = (todoName,todoDate)=>{
    setTodoItems((prevState)=> [...prevState, {id: crypto.randomUUID(), todoName: todoName, todoDate: todoDate}])
  }

  const deleteItem = (id)=>{
    const newTodoItems = todoItems.filter((item)=> item.id !== id)
    setTodoItems(newTodoItems)
  }

  return (
    <div className={styles.main}>
      <AppName />
      <AddTodo addNewItem={addNewItem} />
      <TodoItems todoItems={todoItems} deleteItem={deleteItem} />
      <Message todoItems={todoItems} />
    </div>
  )
}

export default App
