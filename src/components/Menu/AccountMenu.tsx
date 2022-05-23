import React from 'react';

import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { Menu, Text, MenuButton } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { NavBarWidget } from '@components/Widget';

import { AccountMenuList } from './AccountMenuList';
import { UserAvatar } from './UserAvatar';

export const AccountMenu = () => {
  const { t } = useTranslation();
  return (
    <Menu gutter={0} matchWidth>
      {({ isOpen }) => (
        <>
          <MenuButton
            as={NavBarWidget}
            leftIcon={<UserAvatar />}
            rightIcon={
              isOpen ? (
                <ChevronUpIcon height="1.5rem" width="auto" />
              ) : (
                <ChevronDownIcon height="1.5rem" width="auto" />
              )
            }
            isOpen={isOpen}
            ml={2}
          >
            <Text>{t('layout.header.account')}</Text>
          </MenuButton>
          <AccountMenuList
            items={[
              'Recent Searches',
              'Direct Messages',
              'Purchases',
              'Security',
              'Configuration',
              'Help',
              'Log Out',
            ]}
          />
        </>
      )}
    </Menu>
  );
};
