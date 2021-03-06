import React from 'react';

import { Button, Heading, Stack, Textarea } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { useSession } from '@providers/SessionContext';

import { BackgroundBox } from './BackgroundBox';

/**
 * Dashboard not implemented yet. Currently only displays session state for debugging purposes
 */
export const Dashboard = () => {
  const { t } = useTranslation();
  const { session, logout } = useSession();

  return (
    <>
      <BackgroundBox />
      <Stack h="1200px" w="100%" py={20} px={10} zIndex={0}>
        <Heading color="common.white">Dashboard</Heading>
        <Textarea h="100%" value={JSON.stringify(session, null, 2)} readOnly bg="common.white" />
        <Button onClick={logout}>{t('common.logOut')}</Button>
      </Stack>
    </>
  );
};
