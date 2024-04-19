import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";
import CreatePost from "./components/CreatePost";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PostList from "./components/PostList";
import Sidebar from "./components/Sidebar";
import PostListProvider from "./store/post-list-store";

function App() {
  const [sideBar, setSideBar] = useState("home");
  console.log(sideBar);
  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar setSideBar={setSideBar} sideBar={sideBar} />
        <div className="content">
          <Header />
          {sideBar === "home" ? <PostList /> : <CreatePost />}
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
