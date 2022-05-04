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
