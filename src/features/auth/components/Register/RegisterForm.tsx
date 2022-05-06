import React, { useState } from 'react';

import { FormLabel, IconButton, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { errorHandler } from '@/lib/errorHandler';
import { registerWithEmailAndPassword } from '@features/auth/api/register';
import { RegisterCredentialsDTO, RegistrationData } from '@features/auth/types';
import { useSession } from '@providers/SessionContext';
import { FullWidthButton } from '@styles/theme/components/Buttons';
import { VisibilityOff } from '@styles/theme/components/Icons/VisibilityOff';

import { RegisterFormControl } from './RegisterFormControl.styles';

const fields = [
  { key: 'userId', type: 'email' },
  { key: 'fullName', type: 'text' },
  { key: 'userName', type: 'text' },
  { key: 'password', type: 'password', icon: <VisibilityOff /> },
];

export const RegisterForm = () => {
  const { t } = useTranslation();
  const { onRegister } = useSession();

  const [userData, setUserData] = useState<RegistrationData>({
    userId: '',
    fullName: '',
    userName: '',
    password: '',
  });

  const handleRegister = async () => {
    const registrationDTO: RegisterCredentialsDTO = {
      user: {
        email: userData.userId,
        fullname: userData.fullName,
        nickname: userData.userName,
        password: userData.password,
      },
    };
    try {
      await registerWithEmailAndPassword(registrationDTO);
      onRegister();
    } catch (error) {
      errorHandler.reportError(error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUserData({ ...userData, [e.target.id]: e.target.value });

  return (
    <RegisterFormControl>
      {fields.map(({ key, icon, ...inputProps }) => (
        <>
          <FormLabel htmlFor={key} mb={0.75}>
            {t(`auth.register.${key}.label`)}
          </FormLabel>
          <InputGroup>
            <Input
              id={key}
              onChange={handleInputChange}
              placeholder={t(`auth.register.${key}.placeholder`)}
              {...inputProps}
            />
            {icon && (
              <InputRightElement>
                <IconButton
                  variant="unstyled"
                  aria-label="Toggle password visibility"
                  icon={icon}
                />
              </InputRightElement>
            )}
          </InputGroup>
        </>
      ))}
      <FullWidthButton colorScheme="secondary" onClick={handleRegister}>
        {t('common.signUp')}
      </FullWidthButton>
    </RegisterFormControl>
  );
};
