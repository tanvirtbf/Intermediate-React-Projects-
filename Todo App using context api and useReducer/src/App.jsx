import AppName from './components/appname/AppName'
import styles from  './App.module.css'
import AddTodo from './components/addtodo/AddTodo'

function App() {

  return (
    <div className={styles.main}>
      <AppName />
      <AddTodo />
    </div>
  )
}

export default App
