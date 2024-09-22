import { useState } from "react";
import styles from "./App.module.css";
import AddTodo from "./components/addtodo/AddTodo";
import AppName from "./components/appname/AppName";
import Message from "./components/message/Message";
import TodoItems from "./components/todoitems/TodoItems";
import { TodoItemsContext } from "./store/todo-items-context";

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const addNewItem = (todoName, todoDate) => {
    setTodoItems((prevState) => [
      ...prevState,
      { id: crypto.randomUUID(), todoName: todoName, todoDate: todoDate },
    ]);
  };

  const deleteItem = (id) => {
    const newTodoItems = todoItems.filter((item) => item.id !== id);
    setTodoItems(newTodoItems);
  };

  return (
    <>
      <TodoItemsContext.Provider value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}>
        <div className={styles.main}>
          <AppName />
          <AddTodo />
          <TodoItems />
          <Message />
        </div>
      </TodoItemsContext.Provider>
    </>
  );
}

export default App;
