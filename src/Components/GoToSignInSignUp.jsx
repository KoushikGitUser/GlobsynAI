import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function GoToSignInSignUp({type,path}) {
  const navigate = useNavigate();

  return (
    <div style={{ color: "white", fontSize: "18px", marginTop:type==="Signin"?"50px":"10px" }}>
    {type === "Signin"?"Don't have an account?":"Already have an account?"} {" "}
    <span
      onClick={() => navigate(path)}
      style={{ color: "#ffbfb5", paddingLeft: "10px", cursor: "pointer" }}
    >
      {type === "Signin"? "Sign up":"Sign in"}
    </span>
  </div>
  )
}
