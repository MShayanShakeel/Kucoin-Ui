import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Dashbord from "./Components/DashBord/Dashbord";
import Dashboard2 from "./Components/Dashboard2/Dashboard2";
import "./App.css";

const DashBoardMain = () => {
  return (
    <>
      <div className="row Main-Dashboard-classs">
        <div className="col-12">
          <Navbar />
          <div className="col-12 " style={{ display: "flex" }}>
            <div className="col-2">
              <Sidebar />
            </div>
            <div className="col-10">
              <Dashbord />
              <Dashboard2 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoardMain;
