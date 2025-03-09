import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import { RootState } from '@store';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';

const axiosInstance = axios.create({});

export const axiosBaseQuery =
  (): BaseQueryFn<
    {
      url: string;
      method?: AxiosRequestConfig['method'];
      body?: AxiosRequestConfig['data'];
      params?: AxiosRequestConfig['params'];
      headers?: AxiosRequestConfig['headers'];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, body: data, params, headers }, { getState }) => {
    try {
      const baseUrl = (getState() as RootState).config.url;
      const result = await axiosInstance({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
      });
      if (typeof result.data === 'string') {
        return { data: JSON.parse(result.data) };
      }
      return { data: result.data };
    } catch (error) {
      if (error instanceof SyntaxError) {
        return {
          error: {
            status: 500,
            data: error.message,
          },
        };
      }
      if (error instanceof AxiosError) {
        return {
          error: {
            status: error.response?.status,
            data: error.response?.data || error.message,
          },
        };
      }
      return {
        error,
      };
    }
  };
