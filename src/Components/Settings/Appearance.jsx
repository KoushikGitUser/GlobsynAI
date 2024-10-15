import React, { useState } from 'react'
import { LiaToggleOffSolid, LiaToggleOnSolid } from 'react-icons/lia';
import style from './appearanceStyle.css';
import { changeBgColor, changeChatColor, darkModeToggle } from '../../Redux/Slices/GetSlices';
import { useDispatch, useSelector } from 'react-redux';
import { SketchPicker } from "react-color";
import { BiXCircle } from 'react-icons/bi';
import { RxCross1 } from 'react-icons/rx';

export default function Appearance() {

    const dispatch = useDispatch();
    const {darkMode} = useSelector((state)=>state.Get);

    const [chatColor,setChatColor] = useState("red");
    const [chatBgColor,setChatBgColor] = useState("red");
    const [showChatColorPicker, setShowChatColorPicker] = useState(false);
    const [showBgColorPicker,setShowBgColorPicker] = useState(false);

    const handleDarkMode =()=>{
      dispatch(darkModeToggle())
    }

    const handleChatColorChange = (newColor) => {
      setChatColor(newColor.hex); // Update temporary color for preview
    };
    const handleBgColorChange = (newColor) => {
      setChatBgColor(newColor.hex); // Update temporary color for preview
    };

    const toggleChatColorPicker = () => {
      setShowChatColorPicker(!showChatColorPicker);
    };

    const toggleBgColorPicker = () => {
      setShowBgColorPicker(!showBgColorPicker);
    };

    const confirmChatColor=()=>{
      setShowChatColorPicker(false);
      dispatch(changeChatColor(chatColor))
    }

    const confirmChatBgColor=()=>{
      setShowBgColorPicker(false);
      dispatch(changeBgColor(chatBgColor))
    }

    const setDefaultChatColor = ()=>{
        dispatch(changeChatColor(darkMode?"#6351b0":"white"))
    }

    const setDefaultChatBgColor = ()=>{
      dispatch(changeBgColor(darkMode?"#201747":"#fdf4fb"))
  }
    

  return (
    <div className='appe_settings_main'>
          <div style={{borderBottom:darkMode?"1px solid #696969":"1px solid lightgrey"}}  className='appe_settings_options '>
         Dark Mode
         {darkMode?<LiaToggleOnSolid style={{cursor:"pointer"}} onClick={handleDarkMode} size={30} color='#8a70ab' />:<LiaToggleOffSolid style={{cursor:"pointer"}} onClick={handleDarkMode} size={30} color='grey' />}
         
        </div>
        <div style={{borderBottom:darkMode?"1px solid #696969":"1px solid lightgrey"}} className='appe_settings_options '>
         Chats Color
         <div>
         <div onClick={toggleChatColorPicker} style={{border:darkMode?"1px solid #696969":"1px solid lightgrey"}}  className={darkMode?'manage_button_dark':'manage_button'}>
            Customise
         </div>
         <div onClick={setDefaultChatColor} style={{border:darkMode?"1px solid #696969":"1px solid lightgrey",marginTop:"10px"}}  className={darkMode?'manage_button_dark':'manage_button'}>
            Set to default
         </div>
         </div>
        

        {/* Chat color picker section */}
         {showChatColorPicker && <div className='color_picker'>
          <div className='cross_wrapper'>
          <div style={{textAlign:"center",}}>
          Customise the Chat Color
          </div>
          <RxCross1 style={{cursor:"pointer"}} onClick={toggleChatColorPicker} size={25} />
          </div>
         
         <SketchPicker color={chatColor} onChange={handleChatColorChange} />
         <div onClick={confirmChatColor} className='confirm_color_picker_main'>
          <div className='color_picker_button_fisrt'>
            Confirm color
          </div>
          <div style={{background:chatColor}} className='color_preveiw'>

          </div>

        </div>
         </div>}


         {/* Background color picker section */}
         {showBgColorPicker && <div className='color_picker'>
          <div className='cross_wrapper'>
          <div style={{textAlign:"center",}}>
          Customise the Background
          </div>
          <RxCross1 style={{cursor:"pointer"}} onClick={toggleBgColorPicker} size={25} />
          </div>
         
         <SketchPicker color={chatBgColor} onChange={handleBgColorChange} />
         <div onClick={confirmChatBgColor} className='confirm_color_picker_main'>
          <div className='color_picker_button_fisrt'>
            Confirm color
          </div>
          <div style={{background:chatBgColor}} className='color_preveiw'>

          </div>

        </div>
         </div>}
         
         
         
        </div>
        <div style={{borderBottom:darkMode?"1px solid #696969":"1px solid lightgrey"}}  className='appe_settings_options '>
        Background Color
        <div>
        <div onClick={toggleBgColorPicker} style={{border:darkMode?"1px solid #696969":"1px solid lightgrey"}} className={darkMode?'manage_button_dark':'manage_button'}>
            Customise
         </div>
         <div onClick={setDefaultChatBgColor} style={{border:darkMode?"1px solid #696969":"1px solid lightgrey",marginTop:"10px"}}  className={darkMode?'manage_button_dark':'manage_button'}>
            Set to default
         </div>
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
