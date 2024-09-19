import React from "react";

export default function SuggestionsBox({suggestionArray, icon,isChatting }) {
  return (
    <>
    {suggestionArray?.map((items,index)=>{
        return(
            <div style={{display:isChatting?"none":"flex"}} className="suggestion_main">
            <div className="suggestion_icon"></div>
            <div className="suggestion_text">{items.suggest}</div>
          </div>
        )
    })}
    </>
   
  );
}
