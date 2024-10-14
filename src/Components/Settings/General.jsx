import React, { useState } from 'react';
import style from './generalStyle.css';
import { BsToggleOff, BsToggleOn } from 'react-icons/bs';
import { LiaToggleOffSolid, LiaToggleOnSolid } from 'react-icons/lia';
import { RiArrowDownWideLine } from 'react-icons/ri';
import { SlArrowDown } from 'react-icons/sl';
import { IoIosArrowDown } from 'react-icons/io';
import { useSelector } from 'react-redux';

export default function General() {
    
    const [toggle,setToggle] = useState(false);
    const {darkMode} = useSelector((state)=>state.Get);

  return (
    <div className='gen_settings_main'>
        {/* <div className='gen_settings_options '>
         Always show code
         {toggle?<LiaToggleOnSolid style={{cursor:"pointer"}} onClick={()=> setToggle(!toggle)} size={30} color='#8a70ab' />:<LiaToggleOffSolid style={{cursor:"pointer"}} onClick={()=> setToggle(!toggle)} size={30} color='grey' />}
         
        </div> */}
        <div style={{borderBottom:darkMode?"1px solid #696969":"1px solid lightgrey"}}  className='gen_settings_options '>
       Archived chats
         <div style={{border:darkMode?"1px solid #696969":"1px solid lightgrey"}}  className={darkMode?'manage_button_dark':'manage_button'}>
            Manage
         </div>
        </div>
        <div style={{borderBottom:darkMode?"1px solid #696969":"1px solid lightgrey"}}  className='gen_settings_options '>
         Archive all chats
         <div style={{border:darkMode?"1px solid #696969":"1px solid lightgrey"}}  className={darkMode?'manage_button_dark':'manage_button'}>
            Archive all
         </div>
        </div>
     
        {/* <div className='gen_settings_options '>
         Language
         <div className='manage_button lang'>
            English <IoIosArrowDown />
         </div>
        </div>
        <div className='gen_settings_options '>
         Delete all chats
         <div className='manage_button delete'>
            Delete
         </div>
        </div> */}

    </div>
  )
}
