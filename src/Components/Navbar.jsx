import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { FaRegBell } from "react-icons/fa6";
import { PiUserCircleFill } from "react-icons/pi";
import { BiDotsVertical } from "react-icons/bi";
import ProfileOrMenuItems from "./ProfileOrMenuItems";
import { colorConfigs } from "../colorConfig";
import { GoInfo } from "react-icons/go";
import SettingsPopup from "./SettingsPopup";
import ChatHistoryMobile from "./ChatHistoryMobile";


export default function Navbar({historyAddToChat}) {

    const user_id = localStorage.getItem("user_id");
    
    //All states
    const [clickMenu,setClickMenu] = useState(false);
    const [clickProfile,setClickProfile] = useState(false);
    const [openSideHistory,setOpenSideHistory] = useState(false);
    const [openSettingsPop,setOpenSettingsPop] = useState(false);
    const [settingsNumber,setSettingsNumber] = useState(0);

  return (
    <>
     <div style={{background:colorConfigs.navbar_bg}} className="nav_main">
      <div className="nav_inner">
        <div className="logo_and_menu">
            <div className="logo">LOGO</div>
            <div className="menu_button_desktop" onClick={()=>{
                setClickMenu(!clickMenu);
                setClickProfile(false);
            }}> 
                {clickMenu?<BiDotsVertical size={25} color="white" />:<TiThMenu size={25} color="white" />}
            </div>
            <div className="menu_button_mobile" onClick={()=>{
                setOpenSideHistory(!openSideHistory)
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
            <GoInfo  size={20} color={colorConfigs.nav_options}/>
            </div>
            {
                user_id !=="" && user_id !== null && user_id !== undefined?<div onClick={()=>{
                    setClickProfile(!clickProfile);
                    setClickMenu(false)
                }}>
                  <div className={clickProfile?"active_profile":""}>
                  <PiUserCircleFill  size={25} color={colorConfigs.nav_options}/>
                  </div>
             
                </div>:<div style={{color:"#6450e8"}}></div>
            }
            
        </div>
      </div>
    </div>
    {clickMenu? <div className="">
    <ProfileOrMenuItems setSettingsNumber={setSettingsNumber} setOpenSettingsPop={setOpenSettingsPop} close={setClickMenu} type="Menu" />
    </div>:null}
    {clickProfile?<div style={{position:"relative"}}>
     <ProfileOrMenuItems setSettingsNumber={setSettingsNumber} setOpenSettingsPop={setOpenSettingsPop} close={setClickProfile} type='Profile' />
    </div>:null}
    {openSettingsPop?<div >
      <SettingsPopup settingsNumber={settingsNumber} closeSettingsPop={setOpenSettingsPop} />
    </div>:null}
    {openSideHistory?<div>
      <ChatHistoryMobile openSideHistoryMobile={openSideHistory} historyAddToChat={historyAddToChat} closeSideHistoryMobile={setOpenSideHistory}/>
    </div>:null}
   
   
    </> 
   
  );
}
