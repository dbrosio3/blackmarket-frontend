import React from 'react';

import { Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { CartIcon } from '@styles/theme/components/Icons/CartIcon';

import { NavBarWidget } from './NavBarWidget';

export const ShoppingCartWidget = () => {
  const { t } = useTranslation();
  return (
    <NavBarWidget rightIcon={<CartIcon mr={-2} />} px={4} ml={4}>
      <Text>{t('layout.header.cart')}</Text>
    </NavBarWidget>
  );
};
