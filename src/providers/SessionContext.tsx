import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

import { errorHandler } from '@/lib/errorHandler';
import { JustChildrenProp } from '@/types';
import storage from '@/utils/storage';
import { registerWithEmailAndPassword } from '@features/auth';
import { loginWithCredentials } from '@features/auth/api/login';
import {
  AuthResponse,
  LoginCredentials,
  RegistrationData,
  Session,
  SessionState,
} from '@features/auth/types';

interface ISessionContext {
  session: Session;
  isAuthenticated: boolean;
  login: (credentials: LoginCredentials) => Promise<string>;
  logout: () => void;
  register: (registrationValues: RegistrationData) => Promise<string>;
}

const SessionContext = createContext({} as ISessionContext);

const defaultSessionState = {
  user: undefined,
  state: SessionState.LOCKED,
};

const SessionProvider: React.FC<JustChildrenProp> = ({ children }) => {
  const [session, setSession] = useState<Session>(defaultSessionState);

  const isAuthenticated = session.state === SessionState.UNLOCKED;

  const handleAuthResponse = ({ data, headers }: AuthResponse) => {
    const accessToken = String(headers['access-token']);
    const expiry = Number(headers.expiry);
    const client = String(headers.client);

    const newSession: Session = {
      user: data.data,
      state: SessionState.UNLOCKED,
      token: accessToken,
      expiration: expiry,
      client,
    };

    storage.setSession(newSession);
    setSession(newSession);
  };

  const login = async (credentials: LoginCredentials) => {
    const response = await loginWithCredentials({
      email: credentials.userId,
      password: credentials.password,
    });
    handleAuthResponse(response);
    return response.data.data.name;
  };

  const register = async (values: RegistrationData) => {
    const response = await registerWithEmailAndPassword({
      user: {
        email: values.userId,
        name: values.fullName,
        nickname: values.userName,
        password: values.password,
      },
    });
    handleAuthResponse(response);
    return response.data.data.name;
  };

  const logout = () => {
    storage.clearSession();
    setSession(defaultSessionState);
  };

  const loadSession = useCallback(() => {
    try {
      const storedSession = storage.getSession();
      if (storedSession) setSession(storedSession);
    } catch (error) {
      errorHandler.reportError(error);
      setSession(defaultSessionState);
    }
  }, []);

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
