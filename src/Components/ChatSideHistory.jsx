import React from 'react';
import anthropic from '../Assets/Images/Anthropic logo.png'
import Histories from './Histories';

export default function ChatSideHistory({addToChat,historyAddToChat}) {

  const historyArray = [
    {
      history:"Write an essay on Democracy and what are its bad effects",
      day:"Today"
    },
    {
      history:"Write an essay on Democracy and what are its bad effects",
      day:"Today"
    },
    {
      history:"Write an essay on Democracy and what are its bad effects",
      day:"Today"
    },
    {
      history:"How to add comments on facebook",
      day:"Yesterday"
    },
    {
      history:"How to add comments on facebook",
      day:"Yesterday"
    },
    {
      history:"How to add comments on facebook",
      day:"Yesterday"
    }
  ]

  return (
    <div className='chat_history_wrapper'>
      <div className='side_history_top_blank_nav'>

      </div>
      <div className='chat_history'>
      <h3 style={{paddingLeft:"5%"}}>Chat History</h3>
    <div className='chat_history_middle'> 
   <div style={{color:"grey"}}>
    Today
   </div>
   <Histories historyAddToChat={historyAddToChat} day='Today' historyArray={historyArray}/>

   <div style={{color:"grey"}}>
    Yesterday
   </div>
   <Histories historyAddToChat={historyAddToChat} day='Yesterday' historyArray={historyArray}/>
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
