import React, { createContext, useState, useContext } from "react";
import NavBar from "./NavBar";
import CustomButton from "./CustomButton";
import { useUser } from "./UserName";

const Header = () => {
  const { name } = useUser();
  return (
    <div>
      <NavBar />
      <div className="headerImg">
        <div
          style={{
            backgroundColor: "black",
            width: "40%",
            color: "white",
            padding: "25px",
            position: "relative",
            top: "30px",
            left: "100px",
            opacity: "0.7",
          }}
        >
          <h1
            style={{
              color: "yellow",
              fontSize: "60px",
              paddingRight: "90px",
            }}
          >
            WELCOME! <span className="userName">{name}</span>.
          </h1>
          <div
            style={{
              fontSize: "25px",
              fontFamily: "sans-serif",
              lineHeight: "40px",
            }}
          >
            <p>
              <span style={{ fontWeight: "bold" }}>Travel is my life. </span>
              Since 1999, I’ve been traveling around the world nonstop. If you
              also love travel, you’re in the right place!
            </p>
            <p style={{ marginTop: "25px" }}>Let’s get started…</p>
          </div>
          <div style={{ margin: "20px 0 0 0", display: "flex" }}>
            <div>
              <CustomButton text="BROWSE THE BLOG" color="yellow" />
            </div>
            <div>
              <CustomButton text="TRAVEL RESOURCES" color="yellow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
