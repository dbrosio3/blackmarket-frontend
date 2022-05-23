import React from 'react';

import { Text } from '@chakra-ui/react';

import { MaxWidthWrapper } from '@components/Misc';

import { FooterContainer } from './FooterContainer';

export const Footer = () => (
  <FooterContainer className="Footer" justifyContent="center">
    <MaxWidthWrapper>
      <Text color="white">{`((Footer))`}</Text>
    </MaxWidthWrapper>
  </FooterContainer>
);
