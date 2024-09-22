import Card from '../card/Card'
import styles from './Home.module.css'

const Home = ({formData}) => {
  return (
    <div className={styles.cardItems}>
      {formData.length !== 0 && formData.map((form)=> <Card key={form.id} name={form.name} age={form.age} university={form.university} subject={form.subject} designation={form.designation} />)}
    </div>
  )
}

export default Home
