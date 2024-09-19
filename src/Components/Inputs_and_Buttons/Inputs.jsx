import React from 'react'

export default function Inputs({width,type,placeholder,value,setValue}) {
  return (
    <div className='inputs'>
  <input readonly maxLength={10} style={{marginLeft:"15px",height:"80%",outline:"none",border:"1px solid white",width:"82%"}} value={value} onChange={(e)=>setValue(e.target.value)} placeholder={placeholder}   type={type} />
    </div>
 
  )
}
