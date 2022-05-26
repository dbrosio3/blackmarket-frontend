import React from 'react';

import { Container, Link, Text } from '@chakra-ui/react';
import { Trans } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';

import { PATHS } from '@/routes/paths';

export const RegisterFooter = () => (
  <Container w="110%" mt="1rem" px="0" mx="-0.5rem">
    <Text align="center">
      <Trans i18nKey="auth.register.termsAndConditionsText">
        <Link as={RouterLink} to={`/${PATHS.TERMS_AND_CONDITIONS}`} colorScheme="lightblue" />
        <Link as={RouterLink} to={`/${PATHS.PRIVACY_POLICY}`} />
        <Link as={RouterLink} to={`/${PATHS.COOKIES}`} />
      </Trans>
    </Text>
    <Text align="center" mt="0.75rem">
      <Trans i18nKey="auth.register.alreadyHaveAccount">
        <Link as={RouterLink} to={`/${PATHS.AUTH}/${PATHS.LOGIN}`} />
      </Trans>
    </Text>
  </Container>
);
