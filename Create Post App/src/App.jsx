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

  const [formData,setFormData] = useState([])

  function addFormData(newFormData){
    setFormData([...formData, newFormData])
  }

  return (
    <div className={styles.app}>
      <SideBar themeChanger={themeChanger} />
      {theme==='home'? <Home formData={formData} /> : <CreatePost addFormData={addFormData} />}
    </div>
  )
}

export default App
