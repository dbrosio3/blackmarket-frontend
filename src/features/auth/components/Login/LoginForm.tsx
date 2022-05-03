import React, { useState } from 'react';

import { Container, FormLabel, Input, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import { PATHS } from '@/routes/paths';
import { FullWidthButton } from '@/styles/theme/components/Buttons';
import { BlackMarketLogo } from '@/styles/theme/components/Logo';

import { AuthSection } from '../common/AuthSection';

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
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState<CredentialsFormState>({
    userId: '',
    password: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCredentials({ ...credentials, [e.target.name]: e.target.value });

  return (
    <>
      <AuthSection height="29rem">
        <BlackMarketLogo width={174} height={31} />
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
      </AuthSection>
      <AuthSection height="8rem" mt="1rem" pt="1.5rem">
        <Text>{`Don't have an account?`}</Text>
        <FullWidthButton
          variant="outline"
          mt="1rem"
          onClick={() => navigate(`/${PATHS.AUTH}/${PATHS.REGISTER}`)}
        >
          Sign up
        </FullWidthButton>
      </AuthSection>
    </>
  );
};
