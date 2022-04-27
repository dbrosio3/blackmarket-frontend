import React from 'react';

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
  register(): void;
};

const SessionContext = React.createContext({} as Session);

const SessionProviderComponent: React.FC<JustChildrenProp> = ({ children }) => {
  const session = {
    user: '',
    state: SessionStates.LOCKED,
  };

  const login = () => {
    alert('login');
  };

  const register = () => {};

  const logout = () => {};

  return (
    <SessionContext.Provider
      value={{
        session,
        login,
        logout,
        register,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

const SessionProvider = SessionProviderComponent;

const useSession = () => React.useContext(SessionContext);

export { SessionProvider, useSession };
