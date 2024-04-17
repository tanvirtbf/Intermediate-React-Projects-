import styles from './Header.module.css'
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div className={styles.main}>
      <div>
        <Link to={'/'}>Home</Link>
      </div>
      <div>
        <Link to={'/post'}>Post</Link>
      </div>
    </div>
  )
}

export default Header
