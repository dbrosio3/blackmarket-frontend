import React from 'react';

import { BlackMarketLogo } from '@styles/theme/components/Logo';

import { AuthSection } from './AuthSection';

export const LoginForm = () => {
  return (
    <>
      <AuthSection height="29rem">
        <BlackMarketLogo width={174} height={31} />
      </AuthSection>
      <AuthSection height="8rem" marginTop="1rem">
        LoginForm2
      </AuthSection>
    </>
  );
};
