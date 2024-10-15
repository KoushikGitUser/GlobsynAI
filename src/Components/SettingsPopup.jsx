import React, { useEffect, useRef, useState } from "react";
import { LuCrown, LuSettings } from "react-icons/lu";
import { MdOutlineColorLens, MdOutlineToggleOn } from "react-icons/md";
import { RiUserSettingsLine } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import General from "./Settings/General";
import Appearance from "./Settings/Appearance";
import Preferences from "./Settings/Preferences";
import Premium from "./Settings/Premium";
import Profile from "./Settings/Profile";
import { useSelector } from "react-redux";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function SettingsPopup({ closeSettingsPop,settingsNumber }) {
  
  const {darkMode} = useSelector((state)=>state.Get);
  const [settingPage, setSettingsPage] = useState(settingsNumber);
  let settingsComponentsArray = [
    <General />,
    <Appearance />,
    <Preferences />,
    <Profile />,
  ];

  const profileRef = useRef(null);
  const scrollContainerRef = useRef(null);

  useEffect(()=>{
    if(settingsNumber === 3){
      profileRef.current.scrollIntoView({behavior: "smooth"});
    }

  },[]);

  const scrollToLastElement = () => {
    const scrollContainer = scrollContainerRef.current;
    const lastElement = scrollContainer.lastElementChild;

    if (lastElement) {
      lastElement.scrollIntoView({ behavior: "smooth", inline: "end" });
    }
  };
  const scrollToFirstElement = () => {
    const scrollContainer = scrollContainerRef.current;
    const firstElement = scrollContainer.firstElementChild;

    if (firstElement) {
      firstElement.scrollIntoView({ behavior: "smooth", inline: "start" });
    }
  };

  const setDarkOptions =(index)=>{
    if(settingPage === index){
      if(darkMode){
        return "settings_options_active_dark"
      }
      else{
        return "settings_options_active"
      }
    }
    else{
      if(darkMode){
        return "settings_options_dark"
      }
      else{
        return "settings_options"
      }
    }
  }

  return (
    <>
       <div
      onClick={() => closeSettingsPop(false)}
      className="settings_pop_main_wrapper"
    >
       </div>
      <div className={darkMode?"settings_pop_main_dark":"settings_pop_main"}>
        <div style={{borderBottom:darkMode?"1px solid #696969":"1px solid lightgrey"}} className="settings_pop_upper">
          Settings
          <RxCross1
            style={{ cursor: "pointer" }}
            onClick={() => closeSettingsPop(false)}
            size={20}
            color={darkMode?"white":"black"}
          />
        </div>
        <div  className="settings_content_main">
         
         <div className="settings_sidebar_wrapper">
         <div onClick={scrollToFirstElement} style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"5px"}}>
          <IoIosArrowBack size={25} color="grey" />
          </div>
         <div  ref={scrollContainerRef}  className="settings_pop_sidebar">
            <div
              onClick={() => setSettingsPage(0)}
              className={setDarkOptions(0)}
            >
              {" "}
              <LuSettings size={18} />
              General
            </div>
            <div
              onClick={() => setSettingsPage(1)}
              className={setDarkOptions(1)}
            >
              <MdOutlineColorLens size={18} />
              Appearnce
            </div>
            <div
              onClick={() => setSettingsPage(2)}
              className={setDarkOptions(2)}
            >
              <MdOutlineToggleOn size={18} />
              Preferences
            </div>
            <div
            ref={profileRef}
              onClick={() => setSettingsPage(3)}
              className={setDarkOptions(3)}
            >
              <RiUserSettingsLine size={19} />
              Profile
            </div>
            {/* <div
              onClick={() => setSettingsPage(4)}
              className={
                settingPage == 4
                  ? "settings_options_active"
                  : "settings_options"
              }
            >
              <LuCrown size={17} />
              Premuim
            </div> */}
          </div>
          <div onClick={scrollToLastElement} style={{borderRadius:"50px",display:"flex",justifyContent:"center",alignItems:"center"}}>
          <IoIosArrowForward size={25} color="grey" />
          </div>
         
         </div>
         <div style={{borderRight:darkMode?"1px solid #":"1px solid lightgrey"}}  className="settings_pop_sidebar_desktop">
            <div
              onClick={() => setSettingsPage(0)}
              className={setDarkOptions(0)}
            >
              {" "}
              <LuSettings size={18} />
              General
            </div>
            <div
              onClick={() => setSettingsPage(1)}
              className={setDarkOptions(1)}
            >
              <MdOutlineColorLens size={18} />
              Appearnce
            </div>
            <div
              onClick={() => setSettingsPage(2)}
              className={setDarkOptions(2)}
            >
              <MdOutlineToggleOn size={18} />
              Preferences
            </div>
            <div
          
              onClick={() => setSettingsPage(3)}
              className={setDarkOptions(3)}
            >
              <RiUserSettingsLine size={19} />
              Profile
            </div>
            {/* <div
              onClick={() => setSettingsPage(4)}
              className={
                settingPage == 4
                  ? "settings_options_active"
                  : "settings_options"
              }
            >
              <LuCrown size={17} />
              Premuim
            </div> */}
          </div>
        




          <div className="settings_view_main">
            {settingsComponentsArray[settingPage]}
          </div>
        </div>
      </div>
    </>
 
   
  );
}
