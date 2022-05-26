import React from 'react';

import { MenuList, MenuItem, chakra } from '@chakra-ui/react';

export const AccountMenuList: React.FC<{ items: Array<string> }> = ({ items }) => (
  <StyledMenuList>
    {items.map(item => (
      <StyledMenuItem key={item}>{item}</StyledMenuItem>
    ))}
  </StyledMenuList>
);

const StyledMenuList = chakra(MenuList, {
  baseStyle: {
    minW: 'unset',
    bg: 'secondary.main',
    color: 'white',
    borderTopRadius: 0,
    borderBottomRadius: 'lg',
    py: 0,
  },
});

const StyledMenuItem = chakra(MenuItem, {
  baseStyle: {
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    _last: {
      borderBottomRadius: 'lg',
    },
    _focus: { bg: 'secondary.300' },
    _active: { bg: 'secondary.400' },
  },
});
