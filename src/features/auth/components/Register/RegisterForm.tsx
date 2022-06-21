import React, { useState } from 'react';

import { useToast } from '@chakra-ui/react';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';

import { errorHandler } from '@/lib/errorHandler';
import { TextField } from '@components/Form/TextField';
import { RegistrationData } from '@features/auth/types';
import { registerFormikSchema } from '@features/auth/utils/registerFormSchema';
import { useSession } from '@providers/SessionContext';
import { FullWidthButton } from '@styles/theme/components/Buttons';

import { InputsWrapper } from '../common/InputsWrapper';

const fields = [
  { name: 'userId', type: 'email' },
  { name: 'fullName', type: 'text' },
  { name: 'userName', type: 'text' },
  { name: 'password', type: 'password' },
];

export const RegisterForm = () => {
  const { t } = useTranslation();
  const { register } = useSession();
  const toast = useToast();

  const [isSigningUp, setIsSigningUp] = useState(false);

  const initialValues: RegistrationData = {
    userId: '',
    fullName: '',
    userName: '',
    password: '',
  };

  const onSuccess = (name: string) =>
    toast({
      title: t('auth.register.success.title', { name }),
      description: t('auth.register.success.description'),
      status: 'success',
      duration: 9000,
      isClosable: true,
    });

  const handleRegistration = async (values: RegistrationData) => {
    try {
      setIsSigningUp(true);
      const name = await register(values);
      onSuccess(name);
    } catch (error) {
      errorHandler.reportError(error);
    } finally {
      setIsSigningUp(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registerFormikSchema}
      onSubmit={handleRegistration}
    >
      {({ handleSubmit, isValid }) => (
        <>
          <InputsWrapper>
            {fields.map(({ name, ...restProps }) => (
              <TextField
                key={name}
                name={name}
                label={t(`auth.register.${name}.label`)}
                placeholder={t(`auth.register.${name}.placeholder`)}
                autoComplete="new-password"
                {...restProps}
              />
            ))}
          </InputsWrapper>
          <FullWidthButton
            colorScheme="secondary"
            onClick={handleSubmit}
            disabled={!isValid || isSigningUp}
            isLoading={isSigningUp}
            loadingText={t('auth.register.signUpLoadingText')}
          >
            {t('common.signUp')}
          </FullWidthButton>
        </>
      )}
    </Formik>
  );
};
