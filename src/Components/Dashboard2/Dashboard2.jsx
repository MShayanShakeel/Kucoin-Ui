import React from "react";
import CardImg from "../../Image/cards.png";
import Imageprofile from "../../Image/userProfile.png";
import "./Dashboard2.css";
import "../DashBord/Dashbord.css";

const Dashboard2 = () => {
  return (
    <>
      <div className="row">
        <div
          className="col-8"
          style={{ background: "#081B21", borderRadius: "20px", margin : "0rem 0px"}}
        >
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
                  <h5 style={{ marginLeft: "5px" }}>
                    Deposit or buy crypto through these methods.
                  </h5>
                </span>
              </div>
              <div>
                <div className="ProfileAndProfileName-section-2">
                  <div className="image-div-target">
                    <img src={Imageprofile} alt="Profile" />
                  </div>
                  <div className="Span-text-div-target">
                    <span>
                      {" "}
                      <h5 style={{ marginBlock: "0px" }}>Buy Crypto</h5>
                    </span>
                    <span>Welcome..</span>
                  </div>
                </div>
                <div className="ProfileAndProfileName-section-2">
                  <div className="image-div-target">
                    <img src={Imageprofile} alt="Profile" />
                  </div>
                  <div className="Span-text-div-target">
                    <span>
                      <h5 style={{ marginBlock: "0px" }}>Deposit</h5>
                    </span>
                    <span>Welcome..</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="table-class-main">
            <div className="Dsahboard-2">
              <div>
                <h4 style={{ color: "#D4D4DE" }}>Market</h4>
                <span className="Favorites-hot-button">
                  <button>Favorites</button>
                </span>
                <span className="Favorites-hot-button">
                  <button>Hot</button>
                </span>
              </div>
              <div>View More</div>
            </div>
            <div>
              <table className="table table-main-classs">
                <thead>
                  <tr className="table-tr-classs">
                    <th scope="col-2">#</th>
                    <th scope="col-2">First</th>
                    <th scope="col-2">Last</th>
                    <th scope="col-2">Handle</th>
                    <th scope="col-2">Handle</th>
                  </tr>
                </thead>
                <tbody className="table-tr-classs">
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

        <div className="col-4" style={{ background: "#070B16" ,borderRadius: "20px" }}>
          <div className="total-Assets-card-2">
            <div className="Assets-card-buttons profile-section-2">
              <span style={{ color: "white" }}>
                <h5 style={{ margin : "5px 5px" }}>
                  Deposit or buy crypto through these methods.
                </h5>
              </span>
            </div>
            <div>
              <div className="ProfileAndProfileName-section-2">
                <div className="image-div-target">
                  <img src={Imageprofile} alt="Profile" />
                </div>
                <div className="Span-text-div-target">
                  <span>
                    {" "}
                    <h5 style={{ marginBlock: "0px" }}>Buy Crypto</h5>
                  </span>
                  <span>Welcome..</span>
                </div>
              </div>
              <div className="ProfileAndProfileName-section-2">
                <div className="image-div-target">
                  <img src={Imageprofile} alt="Profile" />
                </div>
                <div className="Span-text-div-target">
                  <span>
                    <h5 style={{ marginBlock: "0px" }}>Deposit</h5>
                  </span>
                  <span>Welcome..</span>
                </div>
              </div>
            </div>
          </div>

          <img className="oimagesss" src={CardImg} alt="" />

          <div className="col-12" style={{ background: "#0C151E" , borderRadius : "20px" , padding: "3px 0px" }}>
            <div>
              <div className="Heading-classs-bottom-component">
                <span>
                  <h5 style={{ color: "#acbcc3" }}>Information</h5>
                </span>
                <span>
                  <h6 style={{ color: "#acbcc3" }}>View more</h6>
                </span>
              </div>
              <div className="bottono-section-cards card">
                <p>Befi labs (BFS) Get listen on KuCoin! World is Premien!</p>
              </div>
              <div className="bottono-section-cards card">
                <p>Befi labs (BFS) Get listen on KuCoin! World is Premien!</p>
              </div>

              <div className="bottono-section-cards card">
                <p>Befi labs (BFS) Get listen on KuCoin! World is Premien!</p>
              </div>

              <div className="bottono-section-cards card">
                <p>Befi labs (BFS) Get listen on KuCoin! World is Premien!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard2;
