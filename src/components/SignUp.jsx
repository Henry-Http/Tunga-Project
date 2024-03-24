import React, { useState } from "react";
import CustomButton from "./CustomButton";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = () => {
    console.log("clicked");
    if (name === "" || email === "") {
      setError(true);
    }
    const userData = { name, email };
    localStorage.setItem("userData", JSON.stringify(userData));
    setName("");
    setEmail("");
    navigate("/login");
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
            SIGN-UP!
          </p>
          <div className="m-10 text-center">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="mb-6 text-black"
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
          {error ? (
            <div className="text-red-400 text-center p-0 m-0">
              <p>Enter a valid Name/Email</p>
            </div>
          ) : null}
          <div style={{ margin: "20px 0 0 0", textAlign: "center" }}>
            <div onClick={handleSignUp}>
              <CustomButton text="SIGN UP" color="yellow" />
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="">
              if you already have an account
              <Link to="/login">
                <span className="italic text-yellow-300"> Login</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
