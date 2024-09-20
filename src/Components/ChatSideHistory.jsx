import React from 'react';
import gptLogo from '../Assets/Images/chatgptlogo.png';
import anthropic from '../Assets/Images/Anthropic logo.png'

export default function ChatSideHistory() {
  return (
    <div className='chat_history_wrapper'>
      <div className='side_history_top_blank_nav'>

      </div>
      <div className='chat_history'>
      <h3 style={{paddingLeft:"10%"}}>Chat History</h3>
    <div className='chat_history_middle'> 

    </div>

    <div className='ai_part'>
          <div style={{color:"black",fontSize:"15px",fontWeight:"600"}}>Powered by</div>
          <div style={{color:"black",fontSize:"27px",fontWeight:"600",fontStyle:"italic",paddingTop:"10px",display:"flex",alignItems:"center",gap:"10px"}}>
           <img src={anthropic} style={{height:"15px"}} alt="" /></div>
      </div>
      </div>
   

  </div>
  )
}
