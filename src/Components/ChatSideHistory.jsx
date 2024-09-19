import React from 'react';
import gptLogo from '../Assets/Images/chatgptlogo.png'

export default function ChatSideHistory() {
  return (
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
  )
}
