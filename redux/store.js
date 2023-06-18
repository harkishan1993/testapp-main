import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from '@/redux/reducers/navbarReducer'
export const store = configureStore({
  reducer: {
      navbarReducer
  },
  devTools: process.env.NODE_ENV !== "production",
});