import React from 'react';

import { AuthLayout } from '../components/common/AuthLayout';
import { LoginFormContainer } from '../components/Login/LoginFormContainer';

export const Login = () => (
  <AuthLayout>
    <LoginFormContainer />
  </AuthLayout>
);
