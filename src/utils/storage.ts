import { Session } from '@features/auth/types';

const storagePrefix = 'blackmarket_';

const storage = {
  getSession: () => {
    return JSON.parse(window.sessionStorage.getItem(`${storagePrefix}session`) as string);
  },
  setSession: (session: Session) => {
    window.sessionStorage.setItem(`${storagePrefix}session`, JSON.stringify(session));
  },
  clearSession: () => {
    window.sessionStorage.removeItem(`${storagePrefix}session`);
  },
};

export default storage;
