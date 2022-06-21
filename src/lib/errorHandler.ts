import { AxiosError } from 'axios';

import i18n from '@/lib/i18n';
import { customToast } from '@/utils/customStandaloneToast';

const getMessageFromAxiosError = (error: AxiosError) => JSON.parse(error.request.response).error;

const getErrorMessage = (error: unknown) => {
  try {
    if (error instanceof AxiosError) return getMessageFromAxiosError(error);
    if (error instanceof Error) return error.message;
    return String(error);
  } catch (metaError) {
    return null;
  }
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
