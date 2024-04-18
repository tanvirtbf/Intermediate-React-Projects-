import styles from './Post.module.css'
import SinglePost from '../singlePost/SinglePost'
import { useContext } from 'react'
import { ProjectContext } from '../../store/project-context'

const Post = () => {
  const {data} = useContext(ProjectContext)
  console.log(data)
  return (
    <div className={styles.main}>
      { data.length === 0 ? <h1 style={{width: '100%', height:'100vh', textAlign:'center'}}>No Post Here</h1> :  data.map((item, i) => <SinglePost key={i} name={item.name} schoolname={item.schoolname} goal={item.goal} job={item.job} />)}
    </div>
  )
}

export default Post
