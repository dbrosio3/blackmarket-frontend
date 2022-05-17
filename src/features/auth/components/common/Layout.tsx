import React from 'react';

import { Container, VStack } from '@chakra-ui/react';

import { JustChildrenProp } from '@/types';
import chairsBg from '@assets/chairs-bg.png';
import { ViewPort } from '@styles/theme/components/Misc';

export const Layout: React.FC<JustChildrenProp> = ({ children }) => (
  <ViewPort bgImage={chairsBg}>
    <VStack width="45%" height="100%" justifyContent="center">
      <Container centerContent>{children}</Container>
    </VStack>
  </ViewPort>
);
