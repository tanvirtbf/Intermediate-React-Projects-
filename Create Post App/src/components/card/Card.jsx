import styles from './Card.module.css'

const Card = ({name,age,university,subject,designation}) => {
  return (
    <div className={styles.card}>
      <div>
        <h4>Name : </h4>
        <p>{name}</p>
      </div>
      <div>
        <h4>Age : </h4>
        <p>{age}</p>
      </div>
      <div>
        <h4>University : </h4>
        <p>{university}</p>
      </div>
      <div>
        <h4>Subject : </h4>
        <p>{subject}</p>
      </div>
      <div>
        <h4>Designation : </h4>
        <p>{designation}</p>
      </div>
    </div>
  )
}

export default Card
