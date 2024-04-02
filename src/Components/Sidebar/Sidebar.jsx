import React from "react";
import { MdSpaceDashboard } from "react-icons/md";

import "./Sidebar.css";

const Sidebar = () => {
  return (
    <>
      <div className="row sidebar-main-classs">
        <div className="col-2 sidebar-Second-classs">
          <div className="sidebar-Third-classs">
            <ul>
              <li>
                <MdSpaceDashboard />
                Deshboard
              </li>
              <li>
                {" "}
                <MdSpaceDashboard /> Security
              </li>
              <li>
                {" "}
                <MdSpaceDashboard /> Identity Verification
              </li>
              <li>
                {" "}
                <MdSpaceDashboard /> API management
              </li>
              <li>
                {" "}
                <MdSpaceDashboard /> Sub-accounts
              </li>
              <li>
                {" "}
                <MdSpaceDashboard /> Export history
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
