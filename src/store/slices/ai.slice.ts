import { createSlice } from '@reduxjs/toolkit';
import {
  extractBarcode,
  extractDataFromText,
  extractText,
} from '@store/thunks';
import { PURGE } from 'redux-persist';

export interface AIState {
  text?: string;
  data?: Record<string, unknown>;
  barCodes?: string[];
  loadingText: boolean;
  loadingData: boolean;
  loadingBarCodes: boolean;
}

const initialState = {
  text: undefined,
  data: undefined,
  barCodes: undefined,
  loadingText: true,
  loadingData: true,
  loadingBarCodes: true,
} satisfies AIState as AIState;

const aiSlice = createSlice({
  name: 'ai',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(extractText.fulfilled, (state, action) => {
        // Add user to the state array
        state.text = action.payload;
        state.loadingText = false;
      })
      .addCase(extractText.pending, (state) => {
        // Add user to the state array
        state.loadingText = true;
      })
      .addCase(extractBarcode.fulfilled, (state, action) => {
        // Add user to the state array
        state.barCodes = action.payload;
        state.loadingBarCodes = false;
      })
      .addCase(extractBarcode.pending, (state) => {
        // Add user to the state array
        state.loadingBarCodes = true;
      })
      .addCase(extractDataFromText.fulfilled, (state, action) => {
        // Add user to the state array
        state.data = action.payload;
        state.loadingData = false;
      })
      .addCase(extractDataFromText.pending, (state) => {
        // Add user to the state array
        state.loadingData = true;
      })
      .addCase(PURGE, (state) => {
        state.data = initialState.data;
        state.text = initialState.text;
        state.loadingData = initialState.loadingData;
        state.loadingText = initialState.loadingText;
        state.loadingBarCodes = initialState.loadingBarCodes;
      });
  },
});

export const reducerAI = aiSlice.reducer;
