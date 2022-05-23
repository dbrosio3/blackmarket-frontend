import React from 'react';

import { MenuList, MenuItem, chakra } from '@chakra-ui/react';

const isLastItem = <T,>(items: Array<T>, index: number) => index === items.length - 1;

export const AccountMenuList: React.FC<{ items: Array<string> }> = ({ items }) => (
  <StyledMenuList>
    {items.map((item, index) => (
      <StyledMenuItem key={item} className={isLastItem(items, index) ? 'LastMenuItem' : ''}>
        {item}
      </StyledMenuItem>
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
    borderBottom: '1px solid white',
    _focus: { bg: 'secondary.300', '.LastMenuItem': { borderBottomRadius: 'lg' } },
    _active: { bg: 'secondary.400', '.LastMenuItem': { borderBottomRadius: 'lg' } },
  },
});
