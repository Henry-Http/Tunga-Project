import React from "react";
import { FaFacebook, FaYoutube, FaInstagram, FaSearch } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import navImg from "../assets/Images/blogImag.png";
import CustomButton from "./CustomButton";

const NavBar = () => {
  return (
    <div style={{ height: "auto", backgroundColor: "white" }}>
      <div style={{ display: "flex" }}>
        <div>
          <img
            id="NavImg"
            src={navImg}
            alt=""
            style={{ padding: "20px", marginLeft: "76px" }}
          />
        </div>
        <div>
          <ul className="ul" style={{ display: "flex", cursor: "pointer" }}>
            <Link to="/about">
              <li className="">About</li>
            </Link>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <div
          className="hidden"
          style={{
            marginTop: "35px",
            marginLeft: "60px",
            display: "flex",
            cursor: "pointer",
          }}
        >
          <FaFacebook
            style={{ width: "23px", height: "23px", marginRight: "10px" }}
          />
          <FaSquareXTwitter
            style={{ width: "23px", height: "23px", marginRight: "10px" }}
          />
          <FaYoutube
            style={{
              width: "23px",
              height: "23px",
              marginRight: "10px",
              color: "red",
            }}
          />
          <FaInstagram
            style={{ width: "23px", height: "23px", marginRight: "10px" }}
          />
        </div>
        <div style={{ marginTop: "35px", marginLeft: "20px" }}>
          <FaSearch
            style={{ width: "17px", height: "17px", marginRight: "10px" }}
          />
        </div>
        {/* <div className="opacity-80 mt-6 ml-6">
          <CustomButton color="yellow" text="SIGN-UP" />
        </div> */}
      </div>
    </div>
  );
};

export default NavBar;
