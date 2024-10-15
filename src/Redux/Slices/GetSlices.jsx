import { createSlice } from "@reduxjs/toolkit";


const darkStatus = localStorage.getItem("darkModeStatus");

export const GetSlice = createSlice({
  name: "GetSlice",
  initialState: {
    chatHistoryInput: "",
    darkMode:darkStatus === "true"?true:false,
    chatColor:darkStatus === "true"?"#6351b0":"white",
    chatBgColor:darkStatus === "true"? "#201747":"#fdf4fb",
  },
  reducers: {
    historiesToInput: (state, action) => {
      state.chatHistoryInput = action.payload;
    },
    darkModeToggle : (state,action)=>{
      const darkStatus = localStorage.getItem("darkModeStatus");
      if(darkStatus === "true"){
        localStorage.setItem("darkModeStatus","false");
        state.darkMode = false;
        state.chatColor = "white";
        state.chatBgColor = "#fdf4fb";
      }
      else{
        localStorage.setItem("darkModeStatus","true");
        state.darkMode = true;
        state.chatColor = "#6351b0";
        state.chatBgColor = "#201747"
      }
    },
    changeChatColor:(state,action)=>{
        state.chatColor = action.payload;
    },
    changeBgColor:(state,action)=>{
      state.chatBgColor = action.payload;
    }
  },
  extraReducers: (builders) => {},
});

export const { historiesToInput,darkModeToggle,changeBgColor,changeChatColor } = GetSlice.actions;
export default GetSlice;
