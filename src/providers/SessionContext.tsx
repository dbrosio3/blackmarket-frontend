import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

import { JustChildrenProp } from '@/types';
import storage from '@/utils/storage';
import { registerWithEmailAndPassword } from '@features/auth';
import { AuthResponse, RegistrationData, Session, SessionState } from '@features/auth/types';

interface ISessionContext {
  session: Session;
  isAuthenticated: boolean;
  login(): void;
  logout(): void;
  register: (registrationValues: RegistrationData) => Promise<string>;
}

const SessionContext = createContext({} as ISessionContext);

const SessionProvider: React.FC<JustChildrenProp> = ({ children }) => {
  const [session, setSession] = useState<Session>({
    user: undefined,
    state: SessionState.LOCKED,
  });

  const isAuthenticated = session.state === SessionState.UNLOCKED;

  const handleAuthResponse = ({ data, headers }: AuthResponse) => {
    const accessToken: string = headers['access-token'];
    const expiry: number = headers['expiry'];

    const newSession: Session = {
      user: data.data,
      state: SessionState.UNLOCKED,
      token: accessToken,
      expiration: expiry,
    };

    storage.setSession(newSession);
    setSession(newSession);
  };

  const loadSession = useCallback(() => {
    const storedSession = storage.getSession();
    if (storedSession) setSession(storedSession);
  }, []);

  const login = () => {
    alert('login');
  };

  const register = async (values: RegistrationData) => {
    const response = await registerWithEmailAndPassword({
      user: {
        email: values.userId,
        fullname: values.fullName,
        nickname: values.userName,
        password: values.password,
      },
    });

    handleAuthResponse(response);

    return response.data.data.nickname;
  };

  const logout = () => {};

  useEffect(() => {
    loadSession();
  }, [loadSession]);

  return (
    <SessionContext.Provider
      value={{
        session,
        isAuthenticated,
        login,
        logout,
        register,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

const useSession = () => useContext(SessionContext);

export { SessionProvider, useSession };
