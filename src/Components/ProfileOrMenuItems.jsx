import React from 'react'
import { BiXCircle } from 'react-icons/bi'
import { IoIosInformationCircleOutline, IoMdStarOutline } from 'react-icons/io'
import { IoPower } from 'react-icons/io5'
import { LiaUserEditSolid } from 'react-icons/lia'
import { LuSettings } from 'react-icons/lu'
import { RxCross1 } from 'react-icons/rx'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function ProfileOrMenuItems({type,close,setOpenSettingsPop,setSettingsNumber}) {

  const navigate = useNavigate();

  const {darkMode} = useSelector((state)=>state.Get);

  const logOut =()=>{
    localStorage.clear();
    navigate("/signin");
    window.location.reload()
  }

  const setMenuOptToDark=()=>{
    if(type === "Menu"){
      if(darkMode){
        return "options_dark"
      }
      else{
        return "options"
      }
    }
    else{
      return "display-none"
    }
  }
  return (
    <div style={{backgroundColor:darkMode?"#332b69":"white",color:darkMode?"white":"black",boxShadow:darkMode?"5px 5px 5px 0px #24164300":"5px 5px 5px 0px #dfcdf3"}} className="profile_items_main" >
      <div className='options_cross_section'>
      <RxCross1 style={{cursor:"pointer"}} onClick={()=>close(false)} size={20} />

      </div>
      <div className='options_below_main'>
        <div  onClick={()=>{
          if(type === "Menu"){
            navigate("/about");
          }
          else{
            setOpenSettingsPop(true);
            close()
            setSettingsNumber(3)
          }
        }} className={darkMode?'options_dark':'options'}>
          <div className='options_inner'>
          {type === "Menu"? <IoIosInformationCircleOutline size={20} />:<LiaUserEditSolid size={20} />}
       
       <div>
         {type === "Menu"?"About":"Edit Profile"}
       </div>
          </div>
         
          
        </div>
        <div  onClick={()=>{
            navigate("/about");
        }} className={darkMode?'options_dark':'options'}>
          <div className='options_inner'>
          <IoIosInformationCircleOutline size={20} />
       
       <div>
         About
       </div>
          </div>
         
          
        </div>
        {/* <div className= {setMenuOptToDark()}>
        <div onClick={()=> {
          if(type === "Menu"){
            navigate("/help")
          }
          else{
            setOpenSettingsPop(true);
            close();
            setSettingsNumber(0)
          }
        }} className= "options_inner">
          {type === "Menu"?<IoMdStarOutline size={18} />:null}
       
       <div>
         {type === "Menu"?"Help":""}
       </div>
          </div>

        </div> */}
        <div className={darkMode?'options_dark':'options'}>
        <div onClick={()=>{
           setOpenSettingsPop(true);
            close();
            setSettingsNumber(0)
          }
        } className='options_inner'>
       <LuSettings size={18} />
       
       <div >
         Settings
       </div>
          </div>

        </div>

        <div className={darkMode?'options_dark':'options'}>
        <div onClick={()=>{
          if(type === "Menu"){
            setOpenSettingsPop(true);
            close();
            setSettingsNumber(0)
          }
          else{
            logOut()
          }
        }} className='options_inner'>
          {type === "Menu"? <LuSettings size={18} />:<IoPower size={18} />}
       
       <div >
         {type === "Menu"?"Settings":"Log out"}
       </div>
          </div>

        </div>

      </div>
        
    </div>
  )
}
