import { useReducer } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todoItemsStore";

const reducer = (state,action) =>{
  switch(action.type){
    case 'addItem':
      return [...state, {name: action.payload.itemName, dueDate: action.payload.itemDueDate}]
    case 'deleteItem':
      return state.filter((item) => item.name !== action.payload)
    default: 
      return state;
  }
}

function App() {
  const [todoItems, dispatch] = useReducer(reducer, [])

  const handleNewItem = (itemName, itemDueDate) => {
    dispatch({type: 'addItem', payload: {itemName,itemDueDate}})
  };

  // const handleDeleteItem = (todoItemName) => {
  //   dispatch({type: 'deleteItem', payload: todoItemName})
  // };

  return (
    <>
      <TodoItemsContext.Provider
        value={{
          todoItems: todoItems,
          dispatch: dispatch,
          onNewItem: handleNewItem,
          // onDeleteClick: handleDeleteItem,
        }}
      >
        <center className="todo-container">
          <AppName />
          <AddTodo />
          <WelcomeMessage />
          <TodoItems />
        </center>
      </TodoItemsContext.Provider>
    </>
  );
}

export default App;
