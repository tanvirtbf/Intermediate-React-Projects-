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
  }else if(action.type==="DELETE"){
    newState = initialState.filter((item)=> item.id !== action.payload.id)
  }
  return newState;
}

function App() {
  const [todoItems, dispatch] = useReducer(reducer,[])
  
  const addNewItem = (todoName, todoDate) => {
    dispatch({type: "ADD", payload:{todoName,todoDate}})
  };

  const deleteItem = (id) => {
    dispatch({type:'DELETE', payload:{id:id}})
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
