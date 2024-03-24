import React from "react";
import Data from "./Data";
import image from "../assets/images/blogImgSeen.png";

const TravelLinks = () => {
  return (
    <>
      <div style={{ textAlign: "center", padding: "40px" }}>
        <h1>CHECK IT OUT</h1>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "16px",
          padding: "0 120px 100px ",
        }}
      >
        {Data.map((data, i) => {
          return (
            <div
              key={i}
              style={{
                border: "1px solid #ccc",
                textAlign: "center",
              }}
            >
              <img
                src={data.image}
                alt="image here"
                width="350px"
                height="250px"
              />
              <div
                style={{
                  backgroundColor: "#021B2B",
                  color: "white",
                  padding: "15px",
                  fontFamily: "sans-serif",
                }}
              >
                <p
                  style={{
                    color: "yellow",
                    fontSize: "26px",
                    marginBottom: "5px",
                    fontWeight: "bold",
                  }}
                >
                  {data.title}
                </p>
                <p style={{ fontSize: "15px" }}>{data.text}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div style={{ padding: "0 120px" }}>
        <div
          style={{
            border: "1px solid #dbd4d4",
            marginBottom: "8px",
          }}
        ></div>
        <div
          style={{ border: "1px solid #dbd4d4", marginBottom: "30px" }}
        ></div>
      </div>

      <div>
        <p
          style={{
            textAlign: "center",
            fontFamily: "sans-serif",
            padding: "30px",
            fontSize: "40px",
            fontWeight: "bold",
          }}
        >
          POPULAR READS
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div>
            <p
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "30px",
                paddingBottom: "20px",
              }}
            >
              Most Viewed
            </p>
            <ul
              style={{
                listStyle: "none",
                fontSize: "20px",
                lineHeight: "40px",
                fontFamily: "sans-serif",
                padding: "20px 80px",
              }}
            >
              <li>42 Ways You Can Make Money and Travel the World</li>
              <li>Please Help Me Find A Home!</li>
              <li>Please Don’t Be Afraid To Travel On Your Own</li>
              <li>How I Can Afford My Life Of Constant Travel</li>
              <li>Let’s Get To Know Each Other Better</li>
              <li>The Day US Customs Found A Bullet In My Pocket</li>
              <li>How Much Money Do You Need To Start A Life Of Travel?</li>
              <li>Living Abroad For Less Than $1000 Per Month</li>
            </ul>
          </div>
          <div>
            <p
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "30px",
                paddingBottom: "20px",
              }}
            >
              Most Recent
            </p>
            <ul
              style={{
                listStyle: "none",
                fontSize: "20px",
                lineHeight: "40px",
                fontFamily: "sans-serif",
                padding: "20px 80px",
              }}
            >
              <li>Great Reasons to Visit Antarctica</li>
              <li>
                Discover Hong Kong: Captivating and Accessible Must-See Spots
              </li>
              <li>Rolling Through the Carolinas: An RV Road Trip Guide</li>
              <li>
                Essential Items Every Backpacker Should Pack for Safe Travels
              </li>
              <li>Barcelona: 5 Cultural Sites to Visit</li>
              <li>Five Unusual Destinations Perfect for Outdoor Escapes </li>
              <li>The Best Beaches to Visit in Barbados </li>
              <li>Enchanting City of Shanghai: Journey Through Modern China</li>
            </ul>
          </div>
        </div>
        <div
          style={{
            textAlign: "center",
            fontSize: "20px",
            lineHeight: "40px",
            fontFamily: "sans-serif",
            marginBottom: "70px",
          }}
        >
          <p
            style={{
              fontSize: "30px",
              fontFamily: "sans-serif",
              padding: "30px",
              fontWeight: "bold",
            }}
          >
            Highlighted Post
          </p>
          <p>Affordable Canadian Cities For Digital Nomads</p>
          <p>Top Alternative Destinations to Visit Across Europe</p>
        </div>
        <div style={{ padding: "0 120px" }}>
          <div
            style={{
              border: "1px solid #dbd4d4",
              marginBottom: "8px",
            }}
          ></div>
          <div
            style={{ border: "1px solid #dbd4d4", marginBottom: "30px" }}
          ></div>
        </div>
      </div>

      <div style={{padding:"20px 50px  90px 0"}}>
        <p
          style={{
            textAlign: "center",
            fontFamily: "sans-serif",
            padding: "30px",
            fontSize: "40px",
            fontWeight: "bold",
          }}
        >
          AS SEEN IN
        </p>
        <div style={{textAlign:"center", margin:"auto"}}>
          <img src={image} alt="" />
        </div>
      </div>
    </>
  );
};

export default TravelLinks;
