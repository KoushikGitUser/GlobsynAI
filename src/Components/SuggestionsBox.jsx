import React from "react";
import { MdEditNote } from "react-icons/md";
import { useSelector } from "react-redux";

export default function SuggestionsBox({isChatting,addToChat }) {

  const {darkMode} = useSelector((state)=>state.Get);
  const {suggestions} = useSelector((state)=>state.Get);

  return (
    <div className="suggestion_wrapper" >
      <div className="suggestion_first">
      {suggestions?.map((items,index)=>{
      if(index <= 1){
        return(
          <div onClick={()=> addToChat({type:"user",text:items})} style={{display:isChatting?"none":"flex",backgroundColor:darkMode?"#241643":"white"}} className="suggestion_main">
          <div className="suggestion_icon"><MdEditNote color={darkMode?"lightgrey":"black"} size={20}  /></div>
          <div className="suggestion_text">{items}</div>
        </div>
      )
      }
     
    })}
      </div>
   
      <div className="suggestion_second">
      {suggestions?.map((items,index)=>{
      if(index > 1){
        return(
          <div onClick={()=> addToChat({type:"user",text:items})} style={{display:isChatting?"none":"flex",backgroundColor:darkMode?"#241643":"white"}} className="suggestion_main">
          <div className="suggestion_icon"><MdEditNote color={darkMode?"lightgrey":"black"} size={20}  /></div>
          <div className="suggestion_text">{items}</div>
        </div>
      )
      }
     
    })}
      </div>
    </div>
   
  );
}
