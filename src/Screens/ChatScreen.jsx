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
import chatAiLogoWhite from '../Assets/Images/Globsyn-Business-School-Logo-white.png';
import { historiesToInput } from "../Redux/Slices/GetSlices";
import { HiOutlineLightBulb } from "react-icons/hi";
import IdeasComponent from "../Components/IdeasComponent";
import { TbBulbFilled } from "react-icons/tb";
import { GoHubot } from "react-icons/go";

export default function ChatScreen() {

  //All variables from redux
  const chatHistoryInput = useSelector(
    (state) => state.Get?.chatHistoryInput || ""
  );
  const {darkMode} = useSelector((state)=>state.Get);
  const {chatColor} = useSelector((state)=>state.Get);
  const {chatBgColor} = useSelector((state)=>state.Get);


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
  const [openIdeas,setOpenIdeas] = useState(false);
  const [toggleChatHistory,setToggleChatHistory] = useState(true);

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

  const newChat =()=>{
    setIsChatting(false);
    setMessages([
      {
        type: "assistant",
        text: "",
      },
      {
        type: "user",
        text: "",
      },
    ]);
  }

  useEffect(() => {
    setChatInput(chatHistoryInput);
  }, [chatHistoryInput]);

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chat_wrapper">
      <div className="navbar_wrapper_chat">
        <Navbar newChat={newChat} setToggleChatHistory={setToggleChatHistory}  toggleChatHistory={toggleChatHistory}/>
      </div>

      <div style={{backgroundColor:chatBgColor}} className="chat_main"> 
         {toggleChatHistory?<ChatSideHistory newChat={newChat} />:null}
        
        
        <div style={{backgroundColor:chatBgColor}} className="chat_area_main">
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
                      {/* <img
                        src={darkMode?chatAiLogoWhite:chatAiLogo}
                        style={{
                          height:darkMode?"15px":"40px",
                          display: items?.type === "user" ? "none" : "block",
                        }}
                        alt=""
                      /> */}
                      <GoHubot style={{ display: items?.type === "user" ? "none" : "block",}} size={20} color={darkMode?"white":"black"} />
                      <div key={index} style={{backgroundColor:chatColor,color:darkMode?"white":"black",boxShadow:darkMode?"5px 5px 5px 0px #24164300":"5px 5px 5px 0px #d1d3fe"}} className="chat_text">
                        {items?.text?.length > 0 ? items?.text : null}
                      </div>
                    </div>
                  );
                }
              })}
            <div ref={lastMessageRef} />
          </div>

          <div className="chat_lower_part">
            <div  style={{backgroundColor:chatBgColor}} className="chat_input_section">
              <div className="chat_input_section_inner">
                {openIdeas?<IdeasComponent toggleChatHistory={toggleChatHistory}/>:null}
                <div onClick={()=>setOpenIdeas(!openIdeas)}>
                  {openIdeas?<TbBulbFilled size={35} color="#6f49b9" />:<HiOutlineLightBulb  size={35} color="#6f49b9" />}
                 
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
