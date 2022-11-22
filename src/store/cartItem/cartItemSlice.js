import { createSlice } from "@reduxjs/toolkit";

const cartItemSlice = createSlice({
  name: "cartItem",
  initialState: [],
  reducers: {
    cartItem: (state, action) => {
      const item = action.payload;
      state.push(item);
    },
  },
});

// this is for dispatch
export const { cartItem } = cartItemSlice.actions;

// this is for configureStore
export default cartItemSlice.reducer;
