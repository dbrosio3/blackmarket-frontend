import React from 'react';

import { FlexProps } from '@chakra-ui/react';

import { MaxWidthWrapper } from '@components/Misc';

import { NavBarContainer } from './NavBarContainer';

export const NavBar: React.FC<FlexProps> = ({ children }) => (
  <NavBarContainer align="center" justify="center">
    <MaxWidthWrapper align="center" justify="space-between" wrap="wrap">
      {children}
    </MaxWidthWrapper>
  </NavBarContainer>
);
