import React from "react";
import { historiesToInput } from "../Redux/Slices/GetSlices";
import { useDispatch } from "react-redux";

export default function Histories({ historyArray, day,historyAddToChat}) {

  const dispatch = useDispatch();

  return (
    <div className="histories_main">
      {historyArray?.map((items, index) => {
        if (items.day == day) {
          return (
            <div
               onClick={()=> historyAddToChat(items?.history)}
              className="histories"
              key={index}
            >
              {items.history}
            </div>
          );
        }
        return true;
      })}
    </div>
  );
}
