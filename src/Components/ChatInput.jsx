import React from 'react'
import { colorConfigs } from '../colorConfig'
import { BiSend } from 'react-icons/bi'

export default function ChatInput({value,setValue,sendChat,onKeyDown}) {
  return (
    <div  style={{background:colorConfigs.chat_input,border:`1px solid ${colorConfigs.chat_input}`}} className='chat_input_main'>
    <input style={{background:colorConfigs.chat_input,border:`1px solid ${colorConfigs.chat_input}`,}} onKeyDown={onKeyDown} value={value} onChange={setValue} placeholder='Type message' className='chat_input' type="text" />
    <BiSend onClick={sendChat} className='send_icon' size={20} color='#ffbfb5' />
    </div>
  )
}
