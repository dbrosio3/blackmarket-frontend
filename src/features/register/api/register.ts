import { axios } from '@/lib/axios';

export type RegisterCredentialsDTO = {
  user: {
    email: string;
    password: string;
    name: string;
  };
};

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
  axios.post('/auth', data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
