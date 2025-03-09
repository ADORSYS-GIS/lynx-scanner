import {
  selectAiData,
  selectAiLoadingState,
  selectConfigUrl,
} from '@store/selectors.ts';
import { addNotification } from '@store/slices';
import { useCallback } from 'react';
import { extractBarcode, extractText, fetchConfigUrl } from './thunks';
import { useAppDispatch, useAppSelector } from './types';

export function useFetchConfigUrl() {
  const dispatch = useAppDispatch();
  return useCallback(() => {
    dispatch(fetchConfigUrl());
  }, [dispatch]);
}

export function useConfigData() {
  return useAppSelector(selectConfigUrl);
}

export function useExtractText() {
  const dispatch = useAppDispatch();
  return useCallback(
    (imgUri: string) => {
      dispatch(extractText({ imgUri }));
      dispatch(extractBarcode({ imgUri }));
    },
    [dispatch],
  );
}

export function useExtractDataFromText() {
  return useAppSelector(selectAiData);
}

export function useAiLoadingState() {
  return useAppSelector(selectAiLoadingState);
}

export function useAddErrorNotification() {
  const dispatch = useAppDispatch();
  return useCallback(
    (msg: string) => {
      dispatch(addNotification(msg));
    },
    [dispatch],
  );
}
