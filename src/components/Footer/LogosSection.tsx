import React from 'react';

import { Flex, Container } from '@chakra-ui/react';

import { BlackMarketLogo } from '@styles/theme/components/Logo';

import { SocialsSection } from './SocialsSection';

export const LogosSection = () => (
  <Flex w="100%">
    <Container pl={0}>
      <BlackMarketLogo height={[19, 29, 34]} color="common.white" />
    </Container>
    <Container pr={0}>
      <SocialsSection />
    </Container>
  </Flex>
);
