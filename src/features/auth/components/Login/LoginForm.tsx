import React, { useState } from 'react';

import { Container, FormLabel, Input } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { FullWidthButton } from '@/styles/theme/components/Buttons';

import { LoginFormControl } from './LoginFormControl.styles';

interface CredentialsFormState {
  userId: string;
  password: string;
}

const fields = [{ key: 'userId', type: 'text' }, { key: 'password', type: 'password' }];

export const LoginForm = () => {
  const { t } = useTranslation();

  const [credentials, setCredentials] = useState<CredentialsFormState>({
    userId: '',
    password: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCredentials({ ...credentials, [e.target.name]: e.target.value });

  return (
    <>
      <LoginFormControl>
        {fields.map(({ key, ...inputProps }) => (
          <>
            <FormLabel htmlFor={key}> {t(`auth.register.${key}.label`)}</FormLabel>
            <Input
              id={key}
              onChange={handleInputChange}
              placeholder={t(`auth.login.${key}.placeholder`)}
              {...inputProps}
            />
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
