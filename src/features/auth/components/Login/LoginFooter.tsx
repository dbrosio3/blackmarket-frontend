import React from 'react';

import { Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { PATHS } from '@/routes/paths';
import { FullWidthButton } from '@/styles/theme/components/Buttons';

export const LoginFooter = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <Text>{t('auth.login.dontHaveAccount')}</Text>
      <FullWidthButton
        variant="outline"
        mt="1rem"
        onClick={() => navigate(`/${PATHS.AUTH}/${PATHS.REGISTER}`)}
      >
        {t('common.signUp')}
      </FullWidthButton>
    </>
  );
};
