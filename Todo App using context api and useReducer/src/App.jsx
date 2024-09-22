import styles from "./App.module.css";
import AddTodo from "./components/addtodo/AddTodo";
import AppName from "./components/appname/AppName";
import Message from "./components/message/Message";
import TodoItems from "./components/todoitems/TodoItems";
import TodoItemsContextProvider from "./store/todo-items-context";

function App() {
  return (
    <TodoItemsContextProvider>
      <div className={styles.main}>
        <AppName />
        <AddTodo />
        <TodoItems />
        <Message />
      </div>
    </TodoItemsContextProvider>
  );
}

export default App;
