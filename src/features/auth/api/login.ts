import { axiosClient } from '@/lib/axios';

import { AuthResponse, LoginCredentialsDTO } from '../types';

export const loginWithCredentials = (data: LoginCredentialsDTO): Promise<AuthResponse> =>
  axiosClient.post('/auth/sign_in', data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
