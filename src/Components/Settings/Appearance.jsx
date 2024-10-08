import React, { useState } from 'react'
import { LiaToggleOffSolid, LiaToggleOnSolid } from 'react-icons/lia';
import style from './appearanceStyle.css';
import { darkModeToggle } from '../../Redux/Slices/GetSlices';
import { useDispatch, useSelector } from 'react-redux';

export default function Appearance() {

    const dispatch = useDispatch();
    const {darkMode} = useSelector((state)=>state.Get);

    const handleDarkMode =()=>{
      dispatch(darkModeToggle())
    }

  return (
    <div className='appe_settings_main'>
          <div style={{borderBottom:darkMode?"1px solid #696969":"1px solid lightgrey"}}  className='appe_settings_options '>
         Dark Mode
         {darkMode?<LiaToggleOnSolid style={{cursor:"pointer"}} onClick={handleDarkMode} size={30} color='#8a70ab' />:<LiaToggleOffSolid style={{cursor:"pointer"}} onClick={handleDarkMode} size={30} color='grey' />}
         
        </div>
        <div style={{borderBottom:darkMode?"1px solid #696969":"1px solid lightgrey"}} className='appe_settings_options '>
         Chats Appearance
         <div style={{border:darkMode?"1px solid #696969":"1px solid lightgrey"}}  className='manage_button'>
            Customise
         </div>
         
        </div>
        <div style={{borderBottom:darkMode?"1px solid #696969":"1px solid lightgrey"}}  className='appe_settings_options '>
        Background Color
         <div style={{border:darkMode?"1px solid #696969":"1px solid lightgrey"}}  className='manage_button'>
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
