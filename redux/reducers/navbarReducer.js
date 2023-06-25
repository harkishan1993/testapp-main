import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    open: false,
    route:''
  }

  export const counter = createSlice({
    name: "navbar",
    initialState,
    reducers: {
      openclose: (state) => {
        state.open = !state.open;
      },
      getroute: (state, action) => {
        state.route = action.payload;
      },
    },
  });
  
  export const { openclose, getroute } = counter.actions;
  export default counter.reducer;