import React from 'react';
import anthropic from '../Assets/Images/Anthropic logo.png'
import anthropicWhite from '../Assets/Images/Anthropic logo_white.png';
import Histories from './Histories';
import { useSelector } from 'react-redux';
import { historyArray } from '../config';
import ChatHistoryIdeas from './ChatHistoryIdeas';
import { IoIosArrowDown } from 'react-icons/io';
import { FiEdit } from 'react-icons/fi';

export default function ChatSideHistory({newChat}) {

  const {darkMode} = useSelector((state)=>state.Get);
 

  return (
    <div style={{backgroundColor:darkMode?"#170c2f":"white",color:darkMode?"lightgrey":"black",boxShadow:darkMode?"5px 0px 5px 0px #24164300":"5px 0px 5px 0px #d7ccfd"}} className='chat_history_wrapper'>
    
    <div>
    <div onClick={()=> newChat()} className={darkMode?'new_chat_button_dark':'new_chat_button'}>
      <FiEdit size={14} color={darkMode?"white":"black"} />
          New Chat
      </div>
    
      <div style={{backgroundColor:darkMode?"#170c2f":"white",color:darkMode?"lightgrey":"black"}} className='chat_history'>
        <div className='chat_history_ideas_wrapper'>
        <div style={{paddingLeft:"5%",fontSize:"16px",fontWeight:"700",marginTop:"20px",marginBottom:"20px"}}>Start Learning</div>
    <div className='chat_history_middle'> 
    <ChatHistoryIdeas/>
    </div>
        <div style={{paddingLeft:"5%",fontSize:"16px",fontWeight:"700",marginBottom:"20px"}}>Chat History</div>
    <div className='chat_history_middle_below'> 
   <div style={{color:"grey",fontSize:"14px"}}>
    Today
   </div>
   <Histories  day='Today' historyArray={historyArray}/>

   <div style={{color:"grey",fontSize:"14px"}}>
    Previous 7 days
   </div>
   <Histories  day='Yesterday' historyArray={historyArray}/>

   <div style={{color:"grey",fontSize:"14px"}}>
    Older
   </div>
   <Histories  day='Yesterday' historyArray={historyArray}/>
    </div>
        </div>

  
      </div>
    </div>
     
  
      <div className='ai_part'>
          <div style={{color:darkMode?"white":"black",fontSize:"14px",fontWeight:"600"}}>Powered by</div>
          <div style={{color:"black",fontSize:"27px",fontWeight:"600",fontStyle:"italic",display:"flex",alignItems:"center",gap:"10px"}}>
            {darkMode? <img src={anthropicWhite} style={{height:"15px"}} alt="" />:<img src={anthropic} style={{height:"15px"}} alt="" />}
           </div>
      </div>

  </div>
  )
}
