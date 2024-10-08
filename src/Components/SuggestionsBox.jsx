import React from "react";
import { MdEditNote } from "react-icons/md";
import { useSelector } from "react-redux";

export default function SuggestionsBox({suggestionArray, icon,isChatting,addToChat }) {

  const {darkMode} = useSelector((state)=>state.Get);

  return (
    <div className="suggestion_wrapper" >
      <div className="suggestion_first">
      {suggestionArray?.map((items,index)=>{
      if(index <= 1){
        return(
          <div onClick={()=> addToChat({type:"user",text:items?.suggest})} style={{display:isChatting?"none":"flex",backgroundColor:darkMode?"#241643":"white"}} className="suggestion_main">
          <div className="suggestion_icon"><MdEditNote color={darkMode?"lightgrey":"black"} size={20}  /></div>
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
          <div onClick={()=> addToChat({type:"user",text:items?.suggest})} style={{display:isChatting?"none":"flex",backgroundColor:darkMode?"#241643":"white"}} className="suggestion_main">
          <div className="suggestion_icon"><MdEditNote color={darkMode?"lightgrey":"black"} size={20}  /></div>
          <div className="suggestion_text">{items.suggest}</div>
        </div>
      )
      }
     
    })}
      </div>
    </div>
   
  );
}
