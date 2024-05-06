import { combineReducers } from '@reduxjs/toolkit';
import someReducer from './someReducers';

// Define RootState type based on the combined state of all reducers
export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  someReducer,
  // Add other reducers here
});

export default rootReducer;
