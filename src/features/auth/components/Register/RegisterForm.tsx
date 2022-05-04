import React, { useState } from 'react';

import { FormLabel, IconButton, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { registerWithEmailAndPassword } from '@features/auth/api/register';
import { RegistrationData } from '@features/auth/types';
import { useSession } from '@providers/SessionContext';
import { FullWidthButton } from '@styles/theme/components/Buttons';
import { VisibilityOff } from '@styles/theme/components/Icons/VisibilityOff';

import { RegisterFormControl } from './RegisterFormControl.styles';

export const RegisterForm = () => {
  const { t } = useTranslation();
  const { onRegister } = useSession();

  const [userData, setUserData] = useState<RegistrationData>({
    userId: '',
    fullName: '',
    userName: '',
    password: '',
  });

  const fields = [
    {
      key: 'userId',
      label: t('auth.register.userId.label'),
      type: 'text',
      placeholder: t('auth.register.userId.placeholder'),
    },
    {
      key: 'fullName',
      label: t('auth.register.fullName.label'),
      type: 'text',
      placeholder: t('auth.register.fullName.placeholder'),
    },
    {
      key: 'userName',
      label: t('auth.register.fullName.label'),
      type: 'text',
      placeholder: t('auth.register.fullName.placeholder'),
    },
    {
      key: 'password',
      label: t('auth.register.password.label'),
      type: 'password',
      placeholder: t('auth.register.password.placeholder'),
      icon: <VisibilityOff />,
    },
  ];

  const handleRegister = async () => {
    // TODO: implement proper registration
    await registerWithEmailAndPassword({
      user: userData,
    });
    onRegister();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUserData({ ...userData, [e.target.name]: e.target.value });

  return (
    <RegisterFormControl>
      {fields.map(({ key, label, icon, ...inputProps }) => (
        <>
          <FormLabel htmlFor={key} mb={0.75}>
            {label}
          </FormLabel>
          <InputGroup>
            <Input id={key} onChange={handleInputChange} {...inputProps} />
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
      <FullWidthButton colorScheme="secondary" disabled onClick={handleRegister}>
        {t('common.signUp')}
      </FullWidthButton>
    </RegisterFormControl>
  );
};
