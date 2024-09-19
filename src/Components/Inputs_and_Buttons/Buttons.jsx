import React from 'react'

export default function Buttons({bgColor,text,textColor,onClick,className}) {
  return (
    <div  onClick={()=>{
        if(onClick === ""){
           
        }
        else{
            onClick()
        }
    }} style={{background:bgColor,color:textColor,}} className={className} >
      {text}
    </div>
  )
}
