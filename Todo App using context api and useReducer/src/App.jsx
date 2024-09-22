import { useReducer, useState } from "react";
import styles from "./App.module.css";
import AddTodo from "./components/addtodo/AddTodo";
import AppName from "./components/appname/AppName";
import Message from "./components/message/Message";
import TodoItems from "./components/todoitems/TodoItems";
import { TodoItemsContext } from "./store/todo-items-context";

function reducer(initialState, action){
  let newState = initialState;
  if(action.type==="ADD"){
    newState = [...initialState, {id: crypto.randomUUID(), todoName: action.payload.todoName, todoDate: action.payload.todoDate}]
  }
  return newState;
}

function App() {

  const [todoItems, dispatch] = useReducer(reducer,[])

  // const [todoItems, setTodoItems] = useState([]);
  const addNewItem = (todoName, todoDate) => {
    dispatch({type: "ADD", payload:{todoName,todoDate}})
    // setTodoItems((prevState) => [
    //   ...prevState,
    //   { id: crypto.randomUUID(), todoName: todoName, todoDate: todoDate },
    // ]);
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
