import React from "react";
import "./Dashbord.css";
import { GrFormView } from "react-icons/gr";
import { IoCopyOutline } from "react-icons/io5";
import Imageprofile from "../../Image/userProfile.png";

const Dashbord = () => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="Dashbord-Main-1">
            <div className="profile-section-1">
              <div className="ProfileAndProfileName-section">
                <div className="image-div-target">
                  <img src={Imageprofile} alt="Profile" />
                </div>
                <div className="Span-text-div-target">
                  <span>Welcome..</span>
                  <span>
                    <h4>Brooklyn Simmons</h4>
                  </span>
                </div>
              </div>
              <div className="profile-section-2">
                <button>
                  <GrFormView />
                  Hide Info
                </button>
              </div>
            </div>

            <div className="profile-section-2 profile-section-1">
              <div className="card Profile-cards-5">
                <div>
                  <h6>UID</h6>
                  <h6>196580987</h6>
                </div>
                <div>
                  <IoCopyOutline />
                </div>
              </div>

              <div className="card Profile-cards-5">
                <div>
                  <h6>UID</h6>
                  <h6>196580987</h6>
                </div>
                <div>
                  <IoCopyOutline />
                </div>
              </div>

              <div className="card Profile-cards-5">
                <div>
                  <h6>UID</h6>
                  <h6>196580987</h6>
                </div>
                <div>
                  <IoCopyOutline />
                </div>
              </div>

              <div className="card Profile-cards-5">
                <div>
                  <h6>UID</h6>
                  <h6>196580987</h6>
                </div>
                <div>
                  <IoCopyOutline />
                </div>
              </div>

              <div className="card Profile-cards-5">
                <div>
                  <h6>UID</h6>
                  <h6>196580987</h6>
                </div>
                <div>
                  <IoCopyOutline />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashbord;
