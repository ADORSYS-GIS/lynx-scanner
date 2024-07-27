import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchConfigUrl } from '@store/thunks';
import { PURGE } from 'redux-persist';

export interface ConfigState {
  url?: string;
  loading: boolean;
}

const initialState = {
  url: undefined,
  loading: true,
} satisfies ConfigState as ConfigState;

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    clear(state) {
      delete state.url;
    },
    url(state, action: PayloadAction<string>) {
      state.url = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchConfigUrl.fulfilled, (state, action) => {
        // Add user to the state array
        state.url = action.payload;
        state.loading = false;
      })
      .addCase(fetchConfigUrl.pending, (state) => {
        // Add user to the state array
        state.loading = true;
      })
      .addCase(PURGE, (state) => {
        state.url = undefined;
        state.loading = true;
      });
  },
});

export const { clear: clearConfig, url: setUrlConfig } = configSlice.actions;

export const reducerConfig = configSlice.reducer;
