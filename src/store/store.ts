import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Defaults to localStorage for web
import rootReducer from '../reducers/rootReducer.ts'; // Import your root reducer

const persistConfig = {
  key: 'root',
  storage,
  // Add any other config options here
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  // Add any middleware or enhancers here if needed
});

export const persistor = persistStore(store);
export default store;
