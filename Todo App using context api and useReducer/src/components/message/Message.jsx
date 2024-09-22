import styles from './Message.module.css'

const Message = ({todoItems}) => {

  return (
    <div className={styles.message}>
      {todoItems.length === 0 && <p>Thank Your!</p>}
    </div>
  )
}

export default Message
