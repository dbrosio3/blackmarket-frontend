import { t } from 'i18next';

import { customToast } from '@/utils/customStandaloneToast';

const getErrorMessage = (error: unknown) => {
  if (error instanceof Error) return error.message;
  return String(error);
};

class ErrorHandler {
  reportError = (error: unknown) => {
    console.error(error);
    customToast({
      title: String(t('common.genericError')),
      description: getErrorMessage(error),
      status: 'error',
      duration: 9000,
      isClosable: true,
    });
  };
}

export const errorHandler = new ErrorHandler();
