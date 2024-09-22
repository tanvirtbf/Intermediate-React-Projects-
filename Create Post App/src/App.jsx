import { useState } from 'react'
import styles from './App.module.css'
import CreatePost from './components/createPost/CreatePost'
import Home from './components/home/Home'
import SideBar from './components/sidebar/SideBar'
import { RootAppContext } from './store/app-context'
import Message from './components/message/Message'

function App() {
  const [theme,SetTheme] = useState('home')
  function themeChanger(arg){
    SetTheme(arg)
  }

  const [formData,setFormData] = useState([])

  function addFormData(newFormData){
    setFormData([...formData, newFormData])
  }

  function deleteFormData(id){
    const newFormData = formData.filter((item)=> item.id !== id)
    setFormData(newFormData)
  }

  return (
    <RootAppContext.Provider value={{
      themeChanger,
      formData,
      addFormData,
      deleteFormData,
    }}>
      <div className={styles.app}>
      <SideBar />
      {theme==='home'? formData.length === 0 ? <Message /> : <Home /> : <CreatePost />}
    </div>
    </RootAppContext.Provider>
  )
}

export default App
