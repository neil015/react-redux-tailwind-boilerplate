import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./reducer/slices/counterSlice";
import { userData } from "./reducer/userData";
import { thunk } from "redux-thunk";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    userData: userData.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(thunk),
});
