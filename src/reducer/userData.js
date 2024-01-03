import { createSlice } from "@reduxjs/toolkit";

export const userData = createSlice({
  name: "userData",
  initialState: {
    userDetails: [],
    pageNumber: 1,
    skip: 0,
    likeCounts: {},
    dislikeCounts: {}
  },
  reducers: {
    updateUserData: (state, data) => {
      state.userDetails = data.payload;
    },
    updatePage: (state, data) => {
      state.pageNumber = (data.payload);
    },
    updateLikeCount: (state, data) => {
      if (!state.likeCounts[data.payload]) {
        state.likeCounts[data.payload] = 1;
      } else {
        state.likeCounts[data.payload] += 1;
      }
    },
    updateDislikeCount: (state, data) => {
      if (!state.dislikeCounts[data.payload]) {
        state.dislikeCounts[data.payload] = -1;
      } else {
        state.dislikeCounts[data.payload] -= 1;
      }
    }
  },
});
export const { updateUserData, updatePage, updateDislikeCount, updateLikeCount } = userData.actions;
