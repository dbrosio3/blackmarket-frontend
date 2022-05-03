import React, { useState } from 'react';

import { Container, FormLabel, Input, Link, Text } from '@chakra-ui/react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

import { PATHS } from '@/routes/paths';
import { registerWithEmailAndPassword } from '@features/auth/api/register';
import { useSession } from '@providers/SessionContext';
import { FullWidthButton } from '@styles/theme/components/Buttons';
import { BlackMarketLogo } from '@styles/theme/components/Logo';

import { AuthSection } from '../common/AuthSection';

import { RegisterFormControl } from './RegisterFormControl.styles';

const fields = [
  {
    key: 'userId',
    label: 'Email or telephone number',
    type: 'text',
    placeholder: 'Type your email or telephone',
  },
  {
    key: 'fullName',
    label: 'Full Name',
    type: 'text',
    placeholder: 'Type your full name',
  },
  {
    key: 'userName',
    label: 'User Name',
    type: 'text',
    placeholder: 'Type your user name',
  },
  { key: 'password', label: 'Password', type: 'password', placeholder: 'Type your password' },
];

interface CredentialsFormState {
  username: string;
  password: string;
}

export const RegisterForm = () => {
  const { onRegister } = useSession();
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState<CredentialsFormState>({
    username: '',
    password: '',
  });

  const handleRegister = async () => {
    // TODO: implement proper registration
    await registerWithEmailAndPassword({
      user: {
        email: 'test@test.com',
        password: 'test1234',
        name: 'Test Testingson',
      },
    });
    onRegister();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCredentials({ ...credentials, [e.target.name]: e.target.value });

  return (
    <>
      <AuthSection height="37.75rem">
        <BlackMarketLogo width={174} height={31} />
        <RegisterFormControl>
          {fields.map(({ key, label, ...inputProps }) => (
            <>
              <FormLabel htmlFor={key} mb={0.75}>
                {label}
              </FormLabel>
              <Input id={key} onChange={handleInputChange} {...inputProps} />
            </>
          ))}
          <FullWidthButton colorScheme="secondary" disabled>
            Sign up
          </FullWidthButton>
        </RegisterFormControl>
        <Container w="110%" mt="1rem" px="0" mx="-0.5rem">
          <Text align="center">
            By signing up, you accept our{` `}
            <Link as={RouterLink} to={`/${PATHS.TERMS_AND_CONDITIONS}`} colorScheme="lightblue">
              Conditions
            </Link>
            , the{' '}
            <Link as={RouterLink} to={`/${PATHS.PRIVACY_POLICY}`}>
              Data Policy
            </Link>{' '}
            and the{' '}
            <Link as={RouterLink} to={`/${PATHS.COOKIES}`}>
              Cookies Policy
            </Link>
            .
          </Text>
          <Text align="center" mt="0.75rem">
            Already have an account?{` `}
            <Link as={RouterLink} to={`/${PATHS.AUTH}/${PATHS.LOGIN}`}>
              Log in
            </Link>
          </Text>
        </Container>
      </AuthSection>
    </>
  );
};
