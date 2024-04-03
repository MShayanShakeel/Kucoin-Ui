import React from "react";
import CardImg from "../../Image/cards.png";
import Imageprofile from "../../Image/userProfile.png";
import "./Dashboard2.css";
import "../DashBord/Dashbord.css";

const Dashboard2 = () => {
  return (
    <>
      <div className="row">
        <div className="col-8" style={{ background: "#081B21", margin: "1p" }}>
          <div className="Dsahboard-2">
            <div className="total-Assets-card">
              <div className="Assets-card-buttons profile-section-2">
                <button>Buy Crypto</button>
                <button>Deposit</button>
                <button>Withdraw</button>
              </div>
              <img className="oimagesss" src={CardImg} alt="" />
            </div>

            <div className="total-Assets-card">
              <div>
                <span style={{ color: "white" }}>
                  Deposit or buy crypto through these methods.
                </span>
              </div>
              <div>
                <div className="ProfileAndProfileName-section-2">
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
                <div className="ProfileAndProfileName-section-2">
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
              </div>
            </div>
          </div>
          <div className="table-class-main">
            <div className="Dsahboard-2">
              <div>
                <h4>Market</h4>
                <span className="Favorites-hot-button">
                  <button>Favorites</button>
                </span>
                <span>
                  <button>Hot</button>
                </span>
              </div>
              <div>View More</div>
            </div>
            <div>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col-2">#</th>
                    <th scope="col-2">First</th>
                    <th scope="col-2">Last</th>
                    <th scope="col-2">Handle</th>
                    <th scope="col-2">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Mark</td>
                    <td>Mark</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>Jacob</td>
                    <td>Jacob</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>Larry</td>
                    <td>Larry</td>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                  <tr>
                    <td>Larry</td>
                    <td>Larry</td>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                  <tr>
                    <td>Larry</td>
                    <td>Larry</td>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>

                  <tr>
                    <td>Larry</td>
                    <td>Larry</td>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                  <tr>
                    <td>Larry</td>
                    <td>Larry</td>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="col-4" style={{ background: "yellow" }}>
          <div className="total-Assets-card-2">
            <div className="Assets-card-buttons profile-section-2">
              <button>Buy Crypto</button>
              <button>Deposit</button>
              <button>Withdraw</button>
            </div>
            <img className="oimagesss" src={CardImg} alt="" />
          </div>

          <img className="oimagesss" src={CardImg} alt="" />

          <div style={{height : "30vh" , background : "black"}}>
            bottom Section
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard2;
