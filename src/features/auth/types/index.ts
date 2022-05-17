import HttpStatusCode from '@/types/HttpStatusCode';

export type UserData = {
  id: number;
  provider: string;
  uid: string;
  allow_password_change: boolean;
  name: string;
  image?: string;
  email: string;
  nickname: string;
  created_at?: string;
  updated_at?: string;
};

export enum SessionState {
  LOCKED = 'LOCKED',
  UNLOCKED = 'UNLOCKED',
}

export type Session = {
  user: UserData | undefined;
  token?: string;
  expiration?: number;
  state: SessionState;
};

export type AuthPayload = {
  data: UserData;
};

export type AuthResponse = {
  status: HttpStatusCode;
  headers: any; //TODO: specify
  data: AuthPayload;
};

export type RegisterCredentialsDTO = {
  user: {
    email: string;
    fullname: string;
    nickname: string;
    password: string;
  };
};

export type RegistrationData = {
  userId: string;
  fullName: string;
  userName: string;
  password: string;
};
