import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import { useState } from "react";

function App() {
  const [sideBar, setSideBar] = useState('home')
  console.log(sideBar)
  return (
    <>
      <div className="app-container">
        <Sidebar setSideBar={setSideBar} sideBar={sideBar}/>
        <div className="content">
          <Header />
          {sideBar==='home'? <PostList /> : <CreatePost />}
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
