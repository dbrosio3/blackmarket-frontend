import React from 'react';

import { HStack, VStack, Wrap } from '@chakra-ui/react';

import { MaxWidthWrapper } from '@components/Misc';
import { BlackMarketLogo } from '@styles/theme/components/Logo';

import { FooterContainer } from './FooterContainer';
import { LinksSection } from './LinksSection';
import { NewsletterSection } from './NewsletterSection';
import { SocialsSection } from './SocialsSection';

export const Footer = () => (
  <FooterContainer className="Footer" justifyContent="center">
    <MaxWidthWrapper>
      <VStack justify="space-between" width="100%">
        <LinksSection />
        <HStack justify="space-between" width="100%" pr={20}>
          <Wrap>
            <BlackMarketLogo height={34} color="common.white" />
          </Wrap>
          <SocialsSection />
        </HStack>
      </VStack>
      <NewsletterSection />
    </MaxWidthWrapper>
  </FooterContainer>
);
