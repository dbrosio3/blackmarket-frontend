import React from 'react';

import { Button } from '@chakra-ui/react';

import { useSession } from '@providers/SessionContext';

import { registerWithEmailAndPassword } from '../api/register';

import { AuthSection } from './AuthSection';

export const RegisterForm = () => {
  const { onRegister } = useSession();

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

  return (
    <AuthSection height="40rem">
      Register Form
      <Button onClick={handleRegister}>Sign up</Button>
    </AuthSection>
  );
};
