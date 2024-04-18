import styles from './Post.module.css'
import SinglePost from '../singlePost/SinglePost'
import { useContext } from 'react'
import { ProjectContext } from '../../store/project-context'

const Post = () => {
  const {data} = useContext(ProjectContext)
  console.log(data)
  return (
    <div className={styles.main}>
      {data.map((item, i) => <SinglePost key={i} name={item.name} schoolname={item.schoolname} goal={item.goal} job={item.job} />)}
    </div>
  )
}

export default Post
