import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  message: '',
  loading: false,
};

const url = 'http://127.0.0.1:3000/api';
export const fetchMessage = createAsyncThunk('greeting/fetchMessage', async () => {
  const response = await axios.get(url);
  return response.data;
});

export const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessage.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMessage.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload;
      })
      .addCase(fetchMessage.rejected, (state) => {
        state.loading = false;
        state.message = 'Error';
      });
  },
});

export default greetingSlice.reducer;
