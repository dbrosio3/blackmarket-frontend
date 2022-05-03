import React from 'react';

import { BlackMarketLogo } from '@/styles/theme/components/Logo';

import { AuthSection } from '../common/AuthSection';

import { LoginFooter } from './LoginFooter';
import { LoginForm } from './LoginForm';

export const LoginFormContainer = () => {
  return (
    <>
      <AuthSection height="29.25rem">
        <BlackMarketLogo width={174} height={31} />
        <LoginForm />
      </AuthSection>
      <AuthSection height="8rem" mt="1rem" pt="1.5rem">
        <LoginFooter />
      </AuthSection>
    </>
  );
};
