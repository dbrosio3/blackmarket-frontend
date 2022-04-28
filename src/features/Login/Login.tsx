import React from 'react';

import { useSession } from '@providers/SessionContext';

export const Login = () => {
  const { login } = useSession();

  return (
    <>
      <div>Hello</div>
      <button onClick={login}>login</button>
    </>
  );
};
