import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { FaRegBell, FaRegUser } from "react-icons/fa6";
import { PiUserCircleFill } from "react-icons/pi";
import { BiDotsVertical } from "react-icons/bi";
import ProfileOrMenuItems from "./ProfileOrMenuItems";
import { colorConfigs } from "../colorConfig";
import { GoInfo } from "react-icons/go";
import SettingsPopup from "./SettingsPopup";
import ChatHistoryMobile from "./ChatHistoryMobile";
import logoImg from '../Assets/Images/IVTInsidePageLogoWhite.png'
import NotificationsPop from "./NotificationsPop";
import { FiEdit } from "react-icons/fi";
import { LuUser2 } from "react-icons/lu";
import { RiMenuFold4Line, RiMenuUnfold4Line2 } from "react-icons/ri";


export default function Navbar({setToggleChatHistory,toggleChatHistory}) {

    const user_id = localStorage.getItem("user_id");
    
    //All states
    const [clickMenu,setClickMenu] = useState(false);
    const [clickProfile,setClickProfile] = useState(false);
    const [clickNotify,setClickNotify] = useState(false);
    const [openSideHistory,setOpenSideHistory] = useState(false);
    const [openSettingsPop,setOpenSettingsPop] = useState(false);
    const [settingsNumber,setSettingsNumber] = useState(0);

  return (
    <>
     <div className="nav_main">
      <div className="nav_inner">
        <div className="logo_and_menu">
        <div className="menu_button_desktop" onClick={()=>{
                setToggleChatHistory(!toggleChatHistory)
                setClickMenu(!clickMenu);
                setClickProfile(false);
            }}> 
                {clickMenu?<RiMenuFold4Line size={25} color="white" />:<RiMenuUnfold4Line2 size={25} color="white" />}
            </div>
            <div className="logo">
              <img style={{height:"32px"}} src={logoImg} alt="" />
            </div>
           
            <div className="menu_button_mobile" onClick={()=>{
                setOpenSideHistory(!openSideHistory)
                setClickProfile(false);
                setClickNotify(false)
            }}> 
                {clickMenu?<BiDotsVertical size={25} color="white" />:<TiThMenu size={25} color="white" />}
            </div>
        </div>
        <div  className="nav_options">
        <FiEdit size={20} color="white" />
            <div className="notify_bell">
            <FaRegBell onClick={()=>{
              setClickNotify(!clickNotify);
              setClickMenu(false);
              setClickProfile(false);
            }} size={20} color='white' />
            <div className="bell_dot">

            </div>
            </div>
            {/* <div>
            <GoInfo  size={20} color={colorConfigs.nav_options}/>
            </div> */}
            {
                user_id !=="" && user_id !== null && user_id !== undefined?<div onClick={()=>{
                    setClickProfile(!clickProfile);
                    setClickMenu(false);
                    setClickNotify(false)
                }}>
                  <div className={clickProfile?"active_profile":""}>
                  <LuUser2  size={20} color={clickProfile?"orange":"white"} />
                  </div>
             
                </div>:<div style={{color:"#6450e8"}}></div>
            }
            
        </div>
      </div>
    </div>
    {/* {clickMenu? <div className="">
    <ProfileOrMenuItems setSettingsNumber={setSettingsNumber} setOpenSettingsPop={setOpenSettingsPop} close={setClickMenu} type="Menu" />
    </div>:null} */}
    {clickProfile?<div style={{position:"relative"}}>
     <ProfileOrMenuItems setSettingsNumber={setSettingsNumber} setOpenSettingsPop={setOpenSettingsPop} close={setClickProfile} type='Profile' />
    </div>:null}
    {clickNotify?<NotificationsPop close={setClickNotify}/>:null}
    {openSettingsPop?<div >
      <SettingsPopup settingsNumber={settingsNumber} closeSettingsPop={setOpenSettingsPop} />
    </div>:null}
    {openSideHistory?<div>
      <ChatHistoryMobile openSideHistoryMobile={openSideHistory} closeSideHistoryMobile={setOpenSideHistory}/>
    </div>:null}
   
   
    </> 
   
  );
}
