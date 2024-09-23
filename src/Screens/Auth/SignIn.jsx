import React, { useState } from "react";
import Inputs from "../../Components/Inputs_and_Buttons/Inputs";
import Buttons from "../../Components/Inputs_and_Buttons/Buttons";
import google from "../../Assets/Images/google.webp";
import { useNavigate } from "react-router-dom";
import { colorConfigs } from "../../colorConfig";
import { BiError } from "react-icons/bi";
import SignOptionsLogo from "../../Components/SignOptionsLogo";
import GoToSignInSignUp from "../../Components/GoToSignInSignUp";

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

  const signIn = () => {
    if (validation()) {
      setEmailError("");
      localStorage.setItem("user_id", 2);
      navigate("/chat");
    }
  };

  return (
    <div className="signin_main">
      <div style={{ height: "50px" }}></div>
      <div className="signin_wrapper">
        <SignOptionsLogo />
        <div
          style={{ marginTop: "100px", alignItems: "center" }}
          className="sign_options_main"
        >
          <Inputs
            setValue={handleChange}
            value={email}
            placeholder="Email ID"
            type="text"
            maxLength={1000}
            errors={emailError}
          />
          <div
            style={{ display: emailError === "" ? "none" : "flex" }}
            className="error"
          >
            <BiError color="#ff7979" size={20} />
            <div>{emailError}</div>
          </div>
          <Buttons
            onClick={signIn}
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
