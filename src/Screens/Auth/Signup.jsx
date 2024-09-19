import React, { useState } from "react";
import Buttons from "../../Components/Inputs_and_Buttons/Buttons";
import Inputs from "../../Components/Inputs_and_Buttons/Inputs";
import { useNavigate } from "react-router-dom";
import { colorConfigs } from "../../colorConfig";
import { BiError } from "react-icons/bi";
import SignOptionsLogo from "../../Components/SignOptionsLogo";

export default function Signup() {
  const naviagte = useNavigate();
  //All states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });
  const [formErrors, setFormErrors] = useState({
    nameError: "",
    emailError: "",
    mobileError: "",
  });

  //Full validation process for name,email and mobile number
  const validateForm = () => {
    let isValid = true;
    const errors = {
      nameError: "",
      emailError: "",
      mobileError: "",
    };

    // Name validation
    if (!formData.name) {
      errors.nameError = "Name is required";
      isValid = false;
    } else if (!formData.name.trim()) {
      errors.nameError = "Blank spaces not allowed";
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      errors.emailError = "Email is required";
      isValid = false;
    } else if (!formData.email.trim()) {
      errors.emailError = "Blank spaces not allowed";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      errors.emailError = "Valid email address required.";
      isValid = false;
    }

    // Mobile validation
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!formData.mobile) {
      errors.mobileError = "Mobile number is required";
      isValid = false;
    } else if (!formData.mobile.trim()) {
      errors.mobileError = "Blank spaces not allowed";
      isValid = false;
    } else if (!mobileRegex.test(formData.mobile)) {
      errors.mobileError = "Please enter a valid mobile number.";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  //Common onchange function
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  //SignUp function
  const signUp = (e) => {
    if (validateForm()) {
      naviagte("/signin");
    } else {
      return false;
    }
  };

  return (
    <div className="signin_main">
      <div style={{ height: "30px" }}></div>
      <SignOptionsLogo />
      <div
        style={{
          margin: "auto",
          marginTop: "70px",
        }}
        className="sign_options_main"
      >
        <Inputs
          value={formData.name}
          setValue={handleChange}
          placeholder="Name"
          width="38%"
          type="text"
          name="name"
          maxLength={20}
          errors={formErrors.nameError}
        />
        <div
          style={{ display: formErrors.nameError === "" ? "none" : "flex" }}
          className="error"
        >
          <BiError color="#ff5b5b" size={20} />
          {formErrors.nameError && <span>{formErrors.nameError} </span>}
        </div>
        <Inputs
          value={formData.email}
          setValue={handleChange}
          placeholder="Email id"
          width="38%"
          type="email"
          name="email"
          maxLength={30}
          errors={formErrors.emailError}
        />
        <div
          style={{ display: formErrors.emailError === "" ? "none" : "flex" }}
          className="error"
        >
          <BiError color="#ff5b5b" size={20} />
          {formErrors.emailError && <span>{formErrors.emailError} </span>}
        </div>
        <Inputs
          value={formData.mobile}
          setValue={handleChange}
          placeholder="Mobile no"
          width="38%"
          type="text"
          name="mobile"
          maxLength={10}
          errors={formErrors.mobileError}
        />
        <div
          style={{ display: formErrors.mobileError === "" ? "none" : "flex" }}
          className="error"
        >
          <BiError color="#ff5b5b" size={20} />
          {formErrors.mobileError && <span>{formErrors.mobileError} </span>}
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
        <div style={{ color: "white", fontSize: "18px", marginTop: "10px" }}>
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
