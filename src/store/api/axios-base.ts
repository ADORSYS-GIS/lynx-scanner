import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { RootState } from '@store';

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
      return { data: JSON.parse(result.data) };
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
