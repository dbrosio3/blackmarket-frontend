import React from 'react';

import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { Menu, Text, MenuButton } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { NavBarWidget } from '@components/Widget';
import { useSession } from '@providers/SessionContext';

import { AccountMenuList } from './AccountMenuList';
import { UserAvatar } from './UserAvatar';

export const AccountMenu = () => {
  const { t } = useTranslation();
  const { logout } = useSession();

  const getOrientedChevron = (isOpen: boolean) =>
    isOpen ? (
      <ChevronUpIcon height="1.5rem" width="auto" />
    ) : (
      <ChevronDownIcon height="1.5rem" width="auto" />
    );

  return (
    <Menu gutter={0} matchWidth>
      {({ isOpen }) => (
        <>
          <MenuButton
            as={NavBarWidget}
            leftIcon={<UserAvatar />}
            rightIcon={getOrientedChevron(isOpen)}
            isOpen={isOpen}
            ml={2}
          >
            <Text>{t('layout.header.account')}</Text>
          </MenuButton>
          <AccountMenuList
            items={[
              { label: 'Recent Searches' },
              { label: 'Direct Messages' },
              { label: 'Purchases' },
              { label: 'Security' },
              { label: 'Configuration' },
              { label: 'Help' },
              { label: 'Log Out', action: logout },
            ]}
          />
        </>
      )}
    </Menu>
  );
};
