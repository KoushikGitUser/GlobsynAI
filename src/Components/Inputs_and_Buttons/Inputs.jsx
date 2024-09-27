import React from 'react'

export default function Inputs({maxLength,type,placeholder,value,setValue,name,errors,onKeyDown}) {
  return (
    <div style={{marginBottom:errors?"1px":"15px"}} className='inputs'>
  <input onKeyDown={onKeyDown} name={name} maxLength={maxLength} readonly  style={{marginLeft:"15px",height:"80%",outline:"none",border:"1px solid white",width:"82%"}} value={value} onChange={setValue} placeholder={placeholder}   type={type} />
    </div>
 
  )
}
