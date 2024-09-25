import React from "react";

export default function SuggestionsBox({suggestionArray, icon,isChatting,addToChat }) {
  return (
    <div className="suggestion_wrapper" >
      <div className="suggestion_first">
      {suggestionArray?.map((items,index)=>{
      if(index <= 1){
        return(
          <div onClick={()=> addToChat({type:"user",text:items?.suggest})} style={{display:isChatting?"none":"flex"}} className="suggestion_main">
          <div className="suggestion_icon"></div>
          <div className="suggestion_text">{items.suggest}</div>
        </div>
      )
      }
     
    })}
      </div>
   
      <div className="suggestion_second">
      {suggestionArray?.map((items,index)=>{
      if(index > 1){
        return(
          <div onClick={()=> addToChat({type:"user",text:items?.suggest})} style={{display:isChatting?"none":"flex"}} className="suggestion_main">
          <div className="suggestion_icon"></div>
          <div className="suggestion_text">{items.suggest}</div>
        </div>
      )
      }
     
    })}
      </div>
    </div>
   
  );
}
