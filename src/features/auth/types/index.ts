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
