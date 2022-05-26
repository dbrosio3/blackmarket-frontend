import React from 'react';

import { Container, Flex, VStack } from '@chakra-ui/react';

import { MaxWidthWrapper } from '@components/Misc';
import { BlackMarketLogo } from '@styles/theme/components/Logo';

import { FooterContainer } from './FooterContainer';
import { LinksSection } from './LinksSection';
import { NewsletterSection } from './NewsletterSection';
import { SocialsSection } from './SocialsSection';

export const Footer = () => (
  <FooterContainer className="Footer" justifyContent="center">
    <MaxWidthWrapper wrap={['wrap', 'wrap', 'nowrap']}>
      <VStack
        justify="space-between"
        width="100%"
        flexDirection={['column-reverse', 'column-reverse', 'column']}
        mr={10}
      >
        <LinksSection />
        <Flex w="100%">
          <Container pl={0}>
            <BlackMarketLogo height={[19, 19, 34]} color={['white', 'red', 'green', 'blue']} />
          </Container>
          <Container pr={0}>
            <SocialsSection />
          </Container>
        </Flex>
      </VStack>
      <NewsletterSection />
    </MaxWidthWrapper>
  </FooterContainer>
);
