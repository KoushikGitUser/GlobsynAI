import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { FiSun } from "react-icons/fi";
import { BiSend } from "react-icons/bi";
import { colorConfigs } from "../colorConfig";
import ChatSideHistory from "../Components/ChatSideHistory";
import ChatInput from "../Components/ChatInput";

export default function ChatScreen() {
  //All states
  const [chatArray, setChatArray] = useState([]);
  const [chatInput, setChatInput] = useState("");

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

  return (
    <div className="chat_wrapper">
      <Navbar />
      <div className="chat_main">
        <ChatSideHistory />
        <div className="chat_area_main">
          <div className="chat_area">
            {chatArray != [] &&
              chatArray.map((items, index) => {
                return (
                  <>
                    <div key={index} className="chat_text">
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
