import "./App.css";
import Form from "./components/Form";
import Right from "./components/Right";

const App = () => {
  return (
    <>
      <div className="image"></div>
      <div className="main w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat">
        <Form />
        <Right />
      </div>
    </>
  );
};

export default App;
