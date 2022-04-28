import React from 'react';

import { useSession } from '@providers/SessionContext';

import { registerWithEmailAndPassword } from './api/register';

export const Register = () => {
  const { onRegister } = useSession();

  const handleRegister = async () => {
    // TODO: implement proper registration
    const _response = await registerWithEmailAndPassword({
      user: {
        email: 'test@test.com',
        password: 'test1234',
        name: 'Test Testingson',
      },
    });
    onRegister();
  };

  return (
    <>
      <div>Hello</div>
      <button onClick={handleRegister}>Sign up</button>
    </>
  );
};
