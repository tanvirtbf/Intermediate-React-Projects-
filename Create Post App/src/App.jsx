import { useReducer, useState } from 'react'
import styles from './App.module.css'
import CreatePost from './components/createPost/CreatePost'
import Home from './components/home/Home'
import SideBar from './components/sidebar/SideBar'
import { RootAppContext } from './store/app-context'
import Message from './components/message/Message'

function reducer(initialState, action){
  let newState = initialState

  if(action.type === 'ADD'){ 
    newState = [...initialState, action.payload.newFormData]
  }else if(action.type === 'DELETE'){
    newState = initialState.filter((item)=> item.id !== action.payload.id)
  }

  return newState
}

function App() {

  const [formData,dispatch] = useReducer(reducer, [])

  const [theme,SetTheme] = useState('home')
  function themeChanger(arg){
    SetTheme(arg)
  }


  function addFormData(newFormData){
    dispatch({type:'ADD', payload:{newFormData: newFormData}})
  }

  function deleteFormData(id){
    dispatch({type:'DELETE', payload: {id:id}})
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
