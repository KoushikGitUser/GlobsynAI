import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Components/Navbar";
import { FiSun } from "react-icons/fi";
import { BiSend } from "react-icons/bi";
import { colorConfigs } from "../colorConfig";
import ChatSideHistory from "../Components/ChatSideHistory";
import ChatInput from "../Components/ChatInput";
import SuggestionsBox from "../Components/SuggestionsBox";
import { useDispatch, useSelector } from "react-redux";
import chatAiLogo from "../Assets/Images/cropped-Globsyn-Business-School-Favicon.png";
import { historiesToInput } from "../Redux/Slices/GetSlices";

export default function ChatScreen() {

  //All variables from redux
  const chatHistoryInput = useSelector(
    (state) => state.Get?.chatHistoryInput || ""
  );
  const {darkMode} = useSelector((state)=>state.Get);

  let suggestionsArr = [
    {
      suggest: "Web Developing",
    },
    {
      suggest: "Digital Marketing",
    },
    {
      suggest: "Mobile App Development",
    },
    {
      suggest: "Social Networking",
    },
  ];

  //All states
  const [messages, setMessages] = useState([
    {
      type: "assistant",
      text: "",
    },
    {
      type: "user",
      text: "",
    },
  ]);
  const [chatInput, setChatInput] = useState("");
  const [isChatting, setIsChatting] = useState(false);

  const handleChange = (e) => {
    let inputValue = e.target.value;
    setChatInput(inputValue);
  };

  //useref for auto scroll to last when send or receive new messages
  const lastMessageRef = useRef(null);

  //Sending chat function
  const sendChat = () => {
    if (chatInput.trim().length > 0) {
      setChatInput("");
      setIsChatting(true);
      const message = {type:"user",text:chatInput}
      setMessages([...messages, message]);
      //message to be sent -> chatInput
      //Api call(chatInput)
    }
  };

  const sendChatAssistant = () => {
    if (chatInput.trim().length > 0) {
      setChatInput("");
      setIsChatting(true);
      const message = {type:"assistant",text:chatInput}
      setMessages([...messages, message]);
      //message to be sent -> chatInput
      //Api call(chatInput)
    }
  };

  //On pressing enter button triggers function
  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      sendChat();
    }
  };


  //adding suggestions to chats
  const addToChat = (payload) => {
    setMessages([...messages,payload]);
    setChatInput("");
    setIsChatting(true);
    //message to be sent to ChatGPT -> payload.text
    //Api call(payload.text)
  };

  useEffect(() => {
    setChatInput(chatHistoryInput);
  }, [chatHistoryInput]);

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chat_wrapper">
      <div className="navbar_wrapper_chat">
        <Navbar />
      </div>

      <div style={{backgroundColor:darkMode?"#201747":"#fdf4fb"}} className="chat_main"> 
        <ChatSideHistory />
        
        <div style={{backgroundColor:darkMode?"#201747":"#fdf4fb"}} className="chat_area_main">
          <div
            style={{
              flexDirection: isChatting ? "column" : "row",
              alignItems: isChatting ? "" : "center",
              margin:"auto"
            }}
            className="chat_area"
          >
            <SuggestionsBox
              addToChat={addToChat}
              isChatting={isChatting}
              suggestionArray={suggestionsArr}
            />
            {messages.length > 2 &&
              messages.map((items, index) => {
                if (items.text.length > 0) {
                  return (
                    <div
                      style={{
                        display: items.type === "user" ? "block" : "flex",
                        alignSelf:
                          items?.type === "user" ? "flex-end" : "flex-start",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <img
                        src={chatAiLogo}
                        style={{
                          height: "40px",
                          display: items?.type === "user" ? "none" : "block",
                        }}
                        alt=""
                      />
                      <div key={index} style={{backgroundColor:darkMode?"#6351b0":"white",color:darkMode?"white":"black",boxShadow:darkMode?"5px 5px 5px 0px #24164300":"5px 5px 5px 0px #d1d3fe"}} className="chat_text">
                        {items?.text?.length > 0 ? items?.text : null}
                      </div>
                    </div>
                  );
                }
              })}
            <div ref={lastMessageRef} />
          </div>

          <div className="chat_lower_part">
            <div  style={{backgroundColor:darkMode?"#201747":"#fdf4fb"}} className="chat_input_section">
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
                
                 {/* <button onClick={sendChatAssistant}>
                  send as assistant
                 </button> */}
               
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}
