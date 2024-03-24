import React from "react";

const Footer = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#021B2B",
          textAlign: "center",
          color: "gray",
          padding: "10px",
          fontFamily: "sans-serif",
        }}
      >
        <p style={{ padding: "10px" }}>Copyright 2024 Wandering Earl, LLC</p>
        <p style={{ padding: "10px", color: "wheat" }}>Privacy Policy</p>
        <p style={{ padding: "10px", fontSize: "12px" }}>
          *As an Amazon Associate I earn from qualifying purchases. Certain
          other links on this site might earn me a commission if a
          product/service is purchased.
        </p>
      </div>
    </>
  );
};

export default Footer;
