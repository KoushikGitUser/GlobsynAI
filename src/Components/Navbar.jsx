import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { FaRegBell } from "react-icons/fa6";
import { MdOutlineQuestionMark } from "react-icons/md";
import { PiUserCircleFill } from "react-icons/pi";
import { BiDotsVertical } from "react-icons/bi";
import ProfileOrMenuItems from "./ProfileOrMenuItems";
import { colorConfigs } from "../colorConfig";


export default function Navbar() {

    const user_id = localStorage.getItem("user_id");
    
    //All states
    const [clickMenu,setClickMenu] = useState(false);
    const [clickProfile,setClickProfile] = useState(false);


  return (
    <>
     <div style={{background:colorConfigs.navbar_bg}} className="nav_main">
      <div className="nav_inner">
        <div className="logo_and_menu">
            <div className="logo">LOGO</div>
            <div onClick={()=>{
                setClickMenu(!clickMenu);
                setClickProfile(false);
            }}> 
                {clickMenu?<BiDotsVertical size={25} color="white" />:<TiThMenu size={25} color="white" />}
            </div>
        </div>
        <div  className="nav_options">
            <div className="notify_bell">
            <FaRegBell size={20} color={colorConfigs.nav_options} />
            <div className="bell_dot">

            </div>
            </div>
            <div>
            <MdOutlineQuestionMark  size={20} color={colorConfigs.nav_options}/>
            </div>
            {
                user_id !=="" && user_id !== null && user_id !== undefined?<div onClick={()=>{
                    setClickProfile(!clickProfile);
                    setClickMenu(false)
                }}>
                  <div className={clickProfile?"active_profile":""}>
                  <PiUserCircleFill  size={25} color={colorConfigs.nav_options}/>
                  </div>
             
                </div>:<div style={{color:"#6450e8"}}>abc</div>
            }
            
        </div>
      </div>
    </div>
    {clickMenu? <div className="">
    <ProfileOrMenuItems close={setClickMenu} type="Menu" />
    </div>:null}
    {clickProfile?<div style={{position:"relative"}}>
     <ProfileOrMenuItems close={setClickProfile} type='Profile' />
    </div>:null}
   
   
    </>
   
  );
}
