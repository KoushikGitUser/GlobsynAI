import React from 'react'
import { BiXCircle } from 'react-icons/bi'
import { IoIosInformationCircleOutline, IoMdStarOutline } from 'react-icons/io'
import { IoPower } from 'react-icons/io5'
import { LiaUserEditSolid } from 'react-icons/lia'
import { LuSettings } from 'react-icons/lu'
import { useNavigate } from 'react-router-dom'

export default function ProfileOrMenuItems({type,close,setOpenSettingsPop}) {

  const navigate = useNavigate();

  const logOut =()=>{
    localStorage.clear();
    navigate("/signin");
  }

  return (
    <div className={type === "Menu" ? "menu_items_main":"profile_items_main"} >
      <div className='options_cross_section'>
      <BiXCircle style={{cursor:"pointer"}} onClick={()=>close(false)} size={20} />

      </div>
      <div className='options_below_main'>
        <div  onClick={()=> type === "Menu"?navigate("/about"):navigate("/editprofile")} className='options'>
          <div className='options_inner'>
          {type === "Menu"? <IoIosInformationCircleOutline size={20} />:<LiaUserEditSolid size={20} />}
       
       <div>
         {type === "Menu"?"About":"Edit Profile"}
       </div>
          </div>
         
          
        </div>
        <div className='options'>
        <div onClick={()=> {
          if(type === "Menu"){
            navigate("/help")
          }
          else{
            setOpenSettingsPop(true);
            close()
          }
        }} className='options_inner'>
          {type === "Menu"?<IoMdStarOutline size={18} />:<LuSettings size={18} />}
       
       <div>
         {type === "Menu"?"Help":"Settings"}
       </div>
          </div>

        </div>
        <div className='options'>
        <div onClick={()=> type === "Menu"?navigate("/update"):logOut()} className='options_inner'>
          {type === "Menu"? <LuSettings size={18} />:<IoPower size={18} />}
       
       <div >
         {type === "Menu"?"Update":"Log out"}
       </div>
          </div>

        </div>

      </div>
        
    </div>
  )
}
