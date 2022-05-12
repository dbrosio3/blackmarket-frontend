import i18n from '@/lib/i18n';
import { customToast } from '@/utils/customStandaloneToast';

const getErrorMessage = (error: unknown) => {
  if (error instanceof Error) return error.message;
  return String(error);
};

class ErrorHandler {
  reportError = (error: unknown) => {
    console.error(error);
    customToast({
      title: String(i18n.t('error.genericError')),
      description: getErrorMessage(error),
      status: 'error',
      duration: 9000,
      isClosable: true,
    });
  };
}

export const errorHandler = new ErrorHandler();
