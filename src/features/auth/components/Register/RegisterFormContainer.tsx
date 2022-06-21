import React from 'react';

import { BlackMarketLogo } from '@styles/theme/components/Logo';

import { AuthSection } from '../common/AuthSection';

import { RegisterFooter } from './RegisterFooter';
import { RegisterForm } from './RegisterForm';

export const RegisterFormContainer = () => (
  <AuthSection>
    <BlackMarketLogo width={174} height={31} />
    <RegisterForm />
    <RegisterFooter />
  </AuthSection>
);
