import AppName from "./components/appName/AppName";
import Button from "./components/button/Button";
import InputButton from "./components/inputButton/InputButton";
import TodoInput from "./components/todoInput/TodoInput";
import TodoOutput from './components/todoOutput/TodoOutput'
import LastMessage from "./components/lastMessage/LastMessage";
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.main}>
      <AppName />
      <InputButton>
        <TodoInput />
        <Button />
      </InputButton>
      <TodoOutput />
      <LastMessage />
    </div>
  );
}

export default App;
