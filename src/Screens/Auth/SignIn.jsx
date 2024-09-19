import React, { useState } from "react";
import Inputs from "../../Components/Inputs_and_Buttons/Inputs";
import Buttons from "../../Components/Inputs_and_Buttons/Buttons";
import google from "../../Assets/Images/google.webp";
import { useNavigate } from "react-router-dom";
import { colorConfigs } from "../../colorConfig";
import { BiError } from "react-icons/bi";

export default function SignIn() {
  const [mobile, setMobile] = useState("");
  const [mobileError, setMobileError] = useState("");

  const navigate = useNavigate();

  const signIn = () => {
    const mobileRegex = /^[6-9]\d{9}$/;
    if (mobile == "") {
      setMobileError("Enter your mobile number");
    } else if (mobile.trim().length == 0) {
      console.log("enter blank");
      setMobileError("Blank spaces not allowed");
    } else if (isNaN(parseInt(mobile)) || !mobileRegex.test(mobile)) {
      console.log(mobileRegex.test(mobile));

      console.log("enter nan");
      setMobileError("Please enter valid number");
    } else if (mobile.length < 10) {
      console.log("enter length10");
      setMobileError("Number should be of length 10");
    } else {
      localStorage.setItem("user_id", 2);
      navigate("/chat");
    }
  };

  return (
    <div className="signin_main">
      <div style={{ height: "50px" }}></div>

      <div className="signin_wrapper">
        <center style={{ fontSize: "55px" }}>
          <center style={{ fontWeight: "700", color: "#ffbfb5" }}>IVT</center>
          <center style={{ fontSize: "18px", color: "white" }}>
            Interactive Virtual Tutor
          </center>
        </center>

        <div
          style={{ marginTop: "100px", gap:mobileError ==""?"25px":"10px", alignItems: "center", }}
          className="sign_options_main"
        >
          <Inputs
            setValue={setMobile}
            value={mobile}
            placeholder="Mobile no"
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
        </div>

        <div className="sin_lower">
          <div style={{ cursor: "pointer" }}>Need help?</div>
        </div>
      </div>
    </div>
  );
}
