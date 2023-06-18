import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    open: false,
  }

  export const counter = createSlice({
    name: "navbar",
    initialState,
    reducers: {
      openclose: (state) => {
        state.open = !state.open;
      },
    },
  });
  
  export const { openclose } = counter.actions;
  export default counter.reducer;