import axios, { AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse } from 'axios';
import { BASE_URL } from '../../constants/urls';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const sendGet = async (
  endpoint: string,
  config?: AxiosRequestConfig,
  headers?: AxiosRequestHeaders | object,
  baseUrl?: string,
) => {
  return (await axiosInstance.get(`${baseUrl || BASE_URL}/${endpoint}`, {
    ...config,
    headers: {
      ...headers,
    },
  })) as AxiosResponse<unknown>;
};

export default axiosInstance;
