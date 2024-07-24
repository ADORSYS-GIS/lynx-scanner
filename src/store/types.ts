import { useDispatch, useSelector } from 'react-redux';
import { store } from './store';
import { ElectronAPI } from '@electron-toolkit/preload';

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
