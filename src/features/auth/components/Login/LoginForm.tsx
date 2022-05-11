import React, { useState } from 'react';

import { Container, FormLabel, Input } from '@chakra-ui/react';

import { FullWidthButton } from '@/styles/theme/components/Buttons';

import { LoginFormControl } from './LoginFormControl.styles';

const fields = [
  {
    key: 'userId',
    label: 'Email or telephone number',
    type: 'text',
    placeholder: 'Type your email or telephone',
  },
  { key: 'password', label: 'Password', type: 'password', placeholder: 'Type your password' },
];

interface CredentialsFormState {
  userId: string;
  password: string;
}

export const LoginForm = () => {
  const [credentials, setCredentials] = useState<CredentialsFormState>({
    userId: '',
    password: '',
  });

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
        <FullWidthButton colorScheme="secondary">Log in</FullWidthButton>
      </LoginFormControl>
      <Container w="100%" mt="2.75rem">
        <FullWidthButton colorScheme="lightblue" variant="link">
          I forgot my password
        </FullWidthButton>
      </Container>
    </>
  );
};
