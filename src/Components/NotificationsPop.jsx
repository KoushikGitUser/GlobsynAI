import React from 'react'
import { BiXCircle } from 'react-icons/bi';
import { GoDotFill } from 'react-icons/go';
import { VscBellDot } from 'react-icons/vsc';
import { useSelector } from 'react-redux';

export default function NotificationsPop({close,setClickMenu,setClickProfile}) {

    const {darkMode} = useSelector((state)=>state.Get);
    const notifyData =[
        {
            notify:"Amazing Offer",
            desc:"Amazing offer related to chats"
        },
        {
            notify:"First five chats FREE",
            desc:"First five chats totally free"
        },
        {
            notify:"Dark mode enabled",
            desc:"You just enabled the new dark mode"
        },
        {
            notify:"Dark mode enabled",
            desc:"You just enabled the new dark mode"
        },
        {
            notify:"Dark mode enabled",
            desc:"You just enabled the new dark mode"
        },
        {
            notify:"Dark mode enabled",
            desc:"You just enabled the new dark mode"
        },
        {
            notify:"Dark mode enabled",
            desc:"You just enabled the new dark mode"
        },
        {
            notify:"Dark mode enabled",
            desc:"You just enabled the new dark mode"
        },
    ]


  return (
    <div style={{backgroundColor:darkMode?"#332b69":"white",color:darkMode?"white":"black",boxShadow:darkMode?"5px 5px 5px 0px #24164300":"5px 5px 5px 0px #dfcdf3"}} className='notification_popup' >
      <div className='options_cross_section'>
      <BiXCircle style={{cursor:"pointer"}} onClick={()=>close(false)} size={20} />

      </div>

      <div className='notification_holder_main'>
          {notifyData?.map((items,index)=>{
            return(
                <div className='notify_data'>
                    <div className='notify_text_icon_wrapper'>
                    <GoDotFill color='pink' size={17} />
                    <div className='notify_text'>
                   {items?.notify}
                    </div> 
                    </div>
                 
                    <div className='notify_desc'>
                    {items?.desc}
                    </div>
                

                </div>
            )
          })}

      </div>
        
    </div>
  )
}
