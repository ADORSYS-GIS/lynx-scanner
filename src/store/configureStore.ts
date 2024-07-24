import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import { rootReducer } from './reducers';

const logger = createLogger({
  // Customize the logger options as needed
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger),
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;
