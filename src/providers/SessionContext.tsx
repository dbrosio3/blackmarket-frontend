import React from 'react';

import { AppProviderProps } from './AppProvider';

const SessionContext = React.createContext({});

const SessionProviderComponent = ({ children }: AppProviderProps) => {
  const session = {};

  const login = () => {};

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
