import { axiosClient } from '@/lib/axios';

import { AuthResponse, RegisterCredentialsDTO } from '../types';

export const registerWithEmailAndPassword = (data: RegisterCredentialsDTO): Promise<AuthResponse> =>
  axiosClient.post('/auth', data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
