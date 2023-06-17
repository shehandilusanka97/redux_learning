import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartProductIds: [],
  },
  reducers: {
    // adding in to the cart 
    addToCart:(state,action)=>{
        state.cartProductIds = [action.payload,...state.cartProductIds]
    },
    // removing from cart 
    removeFromCart:(state,action)=>{
        const indexOfId  =  state.cartProductIds.indexOf(action.payload)
        state.cartProductIds.splice(indexOfId,1)
    },
    // clearing items from Cart 
    clearAllItems:(state)=>{
        state.cartProductIds=[]
    }
  },
});
