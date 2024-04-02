import React from "react";
import Imageprofile from "../../Image/userProfile.png";
import { FaRegBell } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="row">
        <div className="Navbar-Second col-12">
          <div className="Navbar-Third">
            <div className="logo-classs">KUCOIN</div>
            <div className="list-item-classs">
              <ul>
                <li>
                  Buy Crpyto <IoIosArrowDown />
                </li>
                <li>
                  Markets <IoIosArrowDown />
                </li>
                <li>
                  Trade <IoIosArrowDown />
                </li>
                <li>
                  Derivatives <IoIosArrowDown />
                </li>
                <li>
                  Earn <IoIosArrowDown />
                </li>
                <li>
                  More <IoIosArrowDown />
                </li>
              </ul>
            </div>
          </div>
          <div className="right-bar-classs">
            <div className="input-field-classs">
              <input
                placeholder="Search.."
                type="search"
                id="form1"
                // className="form-control"
              />
            </div>
            <div>
              <img
                className="userProfile-img-classs"
                src={Imageprofile}
                alt=""
              />
            </div>
            <div className="ball-icons-classs">
              <FaRegBell />
            </div>
            <div className="button-classs">
              <button>Add funds</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
