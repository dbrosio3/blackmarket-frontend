import React from 'react';

import { Button, Heading, Stack, Textarea } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { useSession } from '@providers/SessionContext';

/**
 * Dashboard not implemented yet. Currently only displays session state for debugging purposes
 */
export const Dashboard = () => {
  const { t } = useTranslation();
  const { session, logout } = useSession();

  return (
    <Stack h="100%" py={20}>
      <Heading>Dashboard</Heading>
      <Textarea h="100%">{JSON.stringify(session, null, 2)}</Textarea>
      <Button onClick={logout}>{t('common.logOut')}</Button>
    </Stack>
  );
};
