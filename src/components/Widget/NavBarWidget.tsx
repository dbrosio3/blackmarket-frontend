import React from 'react';

import { Button, ButtonProps, chakra, forwardRef } from '@chakra-ui/react';

interface MenuButtonProps extends ButtonProps {
  isOpen?: boolean;
}

export const WidgetButton = forwardRef<MenuButtonProps, 'button'>((props, ref) => (
  <Button
    ref={ref}
    variant="outline"
    borderBottomRadius={props.isOpen ? 0 : 'lg'}
    {...props}
    ml="24px !important"
  >
    {props.children}
  </Button>
));

export const NavBarWidget = chakra(WidgetButton, {
  baseStyle: {
    height: '39px',
    width: '168px',
    minW: 'unset',
    flexShrink: 0,
    border: '0.5px solid white',
    borderTopRadius: 'lg',
    padding: 0,
    color: 'white',
    fontWeight: 'normal',
    _hover: {
      backgroundColor: 'transparent',
    },
    _active: {
      backgroundColor: 'transparent',
    },
    '.chakra-button__icon': {
      height: '100%',
      display: 'flex',
      marginRight: 2,
      alignItems: 'center',
    },
  },
});
