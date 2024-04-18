import { Outlet } from "react-router";
import "./App.css";
import Header from "./components/header/Header";
import { ProjectDataContext } from "./store/project-context";

function App() {
  return (
    <>
      <ProjectDataContext>
        <Header />
        <Outlet />
      </ProjectDataContext>
    </>
  );
}

export default App;
