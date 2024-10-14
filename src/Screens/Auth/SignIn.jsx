import React, { useState } from "react";
import Inputs from "../../Components/Inputs_and_Buttons/Inputs";
import Buttons from "../../Components/Inputs_and_Buttons/Buttons";
import google from "../../Assets/Images/google.webp";
import { useNavigate } from "react-router-dom";
import { colorConfigs } from "../../colorConfig";
import { BiError } from "react-icons/bi";
import SignOptionsLogo from "../../Components/SignOptionsLogo";
import GoToSignInSignUp from "../../Components/GoToSignInSignUp";
import logoImg from '../../Assets/Images/IVTVerticalLogoWhite.png';

export default function SignIn() {
  const navigate = useNavigate();
  

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validation = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError("Email is required");
    } else if (!email.trim()) {
      setEmailError("Blank spaces not allowed");
    } else if (!emailRegex.test(email)) {
      setEmailError("Please enter valid email Id");
    } else {
      return true;
    }
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const darkStatus = localStorage.getItem("darkModeStatus")

  const handleSignIn = () => {
    if (validation()) {
      setEmailError("");
      localStorage.setItem("user_id", 2);
      localStorage.setItem("darkModeStatus",darkStatus?darkStatus:"false")
      navigate("/chat");
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSignIn();
    }
  };

  return (
    <div className="signin_main">
      <div style={{ height: "50px" }}></div>
      <div className="signin_wrapper">
      <div className="logo_wrapper">
   <img style={{height:"100%"}} src={logoImg} alt="" />
   </div>
        <div
          style={{alignItems: "center" }}
          className="sign_options_main"
        >
          <Inputs
            setValue={handleChange}
            value={email}
            placeholder="Email ID"
            type="text"
            maxLength={1000}
            errors={emailError}
            onKeyDown={onKeyDown}
          />
          <div
            style={{ display: emailError === "" ? "none" : "flex" }}
            className="error"
          >
            <BiError color="#ff7979" size={20} />
            <div>{emailError}</div>
          </div>
          <Buttons
            onClick={handleSignIn}
            className="button_main"
            bgColor={colorConfigs.buttonColor}
            textSize="19px"
            textColor="#474747"
            text="Sign in"
          />
          <div
            style={{ fontSize: "18px", fontWeight: "600" }}
            className="google_button"
          >
            Continue with Google{" "}
            <img style={{ height: "28px" }} src={google} alt="" />
          </div>
        <GoToSignInSignUp path='/signup' type='Signin' />
        </div>

        <div onClick={()=>navigate("/help")} className="sin_lower">
          <div style={{ cursor: "pointer" }}>Need help?</div>
        </div>
      </div>
    </div>
  );
}
