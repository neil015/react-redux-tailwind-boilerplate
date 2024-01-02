import { createSlice } from "@reduxjs/toolkit";

export const userData = createSlice({
  name: "userData",
  initialState: {
    userDetails: [],
    pageNumber: 1,
    skip: 0
  },
  reducers: {
    updateUserData: (state, data) => {
      state.userDetails = data.payload;
    },
    updatePage: (state, data) => {
      state.pageNumber = (data.payload);
    }
  },
});
export const { updateUserData, updatePage } = userData.actions;
