import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { FiSun } from "react-icons/fi";
import { BiSend } from "react-icons/bi";
import { colorConfigs } from "../colorConfig";
import ChatSideHistory from "../Components/ChatSideHistory";
import ChatInput from "../Components/ChatInput";
import SuggestionsBox from "../Components/SuggestionsBox";
import { useSelector } from "react-redux";

export default function ChatScreen() {


  //All variables from redux
  // const {chatHistoryInput} = useSelector((state)=>state.Get);

  let suggestionsArr = [
    {
      suggest:"New Brand Strategies"
    },
    {
      suggest:"Digital Advertising"
    },
    {
      suggest:"AWAT Analysis"
    },
    {
      suggest:"Customer Engagement"
    },
  ]

  //All states
  const [chatArray, setChatArray] = useState([]);
  const [chatInput, setChatInput] = useState("");
  const [isChatting,setIsChatting] = useState(false);

  const handleChange = (e) => {
    let inputValue = e.target.value;
    setChatInput(inputValue);
  };

  //Sending chat function
  const sendChat = () => {
    if (chatInput.trim().length >0) {
      setChatArray((chatArray) => {
        const updatedChatArray = [...chatArray, chatInput];
        setChatInput("");
        setIsChatting(true);
        
        return updatedChatArray;
      });
    }
  };

  //On pressing enter button triggers function
  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      sendChat();
    }
  };

  // useEffect(()=>{
  //   setChatInput(chatHistoryInput)
  // },[chatHistoryInput])

  return (
    <div className="chat_wrapper">
      <div className="navbar_wrapper_chat">
      <Navbar />
      </div>
 
      <div className="chat_main">
        <ChatSideHistory />
        <div className="chat_area_main">
          
          <div style={{flexDirection:isChatting?"column":"row",alignItems:isChatting?"":"center",}} className="chat_area">
          <SuggestionsBox isChatting={isChatting} suggestionArray={suggestionsArr} />
       
            {chatArray.length > 0 &&
              chatArray.map((items, index) => {
                return (
                  <>
                    <div key={index} style={{alignSelf:index%2==0?"flex-end":"flex-start"}} className="chat_text">
                      {items}
                    </div>
                  </>
                );
              })}
          </div>

          <div className="chat_lower_part">
            <div className="chat_input_section">
              <div className="chat_input_section_inner">
                <div>
                  <FiSun size={28} color="#6f49b9" />
                </div>
                <ChatInput
                  onKeyDown={onKeyDown}
                  sendChat={sendChat}
                  value={chatInput}
                  setValue={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
