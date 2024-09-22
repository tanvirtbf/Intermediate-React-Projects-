import { useContext } from 'react';
import styles from './Card.module.css'
import { MdDelete } from "react-icons/md";
import { RootAppContext } from '../../store/app-context';

const Card = ({id,name,age,university,subject,designation}) => {
  const {deleteFormData} = useContext(RootAppContext)
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
      <MdDelete onClick={()=>deleteFormData(id)} className={styles.deleteIcon} />
    </div>
  )
}

export default Card
