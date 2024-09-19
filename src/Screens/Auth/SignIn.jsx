import React, { useState } from "react";
import Inputs from "../../Components/Inputs_and_Buttons/Inputs";
import Buttons from "../../Components/Inputs_and_Buttons/Buttons";
import google from "../../Assets/Images/google.webp";
import { useNavigate } from "react-router-dom";
import { colorConfigs } from "../../colorConfig";
import { BiError } from "react-icons/bi";
import SignOptionsLogo from "../../Components/SignOptionsLogo";

export default function SignIn() {
  const navigate = useNavigate();

  const [mobile, setMobile] = useState("");
  const [mobileError, setMobileError] = useState("");

  const validation = () => {
    let isValid = true;
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobile) {
      setMobileError("Mobile number is required");
    } else if (!mobile.trim()) {
      setMobileError("Blank spaces not allowed");
    } else if (!mobileRegex.test(mobile)) {
      setMobileError("Please enter valid mobile number");
    } else {
      return true;
    }
  };

  const handleChange = (e) => {
    setMobile(e.target.value);
  };

  const signIn = () => {
    if (validation()) {
      setMobileError("");
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
            value={mobile}
            placeholder="Mobile no"
            type="text"
            maxLength={10}
            errors={mobileError}
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
