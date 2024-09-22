import Home from './components/home/Home'
import CreatePost from './components/createPost/CreatePost'
import styles from './App.module.css'
import SideBar from './components/sidebar/SideBar'
import { useState } from 'react'

function App() {
  const [theme,SetTheme] = useState('home')

  function themeChanger(arg){
    SetTheme(arg)
  }

  return (
    <div className={styles.app}>
      <SideBar themeChanger={themeChanger} />
      {theme==='home'? <Home /> : <CreatePost />}
    </div>
  )
}

export default App
