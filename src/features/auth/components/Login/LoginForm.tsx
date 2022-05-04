import React, { useState } from 'react';

import { Container, FormLabel, Input } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { FullWidthButton } from '@/styles/theme/components/Buttons';

import { LoginFormControl } from './LoginFormControl.styles';

interface CredentialsFormState {
  userId: string;
  password: string;
}

export const LoginForm = () => {
  const { t } = useTranslation();

  const [credentials, setCredentials] = useState<CredentialsFormState>({
    userId: '',
    password: '',
  });

  const fields = [
    {
      key: 'userId',
      label: t('auth.login.userId.label'),
      type: 'text',
      placeholder: t('auth.login.userId.placeholder'),
    },
    {
      key: 'password',
      label: t('auth.login.password.label'),
      type: 'password',
      placeholder: t('auth.login.password.placeholder'),
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCredentials({ ...credentials, [e.target.name]: e.target.value });

  return (
    <>
      <LoginFormControl>
        {fields.map(({ key, label, ...inputProps }) => (
          <>
            <FormLabel htmlFor={key}>{label}</FormLabel>
            <Input id={key} onChange={handleInputChange} {...inputProps} />
          </>
        ))}
        <FullWidthButton colorScheme="secondary">{t('common.logIn')}</FullWidthButton>
      </LoginFormControl>
      <Container w="100%" mt="2.75rem">
        <FullWidthButton colorScheme="lightblue" variant="link">
          {t('auth.login.forgotPassword')}
        </FullWidthButton>
      </Container>
    </>
  );
};
