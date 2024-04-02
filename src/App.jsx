import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import Navbar from './Components/Navbar/Navbar'
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <div>
        {/* <Navbar /> */}
        <Sidebar />
      </div>
    </>
  );
}

export default App;
