import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAllProudcts = createAsyncThunk(
  "fetchAllProudcts",
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
    .addCase(fetchAllProudcts.fulfilled,(state,action)=>{
        state.data = action.payload
        state.data = "success"
    })
    .addCase(fetchAllProudcts.pending,(state)=>{
        state.fetchStatus="loading"
    })
    .addCase(fetchAllProudcts.rejected, (state)=>{
        state.fetchStatus="error"
    })
  }
});

export default productSlice;