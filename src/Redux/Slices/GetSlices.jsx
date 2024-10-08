import { createSlice } from "@reduxjs/toolkit";


const darkStatus = localStorage.getItem("darkModeStatus");

export const GetSlice = createSlice({
  name: "GetSlice",
  initialState: {
    chatHistoryInput: "",
    darkMode:darkStatus,
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
      }
      else{
        localStorage.setItem("darkModeStatus","true");
        state.darkMode = true;
      }
    }
  },
  extraReducers: (builders) => {},
});

export const { historiesToInput,darkModeToggle } = GetSlice.actions;
export default GetSlice;
