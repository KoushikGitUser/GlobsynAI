import { createSlice } from "@reduxjs/toolkit";

export const GetSlice = createSlice({
  name: "GetSlice",
  initialState: {
    chatHistoryInput: "",
  },
  reducers: {
    historiesToInput: (state, action) => {
      state.chatHistoryInput = action.payload;
    },
  },
  extraReducers: (builders) => {},
});

export const { historiesToInput } = GetSlice.actions;
export default GetSlice;
