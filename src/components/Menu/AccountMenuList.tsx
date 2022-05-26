import React from 'react';

import { MenuList, MenuItem, chakra } from '@chakra-ui/react';

type Item = {
  label: string;
  action?: () => void;
};

export const AccountMenuList: React.FC<{ items: Array<Item> }> = ({ items }) => (
  <StyledMenuList>
    {items.map(({ label, action }) => (
      <StyledMenuItem key={label} onClick={action}>
        {label}
      </StyledMenuItem>
    ))}
  </StyledMenuList>
);

const StyledMenuList = chakra(MenuList, {
  baseStyle: {
    minW: 'unset',
    bg: 'blue.main',
    color: 'common.white',
    borderTopRadius: 0,
    borderBottomRadius: 'lg',
    py: 0,
  },
});

const StyledMenuItem = chakra(MenuItem, {
  baseStyle: {
    borderBottomWidth: 1,
    borderBottomColor: 'common.white',
    _last: {
      borderBottomRadius: 'lg',
    },
    _focus: { bg: 'secondary.300' },
    _active: { bg: 'secondary.400' },
  },
});
