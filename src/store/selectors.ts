import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './types.ts';

export const selectNotification = createSelector(
  (ro: RootState) => ro.notification.messages,
  (p) => p.filter((m) => m !== 'test')
);
