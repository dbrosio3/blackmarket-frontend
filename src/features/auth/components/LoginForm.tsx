import React, { useState } from 'react';

import { chakra, FormControl, FormLabel, Input } from '@chakra-ui/react';

import { FullWidthButton } from '@styles/theme/components/Buttons';
import { BlackMarketLogo } from '@styles/theme/components/Logo';

import { AuthSection } from './AuthSection';

const CredentialsForm = chakra(FormControl, {
  baseStyle: {
    width: '100%',
    marginTop: '2.75rem',
    alignItems: 'baseline',
    input: {
      marginBottom: '0.75rem',
    },
  },
});

const BottomSection = chakra('div', {
  baseStyle: {
    width: '100%',
    marginTop: '2.75rem',
  },
});

const fields = [
  {
    key: 'username',
    label: 'Email or telephone number',
    type: 'text',
    placeholder: 'Type your email or telephone',
  },
  { key: 'password', label: 'Password', type: 'password', placeholder: 'Type your password' },
];

interface CredentialsFormState {
  username: string;
  password: string;
}

export const LoginForm = () => {
  const [credentials, setCredentials] = useState<CredentialsFormState>({
    username: '',
    password: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCredentials({ ...credentials, [e.target.name]: e.target.value });

  return (
    <>
      <AuthSection height="29rem">
        <BlackMarketLogo width={174} height={31} />
        <CredentialsForm>
          {fields.map(({ key, label, ...inputProps }) => (
            <>
              <FormLabel htmlFor={key}>{label}</FormLabel>
              <Input id={key} onChange={handleInputChange} {...inputProps} />
            </>
          ))}
          <FullWidthButton colorScheme="secondary">Log in</FullWidthButton>
        </CredentialsForm>
        <BottomSection>
          <FullWidthButton colorScheme="lightblue" variant="link">
            I forgot my password
          </FullWidthButton>
        </BottomSection>
      </AuthSection>
      <AuthSection height="8rem" mt="1rem">
        LoginForm2
      </AuthSection>
    </>
  );
};
