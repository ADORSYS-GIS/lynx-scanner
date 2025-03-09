import { useEffect, useMemo } from 'react';

export interface ErrorDumpProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any;
}

export function ErrorDump({ error }: ErrorDumpProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const errorMessage = useMemo(() => {
    if (error?.response?.data?.message) {
      return error.response.data.message;
    }
    if (typeof error === 'string') {
      return error;
    }
    if ('error' in error) {
      return error.error;
    }
    return JSON.stringify(error);
  }, [error]);

  return <div className='alert alert-error'>{errorMessage}</div>;
}
