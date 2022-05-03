import React, { useState } from 'react';

import {
  Container,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Text,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

import { PATHS } from '@/routes/paths';
import { registerWithEmailAndPassword } from '@features/auth/api/register';
import { RegistrationData } from '@features/auth/types';
import { useSession } from '@providers/SessionContext';
import { FullWidthButton } from '@styles/theme/components/Buttons';
import { VisibilityOff } from '@styles/theme/components/Icons/VisibilityOff';
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
  {
    key: 'password',
    label: 'Password',
    type: 'password',
    placeholder: 'Type your password',
    icon: <VisibilityOff />,
  },
];

export const RegisterForm = () => {
  const { onRegister } = useSession();

  const [userData, setUserData] = useState<RegistrationData>({
    userId: '',
    fullName: '',
    userName: '',
    password: '',
  });

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
    <>
      <AuthSection height="37.75rem">
        <BlackMarketLogo width={174} height={31} />
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
