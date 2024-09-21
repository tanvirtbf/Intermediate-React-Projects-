import AppName from "./components/appName/AppName";
import InputButton from "./components/inputButton/InputButton";
import TodoInput from "./components/todoInput/TodoInput";
import TodoOutput from './components/todoOutput/TodoOutput'
import LastMessage from "./components/lastMessage/LastMessage";
import styles from './App.module.css'
import { useState } from "react";

function App() {
  const inputArr = [
    {
      id: crypto.randomUUID(), 
      todo: 'Math',
      date: '09/03/2024'
    },
    {
      id: crypto.randomUUID(), 
      todo: 'Physics',
      date: '12/06/2022'
    },
    {
      id: crypto.randomUUID(), 
      todo: 'Chemistry',
      date: '09/03/2024'
    }
  ]
  const [inputData,setInputData] = useState(inputArr)
  function handleDelete(id){
    setInputData(inputData.filter((item)=> item.id !== id))
  }
  return (
    <div className={styles.main}>
      <AppName />
      <InputButton>
        <TodoInput setInputData={setInputData} />
      </InputButton>
      <TodoOutput inputData={inputData} setInputData={setInputData} handleDelete={handleDelete} />
      <LastMessage />
    </div>
  );
}

export default App;
