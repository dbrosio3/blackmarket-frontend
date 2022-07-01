import React from 'react';

import { Alert, AlertIcon, AlertTitle } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export const ListErrorState = () => {
  const { t } = useTranslation();
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertTitle>{t('error.errorFallback.title')}</AlertTitle>
    </Alert>
  );
};
