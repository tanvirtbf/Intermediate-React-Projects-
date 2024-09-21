import styles from './InputButton.module.css'

const InputButton = ({children}) => {
  return (
    <div className={styles.inputBtn}>
      {children}
    </div>
  )
}

export default InputButton
