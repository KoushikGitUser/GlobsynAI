import React, { useState } from 'react'
import { LiaToggleOffSolid, LiaToggleOnSolid } from 'react-icons/lia';
import style from './appearanceStyle.css';
import { darkModeToggle } from '../../Redux/Slices/GetSlices';
import { useDispatch, useSelector } from 'react-redux';
import { SketchPicker } from "react-color";

export default function Appearance() {

    const dispatch = useDispatch();
    const {darkMode} = useSelector((state)=>state.Get);

    const [chatColor,setChatColor] = useState("red");
    const [chatBgColor,setChatBgColor] = useState("red");
    const [showColorPicker, setShowColorPicker] = useState(false);

    const handleDarkMode =()=>{
      dispatch(darkModeToggle())
    }

    const handleColorChange = (newColor) => {
      setChatColor(newColor.hex); // Update temporary color for preview
    };

    const toggleColorPicker = () => {
      setShowColorPicker(!showColorPicker);
    };

  return (
    <div className='appe_settings_main'>
          <div style={{borderBottom:darkMode?"1px solid #696969":"1px solid lightgrey"}}  className='appe_settings_options '>
         Dark Mode
         {darkMode?<LiaToggleOnSolid style={{cursor:"pointer"}} onClick={handleDarkMode} size={30} color='#8a70ab' />:<LiaToggleOffSolid style={{cursor:"pointer"}} onClick={handleDarkMode} size={30} color='grey' />}
         
        </div>
        <div style={{borderBottom:darkMode?"1px solid #696969":"1px solid lightgrey"}} className='appe_settings_options '>
         Chats Color
         <div onClick={toggleColorPicker} style={{border:darkMode?"1px solid #696969":"1px solid lightgrey"}}  className={darkMode?'manage_button_dark':'manage_button'}>
            Customise
         </div>
         {showColorPicker && <div className='color_picker'>
          Change the Chat Color
         <SketchPicker color={chatColor} onChange={handleColorChange} />
         <div onClick={toggleColorPicker} className='confirm_color_picker_main'>
          <div className='color_picker_button_fisrt'>
            Confirm color
          </div>
          <div style={{background:chatColor}} className='color_preveiw'>

          </div>

        </div>
         </div>}
         
         
         
        </div>
        <div style={{borderBottom:darkMode?"1px solid #696969":"1px solid lightgrey"}}  className='appe_settings_options '>
        Background Color
         <div style={{border:darkMode?"1px solid #696969":"1px solid lightgrey"}} className={darkMode?'manage_button_dark':'manage_button'}>
            Customise
         </div>
         
        </div>
       
        {/* <div className='appe_settings_options '>
        Input Appearance
         <div className='manage_button'>
            Customise
         </div>
         
        </div> */}

    </div>
  )
}
