import React from 'react';

import { Flex } from '@chakra-ui/react';

import { BlackMarketLogo } from '@styles/theme/components/Logo';

import { NavBar } from './NavBar';

export const Header = () => (
  <NavBar className="Header">
    <Flex align="center">
      <BlackMarketLogo height={34} color="white" />
    </Flex>
    <Flex display={{ base: 'none', md: 'block' }}>{'<Search>'}</Flex>
    <Flex>
      {'<MyAccount>'}
      {'<ShoppingCart>'}
    </Flex>
  </NavBar>
);
