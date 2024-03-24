import React from "react";

const CustomButton = ({ text, color }) => {
  const buttonStyle = {
    backgroundColor: color,
    padding: "10px 35px",
    color: "black",
    cursor: "pointer",
    fontSize: "16px",
    border: "none",
    marginRight: "20px",
  };

  return <button style={buttonStyle}>{text}</button>;
};

export default CustomButton;
