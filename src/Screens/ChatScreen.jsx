import React from 'react'
import Navbar from '../Components/Navbar'
import { FiSun } from 'react-icons/fi'
import { BiSend } from 'react-icons/bi';
import gptLogo from '../Assets/Images/chatgptlogo.png';
import { colorConfigs } from '../colorConfig';

export default function ChatScreen() {
  return (
    <div>
        <Navbar/>
       <div className='chat_main'>
        <div className='chat_history'>
          <h3 style={{paddingLeft:"10px"}}>Chat History</h3>
          <div> 

          </div>

          <div className='ai_part'>
                <div style={{color:"black",fontSize:"15px",fontWeight:"600"}}>Powered by</div>
                <div style={{color:"black",fontSize:"27px",fontWeight:"600",fontStyle:"italic",paddingTop:"10px",display:"flex",alignItems:"center",gap:"10px"}}>
                 <img src={gptLogo} style={{height:"30px"}} alt="" /> Open AI</div>
            </div>

        </div>
        <div className='chat_lower_part'>
          <div className='chat_input_section'>
            <div className='chat_input_section_inner'>
              <div>
              <FiSun size={28} color='#6f49b9' />
              </div>
              <div className='chat_input_main'>
              <input placeholder='Type message' style={{background:colorConfigs.chat_input,border:`1px solid ${colorConfigs.chat_input}`}} className='chat_input' type="text" />
              <BiSend className='send_icon' size={20} color='#ffbfb5' />
              </div>
            

            </div>

          </div>
          
        </div>

       </div>
    </div>
  )
}
