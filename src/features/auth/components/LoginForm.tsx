import React from 'react';

import { chakra, Input, Text, VStack } from '@chakra-ui/react';

import { FullWidthButton } from '@styles/theme/components/Buttons';
import { BlackMarketLogo } from '@styles/theme/components/Logo';

import { AuthSection } from './AuthSection';

const InputGroup = chakra(VStack, {
  baseStyle: {
    width: '100%',
    marginTop: '3rem',
    alignItems: 'baseline',
  },
});

const BottomSection = chakra('div', {
  baseStyle: {
    width: '100%',
    marginTop: '3rem',
  },
});

export const LoginForm = () => {
  return (
    <>
      <AuthSection height="29rem">
        <BlackMarketLogo width={174} height={31} />
        <InputGroup>
          <Text>Email or telephone number</Text>
          <Input placeholder="Type your email or telephone" />
          <Text>Password</Text>
          <Input placeholder="Type your password" />
          <FullWidthButton colorScheme="secondary">Log in</FullWidthButton>
        </InputGroup>
        <BottomSection>
          <FullWidthButton colorScheme="lightblue" variant="link">
            I forgot my password
          </FullWidthButton>
        </BottomSection>
      </AuthSection>
      <AuthSection height="8rem" mt="1rem">
        LoginForm2
      </AuthSection>
    </>
  );
};
