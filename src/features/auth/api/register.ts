import { axiosClient } from '@/lib/axios';

import { RegisterCredentialsDTO } from '../types';

export interface AuthResponse {
  status: 'success' | 'error';
}

interface RegistrationResponse extends AuthResponse {
  data: {
    id: number;
    provider: string;
    uid: string;
    allow_password_change: boolean;
    name: string;
    image?: string;
    email: string;
    created_at: string;
    updated_at: string;
  };
}

export const registerWithEmailAndPassword = (
  data: RegisterCredentialsDTO
): Promise<RegistrationResponse> =>
  axiosClient.post('/auth', data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
