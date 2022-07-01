import React from 'react';

import { Button, ButtonProps, chakra, forwardRef, useBreakpointValue } from '@chakra-ui/react';

interface MenuButtonProps extends ButtonProps {
  isOpen?: boolean;
}

export const WidgetButton = forwardRef<MenuButtonProps, 'button'>(
  ({ isOpen, children, ...restProps }, ref) => (
    <Button
      ref={ref}
      borderBottomRadius={isOpen ? 0 : 'lg'}
      size={useBreakpointValue({ base: 'xs', sm: 'sm' })}
      ml={[2, 4, 6]}
      {...restProps}
    >
      {children}
    </Button>
  )
);

export const NavBarWidget = chakra(WidgetButton, {
  baseStyle: {
    maxWidth: '168px',
    minW: 'unset',
    flexShrink: 0,
    borderWidth: '0.5px',
    borderColor: 'common.white',
    borderTopRadius: 'lg',
    padding: 0,
    color: 'common.white',
    fontWeight: 'normal',
    '.chakra-button__icon': {
      height: '100%',
      display: 'flex',
      marginRight: 2,
      alignItems: 'center',
    },
  },
});
