import styles from './Post.module.css'
import SinglePost from '../singlePost/SinglePost'

const Post = () => {
  return (
    <div className={styles.main}>
      <SinglePost />
      <SinglePost />
      <SinglePost />
      <SinglePost />
      <SinglePost />
      <SinglePost />
      <SinglePost />
      <SinglePost />
      <SinglePost />
    </div>
  )
}

export default Post
