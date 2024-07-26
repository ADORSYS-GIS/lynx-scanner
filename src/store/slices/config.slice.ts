import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { isElectron } from '@shared';
import { fetchConfigUrl } from '@store/thunks';

export interface ConfigState {
  url?: string;
  locked: boolean;
}

const initialState = {
  url: isElectron ? '' : undefined,
  locked: isElectron,
} satisfies ConfigState as ConfigState;

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    clear(state) {
      if (state.locked) {
        return;
      }

      delete state.url;
    },
    url(state, action: PayloadAction<string>) {
      if (state.locked) {
        return;
      }

      state.url = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchConfigUrl.fulfilled, (state, action) => {
      if (state.locked) {
        return;
      }
      // Add user to the state array
      state.url = action.payload;
    });
  },
});

export const { clear: clearConfig, url: setUrlConfig } = configSlice.actions;

export const reducerConfig = configSlice.reducer;

export const urlConfigSelector = ({ config }: { config: ConfigState }) =>
  JSON.stringify(config);
