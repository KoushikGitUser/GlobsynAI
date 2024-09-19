import React, { useState } from "react";
import Buttons from "../../Components/Inputs_and_Buttons/Buttons";
import Inputs from "../../Components/Inputs_and_Buttons/Inputs";
import { useNavigate } from "react-router-dom";
import { colorConfigs } from "../../colorConfig";
import { BiError } from "react-icons/bi";

export default function Signup() {
  //All states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [mobileError, setMobileError] = useState("");

  const naviagte = useNavigate();

  const validate = () => {
    const mobileRegex = /^[6-9]\d{9}$/;
    if (name == "") {
      setNameError("Enter your name");
      return false;
    } else {
      setNameError("");
    }

    if (email == "") {
      setEmailError("Enter your email");
      return false;
    } else {
      setEmailError("");
    }

    if (mobile == "") {
      setMobileError("Enter mobile number");
      return false;
    } else {
      setMobileError("");
    }

    if (name.trim().length == 0) {
      setNameError("Blank spaces not allowed");
      return false;
    }
    else{
      setNameError("");
    }
    if (email.trim().length == 0) {
      setEmailError("Blank spaces not allowed");
      return false;
    }
    else{
      setEmailError("");
    }
    if (mobile.trim().length == 0) {
      setMobileError("Blank spaces not allowed");
      return false;
    }
    else{
      setMobileError("")
    }
    if (isNaN(parseInt(mobile)) || !mobileRegex.test(mobile)) {
      setMobileError("Please enter valid number");
    }
    if (mobile.length < 10) {
      setMobileError("Number should be of length 10");
    } else {
      return true;
    }
  };

  const signUp = () => {
    if (validate()) {
      naviagte("/signin");
    } else {
    }
  };

  return (
    <div className="signin_main">
      <div style={{ height: "30px" }}></div>

      <center style={{ fontSize: "55px" }}>
        <center style={{ fontWeight: "700", color: "#ffbfb5" }}>IVT</center>
        <center style={{ fontSize: "18px", color: "white" }}>
          Interactive Virtual Tutor
        </center>
      </center>

      <div
        style={{
          margin: "auto",
          marginTop: "70px",
          gap:
            mobileError == "" && emailError == "" && nameError == ""
              ? "25px"
              : "15px",
        }}
        className="sign_options_main"
      >
        <Inputs
          value={name}
          setValue={setName}
          placeholder="Name"
          width="38%"
          type="text"
        />
        <div
          style={{ display: nameError === "" ? "none" : "flex" }}
          className="error"
        >
          <BiError color="#ff7979" size={20} />
          <div>{nameError}</div>
        </div>
        <Inputs
          value={email}
          setValue={setEmail}
          placeholder="Email id"
          width="38%"
          type="email"
        />

        <div
          style={{ display: emailError === "" ? "none" : "flex" }}
          className="error"
        >
          <BiError color="#ff7979" size={20} />
          <div>{emailError}</div>
        </div>
        <Inputs
          value={mobile}
          setValue={setMobile}
          placeholder="Mobile no"
          width="38%"
          type="text"
        />
        <div
          style={{ display: mobileError === "" ? "none" : "flex" }}
          className="error"
        >
          <BiError color="#ff7979" size={20} />
          <div>{mobileError}</div>
        </div>

        <Buttons
          onClick={signUp}
          className="button_main"
          width="40.5%"
          bgColor={colorConfigs.buttonColor}
          textSize="19px"
          textColor="#474747"
          text="Sign up"
        />
        <div style={{ color: "white", fontSize: "18px" }}>
          Already have an account?{" "}
          <span
            onClick={() => naviagte("/signin")}
            style={{ color: "#ffbfb5", paddingLeft: "10px", cursor: "pointer" }}
          >
            Sign in
          </span>
        </div>
      </div>
    </div>
  );
}
