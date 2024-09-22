import styles from './CreatePost.module.css'

const CreatePost = ({addFormData}) => {
  const handleSubmit = (e)=>{
    e.preventDefault()
    addFormData()
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formDiv}>
        <label htmlFor="name">Name</label>
        <input type="text" id='name' />
      </div>
      <div className={styles.formDiv}>
        <label htmlFor="age">Age</label>
        <input type="text" id='age' />
      </div>
      <div className={styles.formDiv}>
        <label htmlFor="university">University</label>
        <input type="text" id='university' />
      </div>
      <div className={styles.formDiv}>
        <label htmlFor="subject">Subject</label>
        <input type="text" id='subject' />
      </div>
      <div className={styles.formDiv}>
        <label htmlFor="designation">Designation</label>
        <input type="text" id='designation' />
      </div>
      <div className={styles.formDiv}>
        <button>Submit</button>
      </div>
    </form>
  )
}

export default CreatePost
