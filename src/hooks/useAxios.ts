// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AxiosError, AxiosRequestConfig } from 'axios';
import { useState } from 'react';
import axiosInstance from './services/axiosInstance';

type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

const useAxios = <T>(method: RequestMethod, url: string, data?: unknown, config?: AxiosRequestConfig) => {
  const [responseData, setResponseData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const request = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axiosInstance.request<T>({
        url,
        method,
        data,
        ...config,
      });
      setResponseData(response.data);
      return response.data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: AxiosError | any) {
      if (err.response) {
        setError(`Error: ${err.response.status} - ${err.response.data}`);
      } else {
        setError('Something went wrong');
      }
    } finally {
      setLoading(false);
    }
  };

  return { data: responseData, error, loading, request };
};

export default useAxios;
