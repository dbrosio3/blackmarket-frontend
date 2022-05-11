import React from 'react';

import { Container, Link, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

import { PATHS } from '@/routes/paths';

export const RegistrationFooter = () => (
  <Container w="110%" mt="1rem" px="0" mx="-0.5rem">
    <Text align="center">
      By signing up, you accept our{` `}
      <Link as={RouterLink} to={`/${PATHS.TERMS_AND_CONDITIONS}`} colorScheme="lightblue">
        Conditions
      </Link>
      , the{' '}
      <Link as={RouterLink} to={`/${PATHS.PRIVACY_POLICY}`}>
        Data Policy
      </Link>{' '}
      and the{' '}
      <Link as={RouterLink} to={`/${PATHS.COOKIES}`}>
        Cookies Policy
      </Link>
      .
    </Text>
    <Text align="center" mt="0.75rem">
      Already have an account?{` `}
      <Link as={RouterLink} to={`/${PATHS.AUTH}/${PATHS.LOGIN}`}>
        Log in
      </Link>
    </Text>
  </Container>
);
