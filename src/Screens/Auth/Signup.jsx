import React, { useState } from "react";
import Buttons from "../../Components/Inputs_and_Buttons/Buttons";
import Inputs from "../../Components/Inputs_and_Buttons/Inputs";
import { useNavigate } from "react-router-dom";
import { colorConfigs } from "../../colorConfig";
import { BiError } from "react-icons/bi";
import SignOptionsLogo from "../../Components/SignOptionsLogo";
import GoToSignInSignUp from "../../Components/GoToSignInSignUp";
import logoImg from '../../Assets/Images/IVTVerticalLogoWhite.png';

export default function Signup() {
  const navigate = useNavigate();
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
  const handleSignUp = (e) => {
    if (validateForm()) {
      navigate("/signin");
    } else {
      return false;
    }
  };

  //run signup function on pressing enter key
  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSignUp();
    }
  };

  return (
    <div className="signin_main">
      <div style={{ height: "50px" }}></div>
      {/* <SignOptionsLogo /> */}
   <div className="logo_wrapper">
   <img style={{height:"88%"}} src={logoImg} alt="" />
   </div>



      <div
        style={{
          margin: "auto",
          marginTop: "30px",
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
          onKeyDown={onKeyDown}
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
          placeholder="Email address"
          width="38%"
          type="email"
          name="email"
          maxLength={30}
          errors={formErrors.emailError}
          onKeyDown={onKeyDown}
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
          placeholder="Mobile number"
          width="38%"
          type="text"
          name="mobile"
          maxLength={10}
          errors={formErrors.mobileError}
          onKeyDown={onKeyDown}
        />
        <div
          style={{ display: formErrors.mobileError === "" ? "none" : "flex" }}
          className="error"
        >
          <BiError color="#ff5b5b" size={20} />
          {formErrors.mobileError && <span>{formErrors.mobileError} </span>}
        </div>

        <Buttons
          onClick={handleSignUp}
          className="button_main"
          width="40.5%"
          bgColor={colorConfigs.buttonColor}
          textSize="19px"
          textColor="#301f80"
          text="Sign up"
        />
   <GoToSignInSignUp type='Signup' path='/signin' />
      </div>
    </div>
  );
}
