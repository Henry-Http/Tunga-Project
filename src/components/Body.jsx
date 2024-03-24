import React from "react";
import CustomButton from "./CustomButton";
import TravelLinks from "./TravelLinks";

const Body = () => {
  return (
    <div>
      <div>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              height: "90px",
              padding: "10px",
              borderBottom: "2px solid #1b345b ",
            }}
          >
            <div>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "30px",
                  fontFamily: "sans-serif",
                }}
              >
                136
              </p>
              <h4
                style={{
                  textAlign: "center",
                  fontSize: "20px",
                  fontFamily: "sans-serif",
                }}
              >
                Countries Visited
              </h4>
            </div>
            <div>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "30px",
                  fontFamily: "sans-serif",
                }}
              >
                THE GAMBIA
              </p>
              <h4
                style={{
                  textAlign: "center",
                  fontSize: "20px",
                  fontFamily: "sans-serif",
                }}
              >
                Where am I?{" "}
              </h4>
            </div>
            <div>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "30px",
                  fontFamily: "sans-serif",
                }}
              >
                8155
              </p>
              <h4
                style={{
                  textAlign: "center",
                  fontSize: "20px",
                  fontFamily: "sans-serif",
                }}
              >
                Days On The Road
              </h4>
            </div>
          </div>

          <div
            className="mapImg"
            style={{
              height: "350px",
              borderBottom: "2px solid #1b345b ",
              marginBottom: "10px",
              padding: "20px",
            }}
          >
            <div style={{ textAlign: "center", margin: "auto" , color:"#1E365C"}}>
              <h2 style={{ fontSize: "45px", padding: "17px 0px" }}>
                Join 22,000+ people and get your weekly travel inspiration.
              </h2>
              <p style={{ fontSize: "26px" ,padding:"30px 170px"}}>
                New blog posts, honest updates from my 21 years of constant
                travel, personal recommendations and the best of travel from
                around the world.
              </p>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <CustomButton text="Subscribe" color="orange" />
            </div>
          </div>
        </div>
      </div>
      <TravelLinks/>
    </div>
  );
};

export default Body;
