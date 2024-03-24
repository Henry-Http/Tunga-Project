import React, { useState } from "react";
import NavBar from "./NavBar";
import CustomButton from "./CustomButton";
import { useNavigate } from "react-router-dom";
import HomePage from "./HomePage";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      if (userData.name === name && userData.email === email) {
        // setLogin(true);
        setName("");
        setEmail("");
        navigate("/homePage");
      }
    }
  };
  return (
    <div>
      <NavBar />
      <div className="headerImg">
        <div
          style={{
            backgroundColor: "black",
            width: "40%",
            color: "white",
            padding: "35px",
            position: "relative",
            top: "50px",
            left: "100px",
            opacity: "0.7",
          }}
        >
          <p
            className="text-left"
            style={{
              color: "yellow",
              fontSize: "40px",
              textAlign: "center",
            }}
          >
            LOGIN!
          </p>
          <div className="m-10 text-center text-black">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="mb-6"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="text-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div style={{ margin: "20px 0 0 0", textAlign: "center" }}>
            <div onClick={handleLogin}>
              <CustomButton text="LOGIN" color="yellow" />
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="">
              if you don't have an account
              <span className="italic text-yellow-300"> sign up</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
