import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { LuCrown, LuSettings } from 'react-icons/lu'
import { MdOutlineColorLens, MdOutlineToggleOn } from 'react-icons/md'
import { RiUserSettingsLine } from 'react-icons/ri'
import { RxCross1 } from 'react-icons/rx'

export default function SettingsPopup({closeSettingsPop}) {
  return (
    <div className="settings_pop_main">
        <div className='settings_pop_upper'>
            Settings
            <RxCross1 style={{cursor:"pointer"}} onClick={()=>closeSettingsPop(false)} size={20} color='black' />

        </div>
        <div className='settings_content_main'>
            {/* <div className='settings_pop_sidebar_wrapper'> */}
            <div className='settings_pop_sidebar'>
                <div className='settings_options'> <LuSettings size={18} />General</div>
                <div className='settings_options'><MdOutlineColorLens size={18} />Appearnce</div>
                <div className='settings_options'><MdOutlineToggleOn size={18} />Preferences</div>
                <div className='settings_options'><RiUserSettingsLine size={19} />Profile</div>
                <div className='settings_options'><LuCrown size={17} />Premuim</div>

            </div>
            {/* <IoIosArrowForward />
            </div> */}
        
            <div className='settings_view_main'>

            </div>

        </div>

    </div>
  )
}
