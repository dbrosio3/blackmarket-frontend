import React from 'react';

import { Button, Center, Stack, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export const ErrorFallback = () => {
  const { t } = useTranslation();

  return (
    <Center bg="white" h="100vh" color="secondary.main">
      <Stack>
        <Text>{t('error.errorFallback.title')}</Text>
        <Button
          colorScheme="primary"
          variant="link"
          onClick={() => window.location.assign(window.location.origin)}
        >
          {t('common.refresh')}
        </Button>
      </Stack>
    </Center>
  );
};
