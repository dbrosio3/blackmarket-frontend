import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import EN from '@/locales/en.i18n.json';

// eslint-disable-next-line import/no-named-as-default-member
i18n.use(initReactI18next).init({
  lng: 'en',
  debug: true,
  resources: {
    en: {
      translation: EN,
    },
  },
});
