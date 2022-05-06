import React, { createContext, useContext } from 'react';

import { useTranslation } from 'react-i18next';

import { JustChildrenProp } from '@/types';
import { customToast } from '@/utils/customStandaloneToast';

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
  const { t } = useTranslation();

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
    customToast({
      title: t('auth.register.success.title'),
      description: t('auth.register.success.description'),
      status: 'success',
      duration: 9000,
      isClosable: true,
    });
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
