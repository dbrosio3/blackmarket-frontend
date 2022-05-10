import React from 'react';

import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';

import { errorHandler } from '@/lib/errorHandler';
import { TextField } from '@components/TextField';
import { registerWithEmailAndPassword } from '@features/auth/api/register';
import { RegistrationData } from '@features/auth/types';
import { useSession } from '@providers/SessionContext';
import { FullWidthButton } from '@styles/theme/components/Buttons';
import { VisibilityOff } from '@styles/theme/components/Icons/VisibilityOff';

import { InputsWrapper } from './InputsWrapper';

const fields = [
  { name: 'userId', type: 'email' },
  { name: 'fullName', type: 'text' },
  { name: 'userName', type: 'text' },
  { name: 'password', type: 'password', icon: <VisibilityOff /> },
];

export const RegisterForm = () => {
  const { t } = useTranslation();
  const { onRegister } = useSession();

  const initialValues: RegistrationData = {
    userId: '',
    fullName: '',
    userName: '',
    password: '',
  };

  const handleRegistration = async (values: RegistrationData) => {
    try {
      await registerWithEmailAndPassword({
        user: {
          email: values.userId,
          fullname: values.fullName,
          nickname: values.userName,
          password: values.password,
        },
      });
      onRegister();
    } catch (error) {
      errorHandler.reportError(error);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleRegistration}>
      {({ handleSubmit }) => (
        <InputsWrapper>
          {fields.map(({ name, ...restProps }) => (
            <TextField
              key={name}
              name={name}
              label={t(`auth.register.${name}.label`)}
              placeholder={t(`auth.register.${name}.placeholder`)}
              {...restProps}
            />
          ))}
          <FullWidthButton colorScheme="secondary" onClick={handleSubmit}>
            {t('common.signUp')}
          </FullWidthButton>
        </InputsWrapper>
      )}
    </Formik>
  );
};
