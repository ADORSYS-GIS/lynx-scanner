import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './types.ts';

export const selectNotification = createSelector(
  (ro: RootState) => ro.notification.messages,
  (p) => p.filter(({ message }) => message.length > 0)
);
