import { useState } from 'react'
import styles from './CreatePost.module.css'

const CreatePost = ({addFormData}) => {

  const [data,setData] = useState({
    id:"",
    name:"",
    age:"",
    university:"",
    subject:"",
    designation:"",
  })

  const handleSubmit = (e)=>{
    e.preventDefault()
    addFormData(data)
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formDiv}>
        <label htmlFor="name">Name</label>
        <input type="text" id='name' value={data.name} onChange={(e)=> setData({...data, id:crypto.randomUUID(), name:e.target.value})} />
      </div>
      <div className={styles.formDiv}>
        <label htmlFor="age">Age</label>
        <input type="text" id='age' value={data.age} onChange={(e)=> setData({...data, id:crypto.randomUUID(), age:e.target.value})} />
      </div>
      <div className={styles.formDiv}>
        <label htmlFor="university">University</label>
        <input type="text" id='university' value={data.university} onChange={(e)=> setData({...data, id:crypto.randomUUID(), university:e.target.value})} />
      </div>
      <div className={styles.formDiv}>
        <label htmlFor="subject">Subject</label>
        <input type="text" id='subject' value={data.subject} onChange={(e)=> setData({...data, id:crypto.randomUUID(), subject:e.target.value})} />
      </div>
      <div className={styles.formDiv}>
        <label htmlFor="designation">Designation</label>
        <input type="text" id='designation' value={data.designation} onChange={(e)=> setData({...data, id:crypto.randomUUID(), designation:e.target.value})} />
      </div>
      <div className={styles.formDiv}>
        <button>Submit</button>
      </div>
    </form>
  )
}

export default CreatePost
