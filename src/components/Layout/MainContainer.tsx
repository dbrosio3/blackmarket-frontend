import React from 'react';

import { chakra, Flex } from '@chakra-ui/react';

import { JustChildrenProp } from '@/types';

export const MainContainer: React.FC<JustChildrenProp> = ({ children }) => (
  <MainContainerStyled className="MainContainer" direction="column" align="center" m="0 auto">
    {children}
  </MainContainerStyled>
);

const MainContainerStyled = chakra(Flex, {
  baseStyles: {
    height: '100% !important',
    minHeight: '100vh',
    justifyContent: 'space-between',
    overflowY: 'auto',
  },
});
