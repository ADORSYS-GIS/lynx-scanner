import { useCallback } from 'react';
import { fetchConfigUrl } from './thunks';
import { useAppDispatch, useAppSelector } from './types';
import { selectConfigUrl } from '@store/selectors.ts';

export function useFetchConfigUrl() {
  const dispatch = useAppDispatch();
  return useCallback(() => {
    dispatch(fetchConfigUrl());
  }, [dispatch]);
}

export function useConfigData() {
  return useAppSelector(selectConfigUrl);
}
