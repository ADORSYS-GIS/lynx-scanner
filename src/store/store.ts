import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { emptySplitApi } from '@store/api/empty.api.ts';
import { rtkQueryErrorLogger } from '@store/middlewares.ts';
import { reducerAI, reducerConfig, reducerNotification } from '@store/slices';
import logger from 'redux-logger';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import { PersistConfig } from 'redux-persist/es/types';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  notification: reducerNotification,
  config: reducerConfig,
  ai: reducerAI,
  // Add the generated reducer as a specific top-level slice
  [emptySplitApi.reducerPath]: emptySplitApi.reducer,
});

type State = ReturnType<typeof rootReducer>;

const persistConfig: PersistConfig<State> = {
  key: 'root',
  storage,
  version: 1,
  whitelist: ['config'] as (keyof State)[],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(emptySplitApi.middleware, logger, rtkQueryErrorLogger),
});

export const persistor = persistStore(store);

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
