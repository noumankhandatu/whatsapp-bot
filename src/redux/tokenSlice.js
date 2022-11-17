import { createSlice } from "@reduxjs/toolkit";

var initialState = false;

export const tokenSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    tokenAction: (initialState, { payload }) => {
      return (initialState = payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { tokenAction } = tokenSlice.actions;

export default tokenSlice.reducer;
