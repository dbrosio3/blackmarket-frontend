import React from 'react';

import { Text, useBreakpointValue } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { CartIcon } from '@styles/theme/components/Icons/CartIcon';

import { NavBarWidget } from './NavBarWidget';

export const ShoppingCartWidget = () => {
  const { t } = useTranslation();
  const buttonChild = useBreakpointValue({
    base: null,
    md: <Text>{t('layout.header.cart')}</Text>,
  });

  return (
    <NavBarWidget rightIcon={<CartIcon mr={-2} />} px={4}>
      {buttonChild}
    </NavBarWidget>
  );
};
