import Home from './components/home/Home'
import CreatePost from './components/createPost/CreatePost'
import './App.module.css'
import SideBar from './components/sidebar/SideBar'

function App() {

  return (
    <>
      <SideBar />
      <Home />
      <CreatePost />
    </>
  )
}

export default App
