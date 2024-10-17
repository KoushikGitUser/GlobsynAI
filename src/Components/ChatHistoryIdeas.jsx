import React from 'react'
import { useDispatch } from 'react-redux';
import { chatHistoryIdeasArray } from '../config';
import { changeSuggestsAsPerSelectedIdeas } from '../Redux/Slices/GetSlices';

export default function ChatHistoryIdeas({}) {

    const dispatch = useDispatch();

  return (
    <div className="histories_main">
      {chatHistoryIdeasArray?.map((items, index) => {
          return (
            <div
            onClick={()=> dispatch(changeSuggestsAsPerSelectedIdeas(items)) }
              className="histories"
              key={index}
            >
              {items.title}
            </div>
          );
      })}
    </div>
  )
}
