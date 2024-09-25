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
  const dispatch = useDispatch();

  //All variables from redux
  const chatHistoryInput = useSelector(
    (state) => state.Get?.chatHistoryInput || ""
  );

  let suggestionsArr = [
    {
      suggest: "New Brand Strategies",
    },
    {
      suggest: "Digital Advertising",
    },
    {
      suggest: "AWAT Analysis",
    },
    {
      suggest: "Customer Engagement",
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
  console.log(chatHistoryInput);

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

  //clicking on history, it will set to input
  const historyAddToChat = (payload) => {
    dispatch(historiesToInput(payload));
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

      <div className="chat_main">
        <ChatSideHistory historyAddToChat={historyAddToChat} />
        <div className="chat_area_main">
          <div
            style={{
              flexDirection: isChatting ? "column" : "row",
              alignItems: isChatting ? "" : "center",
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
                      <div key={index} style={{}} className="chat_text">
                        {items?.text?.length > 0 ? items?.text : null}
                      </div>
                    </div>
                  );
                }
              })}
            <div ref={lastMessageRef} />
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
