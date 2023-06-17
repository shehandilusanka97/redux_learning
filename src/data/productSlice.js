import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import prodctList  from '../data/productList.json';

export const fetchAllProducts = createAsyncThunk(
  "fetchAllProducts",
  async (apiUrl) => {
    const response = await fetch(apiUrl);
    return response.json();
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: { data: [], fetchStatus: "" },
  reducers: {},
  extraReducers:(builder)=>{
    builder
    .addCase(fetchAllProducts.fulfilled,(state,action)=>{
        state.data = action.payload
        state.data = "success"
    })
    .addCase(fetchAllProducts.pending,(state)=>{
        state.fetchStatus="loading"
    })
    .addCase(fetchAllProducts.rejected, (state)=>{
        state.data = prodctList.products
        state.fetchStatus="error"
    })
  }
});

export default productSlice;