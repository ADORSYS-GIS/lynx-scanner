import { createApi, retry } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from './axios-base.ts';

// initialize an empty api service that we'll inject endpoints into later as needed
export const emptySplitApi = createApi({
  baseQuery: retry(axiosBaseQuery(), {
    maxRetries: 3,
  }),
  endpoints: () => ({}),
});
