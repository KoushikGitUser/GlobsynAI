import React, { useState } from 'react'
import { LiaToggleOffSolid, LiaToggleOnSolid } from 'react-icons/lia';
import style from './appearanceStyle.css';

export default function Appearance() {

    const [toggle,setToggle] = useState(false);

  return (
    <div className='appe_settings_main'>
          <div className='appe_settings_options '>
         Dark Mode
         {toggle?<LiaToggleOnSolid style={{cursor:"pointer"}} onClick={()=> setToggle(!toggle)} size={30} color='#8a70ab' />:<LiaToggleOffSolid style={{cursor:"pointer"}} onClick={()=> setToggle(!toggle)} size={30} color='grey' />}
         
        </div>
        <div className='appe_settings_options '>
         Chats Appearance
         <div className='manage_button'>
            Customise
         </div>
         
        </div>
        <div className='appe_settings_options '>
        Background Color
         <div className='manage_button'>
            Customise
         </div>
         
        </div>
        <div className='appe_settings_options '>
        Input Appearance
         <div className='manage_button'>
            Customise
         </div>
         
        </div>

    </div>
  )
}
