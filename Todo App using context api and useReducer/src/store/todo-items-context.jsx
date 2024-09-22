import { createContext, useReducer } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: ()=> {},
  deleteItem: ()=> {},
})

function reducer(initialState, action){
  let newState = initialState;
  if(action.type==="ADD"){
    newState = [...initialState, {id: crypto.randomUUID(), todoName: action.payload.todoName, todoDate: action.payload.todoDate}]
  }else if(action.type==="DELETE"){
    newState = initialState.filter((item)=> item.id !== action.payload.id)
  }
  return newState;
}


const TodoItemsContextProvider = ({children})=>{
  const [todoItems, dispatch] = useReducer(reducer,[])
  
  const addNewItem = (todoName, todoDate) => {
    dispatch({type: "ADD", payload:{todoName,todoDate}})
  };

  const deleteItem = (id) => {
    dispatch({type:'DELETE', payload:{id:id}})
  };
  return (
    <TodoItemsContext.Provider value={{
      todoItems,
      addNewItem,
      deleteItem,
    }}>
      {children}
    </TodoItemsContext.Provider>
  )
}

export default TodoItemsContextProvider
