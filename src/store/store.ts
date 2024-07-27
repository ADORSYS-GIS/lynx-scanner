import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { setupListeners } from '@reduxjs/toolkit/query';
import { reducerConfig, reducerNotification } from '@store/slices';
import { emptySplitApi } from '@store/api/empty.api.ts';
import { rtkQueryErrorLogger } from '@store/middlewares.ts';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistConfig } from 'redux-persist/es/types';

const rootReducer = combineReducers({
  notification: reducerNotification,
  config: reducerConfig,
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
