import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@store/types.ts';

export const selectNotification = createSelector(
  (ro: RootState) => ro.notification.messages,
  (p) => p.filter(({ message }) => message.length > 0),
);

export const selectConfigUrl = createSelector(
  (ro: RootState) => ro.config,
  ({ url, loading }) => (loading ? undefined : JSON.stringify({ url })),
);

export const selectAiData = createSelector(
  (ro: RootState) => ro.ai,
  ({ loadingData, loadingBarCodes, data, barCodes }) =>
    loadingData || loadingBarCodes
      ? undefined
      : {
          data,
          barCodes,
        },
);

export const selectAiLoadingState = createSelector(
  (ro: RootState) => ro.ai,
  ({ loadingData, loadingBarCodes, loadingText }) => {
    let total = 0;
    if (!loadingData) total++;
    if (!loadingBarCodes) total++;
    if (!loadingText) total++;
    return total;
  },
);
