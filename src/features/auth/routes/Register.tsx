import React from 'react';

import { AuthLayout } from '../components/common/AuthLayout';
import { RegisterFormContainer } from '../components/Register/RegisterFormContainer';

export const Register = () => (
  <AuthLayout>
    <RegisterFormContainer />
  </AuthLayout>
);
