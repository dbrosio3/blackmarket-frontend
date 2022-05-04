import React, { createContext, useContext } from 'react';

import { JustChildrenProp } from '@/types';

enum SessionStates {
  LOCKED = 'LOCKED',
  UNLOCKED = 'UNLOCKED',
}

type Session = {
  session: {
    user: string;
    state: SessionStates.LOCKED | SessionStates.UNLOCKED;
  };
  isAuthenticated: boolean;
  login(): void;
  logout(): void;
  onRegister(): void;
};

const SessionContext = createContext({} as Session);

const SessionProvider: React.FC<JustChildrenProp> = ({ children }) => {
  const session = {
    user: '',
    state: SessionStates.LOCKED,
  };

  // TODO: `isAuthenticated` value should be a derivation of session state
  const isAuthenticated = false;

  const login = () => {
    alert('login');
  };

  const onRegister = () => {
    alert('register');
  };

  const logout = () => {};

  return (
    <SessionContext.Provider
      value={{
        session,
        isAuthenticated,
        login,
        logout,
        onRegister,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

const useSession = () => useContext(SessionContext);

export { SessionProvider, useSession };
