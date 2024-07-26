import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { setupListeners } from '@reduxjs/toolkit/query';
import { reducerConfig, reducerNotification } from '@store/slices';
import { emptySplitApi } from '@store/api/empty.api.ts';
import { rtkQueryErrorLogger } from '@store/middlewares.ts';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

export const store = configureStore({
  reducer: {
    notification: reducerNotification,
    config: reducerConfig,
    // Add the generated reducer as a specific top-level slice
    [emptySplitApi.reducerPath]: emptySplitApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(emptySplitApi.middleware, logger, rtkQueryErrorLogger),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
