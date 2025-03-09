import { ElectronAPI } from '@electron-toolkit/preload';
import { store } from '@store/store.ts';
import { useDispatch, useSelector } from 'react-redux';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

declare global {
  interface Window {
    electron: ElectronAPI;
    api: unknown;
  }
}
