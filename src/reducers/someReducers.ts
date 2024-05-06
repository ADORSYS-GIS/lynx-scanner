import { createSlice } from '@reduxjs/toolkit';

interface SomeState {
  count: number;
}

const initialState: SomeState = {
  count: 0,
};

const someSlice = createSlice({
  name: 'someReducer',
  initialState,
  reducers: {
    increment(state) {
      state.count += 1;
    },
  },
});

export const { increment } = someSlice.actions;
export default someSlice.reducer;
