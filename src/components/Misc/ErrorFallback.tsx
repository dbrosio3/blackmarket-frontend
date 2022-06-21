import React from 'react';

import { Button, Center, Stack, Heading } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export const ErrorFallback = () => {
  const { t } = useTranslation();

  return (
    <Center bg="common.white" h="100vh" color="secondary.main">
      <Stack>
        <Heading mb={4}>{t('error.errorFallback.title')}</Heading>
        <Center>
          <Button
            colorScheme="primary"
            onClick={() => window.location.assign(window.location.origin)}
          >
            {t('common.refresh')}
          </Button>
        </Center>
      </Stack>
    </Center>
  );
};
