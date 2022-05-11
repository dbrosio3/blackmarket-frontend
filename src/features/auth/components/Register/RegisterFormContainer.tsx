import React from 'react';

import { BlackMarketLogo } from '@styles/theme/components/Logo';

import { AuthSection } from '../common/AuthSection';

import { RegisterForm } from './RegisterForm';
import { RegistrationFooter } from './RegistrationFooter';

export const RegisterFormContainer = () => {
  return (
    <AuthSection height="37.75rem">
      <BlackMarketLogo width={174} height={31} />
      <RegisterForm />
      <RegistrationFooter />
    </AuthSection>
  );
};
