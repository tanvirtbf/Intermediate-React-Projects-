import { useState } from "react";
import Button from "../button/Button";
import styles from "./TodoInput.module.css";

const TodoInput = ({ setInputData }) => {
  const [todoInput, setTodoInput] = useState({
    id: "",
    todo: "",
    date: "",
  });

  function handleClick() {
    setInputData((prevState) => [...prevState, todoInput]);
  }

  return (
    <div className={styles.todoInput}>
      <input
        type="text"
        placeholder="Enter Todo Here"
        value={todoInput.todo}
        onChange={(e) =>
          setTodoInput((prevState) => ({ ...prevState, id: crypto.randomUUID(),todo: e.target.value }))
        }
      />
      <input
        type="date"
        value={todoInput.date}
        onChange={(e) =>
          setTodoInput((prevState) => ({ ...prevState, id: crypto.randomUUID(),date: e.target.value }))
        }
      />
      <Button handleClick={handleClick} />
    </div>
  );
};

export default TodoInput;
