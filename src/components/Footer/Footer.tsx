import React from 'react';

import { VStack } from '@chakra-ui/react';

import { MaxWidthWrapper } from '@components/Misc';

import { FooterContainer } from './FooterContainer';
import { LinksSection } from './LinksSection';
import { LogosSection } from './LogosSection';
import { NewsletterSection } from './NewsletterSection';

export const Footer = () => (
  <FooterContainer as="footer" className="Footer" justifyContent="center">
    <MaxWidthWrapper wrap={['wrap', 'wrap', 'nowrap']}>
      <VStack
        w="100%"
        justify="space-between"
        flexDirection={['column-reverse', 'column-reverse', 'column']}
        mr={10}
      >
        <LinksSection />
        <LogosSection />
      </VStack>
      <NewsletterSection />
    </MaxWidthWrapper>
  </FooterContainer>
);
