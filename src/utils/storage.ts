import { Session } from '@features/auth/types';

const storagePrefix = 'blackmarket_';

const storage = {
  getSession: () => JSON.parse(window.localStorage.getItem(`${storagePrefix}session`) as string),
  setSession: (session: Session) => {
    window.localStorage.setItem(`${storagePrefix}session`, JSON.stringify(session));
  },
  clearSession: () => {
    window.localStorage.removeItem(`${storagePrefix}session`);
  },
};

export default storage;
