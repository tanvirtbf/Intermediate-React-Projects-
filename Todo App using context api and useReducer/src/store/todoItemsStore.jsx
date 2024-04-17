import { createContext, useReducer } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  onNewItem: () => {},
  onDeleteClick: () => {},
});

const reducer = (state, action) => {
  switch (action.type) {
    case "addItem":
      return [
        ...state,
        { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
      ];
    case "deleteItem":
      return state.filter((item) => item.name !== action.payload);
    default:
      return state;
  }
};

export const TodoItemContextProvider = ({children}) => {
  const [todoItems, dispatch] = useReducer(reducer, []);

  const handleNewItem = (itemName, itemDueDate) => {
    dispatch({ type: "addItem", payload: { itemName, itemDueDate } });
  };

  const handleDeleteItem = (todoItemName) => {
    dispatch({ type: "deleteItem", payload: todoItemName });
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems: todoItems,
        onDeleteClick: handleDeleteItem,
        onNewItem: handleNewItem,
      }}
    >
      {children}

    </TodoItemsContext.Provider>
  );
};
