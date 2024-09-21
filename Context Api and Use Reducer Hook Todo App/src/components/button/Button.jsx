import styles from './Button.module.css'

const Button = ({handleClick}) => {
  return (
    <div>
      <button onClick={handleClick}>ADD</button>
    </div>
  )
}

export default Button
