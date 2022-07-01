/* eslint-disable prettier/prettier */
import Axios, { AxiosRequestConfig } from 'axios';

import { API_URL } from '@/config';
import storage from '@/utils/storage';
import { Session } from '@features/auth/types';

export const axiosClient = Axios.create({
  baseURL: API_URL,
});

function authRequestInterceptor(config: AxiosRequestConfig) {
  const session: Session = storage.getSession();
  if (config.headers) {
    if (session?.token) {
      config.headers['access-token'] = session?.token;
      config.headers['token-type'] = 'Bearer';
      config.headers['client'] = session.client || '';
      // eslint-disable-next-line prettier/prettier
      config.headers['uid'] = session.user?.uid || '';
    }
    config.headers.Accept = 'application/json';
  }
  return config;
}

axiosClient.interceptors.request.use(authRequestInterceptor);
