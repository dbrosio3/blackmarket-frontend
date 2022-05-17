import React, { useState } from 'react';

import { Container, useToast } from '@chakra-ui/react';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';

import { errorHandler } from '@/lib/errorHandler';
import { FullWidthButton } from '@/styles/theme/components/Buttons';
import { TextField } from '@components/Form';
import { LoginCredentials } from '@features/auth/types';
import { loginFormikSchema } from '@features/auth/utils/loginFormSchema';
import { useSession } from '@providers/SessionContext';

import { InputsWrapper } from '../common/InputsWrapper';

const fields = [{ name: 'userId', type: 'text' }, { name: 'password', type: 'password' }];

export const LoginForm = () => {
  const { t } = useTranslation();
  const { login } = useSession();
  const toast = useToast();

  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const initialValues: LoginCredentials = {
    userId: '',
    password: '',
  };

  const onSuccess = (name: string) =>
    toast({
      title: t('auth.login.success.title', { name }),
      status: 'success',
      duration: 9000,
      isClosable: true,
    });

  const handleLogin = async (values: LoginCredentials) => {
    try {
      setIsLoggingIn(true);
      const name = await login(values);
      onSuccess(name);
    } catch (error) {
      errorHandler.reportError(error);
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleResetPassword = () =>
    toast({
      title: t('error.notImplementedYet'),
      status: 'warning',
      duration: 9000,
      isClosable: true,
    });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginFormikSchema}
      onSubmit={handleLogin}
    >
      {({ handleSubmit, isValid }) => (
        <>
          <InputsWrapper mt={12}>
            {fields.map(({ name, ...restProps }) => (
              <TextField
                key={name}
                name={name}
                label={t(`auth.login.${name}.label`)}
                placeholder={t(`auth.login.${name}.placeholder`)}
                {...restProps}
              />
            ))}
          </InputsWrapper>
          <FullWidthButton
            colorScheme="secondary"
            onClick={handleSubmit}
            disabled={!isValid || isLoggingIn}
            isLoading={isLoggingIn}
            loadingText={t('auth.login.signUpLoadingText')}
          >
            {t('common.logIn')}
          </FullWidthButton>
          <Container w="100%" mt="2.75rem">
            <FullWidthButton colorScheme="lightblue" variant="link" onClick={handleResetPassword}>
              {t('auth.login.forgotPassword')}
            </FullWidthButton>
          </Container>
        </>
      )}
    </Formik>
  );
};
