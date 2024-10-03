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

export default function SettingsPopup({ closeSettingsPop,settingsNumber }) {
  const [settingPage, setSettingsPage] = useState(settingsNumber);
  let settingsComponentsArray = [
    <General />,
    <Appearance />,
    <Preferences />,
    <Profile />,
    <Premium />,
  ];

  const profileRef = useRef(null);

  useEffect(()=>{
    if(settingsNumber === 3){
      profileRef.current.scrollIntoView({behavior: "smooth"});
    }

  },[])

  return (
    <>
       <div
      onClick={() => closeSettingsPop(false)}
      className="settings_pop_main_wrapper"
    >
       </div>
      <div className="settings_pop_main">
        <div className="settings_pop_upper">
          Settings
          <RxCross1
            style={{ cursor: "pointer" }}
            onClick={() => closeSettingsPop(false)}
            size={20}
            color="black"
          />
        </div>
        <div className="settings_content_main">
          <div className="settings_pop_sidebar">
            <div
              onClick={() => setSettingsPage(0)}
              className={
                settingPage == 0
                  ? "settings_options_active"
                  : "settings_options"
              }
            >
              {" "}
              <LuSettings size={18} />
              General
            </div>
            <div
              onClick={() => setSettingsPage(1)}
              className={
                settingPage == 1
                  ? "settings_options_active"
                  : "settings_options"
              }
            >
              <MdOutlineColorLens size={18} />
              Appearnce
            </div>
            <div
              onClick={() => setSettingsPage(2)}
              className={
                settingPage == 2
                  ? "settings_options_active"
                  : "settings_options"
              }
            >
              <MdOutlineToggleOn size={18} />
              Preferences
            </div>
            <div
            ref={profileRef}
              onClick={() => setSettingsPage(3)}
              className={
                settingPage == 3
                  ? "settings_options_active"
                  : "settings_options"
              }
            >
              <RiUserSettingsLine size={19} />
              Profile
            </div>
            <div
              onClick={() => setSettingsPage(4)}
              className={
                settingPage == 4
                  ? "settings_options_active"
                  : "settings_options"
              }
            >
              <LuCrown size={17} />
              Premuim
            </div>
          </div>
          <div className="settings_view_main">
            {settingsComponentsArray[settingPage]}
          </div>
        </div>
      </div>
    </>
 
   
  );
}
