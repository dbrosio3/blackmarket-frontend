import React from 'react';

import { Flex } from '@chakra-ui/react';

import { AccountMenu } from '@components/Menu';
import { SearchBar } from '@components/Search/SearchBar';
import { ShoppingCartWidget } from '@components/Widget';
import { BlackMarketLogo } from '@styles/theme/components/Logo';

import { NavBar } from './NavBar';

export const Header = () => (
  <NavBar className="Header">
    <Flex align="center">
      <BlackMarketLogo height={34} color="common.white" />
    </Flex>
    <Flex flexGrow={1} ml={16} alignItems="center" wrap="nowrap">
      <SearchBar />
      <AccountMenu />
      <ShoppingCartWidget />
    </Flex>
  </NavBar>
);
