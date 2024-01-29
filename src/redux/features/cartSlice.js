import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "Cart Slice",
  initialState,
  reducers: {
    AddToCart: (state, action) => {
      console.log(state.findIndex((item) => item.id === action.payload.id))
      if (state.findIndex((item) => item.id === action.payload.id) === -1) {
        state.push(action.payload);
        
      } else {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
    },
    RemoveFromCart:(state,action)=>{
        const id = action.payload
        return state.filter((item)=> item.id !== id)
    }
  },
});


export const { AddToCart , RemoveFromCart } = cartSlice.actions

export default cartSlice.reducer