import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@store/types.ts';

export const selectNotification = createSelector(
  (ro: RootState) => ro.notification.messages,
  (p) => p.filter(({ message }) => message.length > 0)
);
export const selectConfigUrl = createSelector(
  (ro: RootState) => ro.config,
  ({ url }) => url
);
