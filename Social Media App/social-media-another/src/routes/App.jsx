import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import PostListProvider from "../store/post-list-store";
import "./App.css";

function App() {
  const [sideBar, setSideBar] = useState("home");
  console.log(sideBar);
  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar setSideBar={setSideBar} sideBar={sideBar} />
        <div className="content">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
