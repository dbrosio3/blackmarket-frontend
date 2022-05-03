import React from 'react';

import { Container, VStack } from '@chakra-ui/react';

import chairsBg from '@/assets/chairs-bg.png';
import { ViewPort } from '@/theme/components/Misc';
import { JustChildrenProp } from '@/types';

export const Layout: React.FC<JustChildrenProp> = ({ children }) => {
  return (
    <ViewPort bgImage={chairsBg}>
      <VStack width="45%" height="100%" justifyContent="center">
        <Container centerContent>{children}</Container>
      </VStack>
    </ViewPort>
  );
};
