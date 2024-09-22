import { useContext } from 'react'
import styles from './SideBar.module.css'
import { RootAppContext } from '../../store/app-context'

const SideBar = () => {
  const {themeChanger} = useContext(RootAppContext)

  const handleClick = (arg)=>{
    themeChanger(arg)
    if(arg==='home'){
      document.querySelector('#home').classList.add(`${styles.bgAdd}`)
      document.querySelector('#post').classList.remove(`${styles.bgAdd}`)
    }else {
      document.querySelector('#home').classList.remove(`${styles.bgAdd}`)
      document.querySelector('#post').classList.add(`${styles.bgAdd}`)
    }
  }

  return (
    <div className={styles.sidebar}>
      <p id='home' onClick={()=> handleClick('home')}>Home</p>
      <p id='post' onClick={()=> handleClick('post')}>Create Post</p>
    </div>
  )
}

export default SideBar

