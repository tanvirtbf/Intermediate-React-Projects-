import "./App.css";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemContextProvider } from "./store/todoItemsStore";

function App() {
  return (
    <>
      <TodoItemContextProvider>
        <center className="todo-container">
          <AppName />
          <AddTodo />
          <WelcomeMessage />
          <TodoItems />
        </center>
      </TodoItemContextProvider>
    </>
  );
}

export default App;
