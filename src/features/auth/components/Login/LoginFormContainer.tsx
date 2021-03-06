import React from 'react';

import { BlackMarketLogo } from '@/styles/theme/components/Logo';

import { AuthSection } from '../common/AuthSection';

import { LoginFooter } from './LoginFooter';
import { LoginForm } from './LoginForm';

export const LoginFormContainer = () => (
  <>
    <AuthSection height="29.25rem">
      <BlackMarketLogo height={31} />
      <LoginForm />
    </AuthSection>
    <AuthSection height="8rem" mt="1rem" pt="1.5rem">
      <LoginFooter />
    </AuthSection>
  </>
);
