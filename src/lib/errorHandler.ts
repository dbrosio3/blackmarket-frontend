import { createStandaloneToast } from '@chakra-ui/react';

import { blackMarketTheme } from '@styles/theme';

const toast = createStandaloneToast({ theme: blackMarketTheme });

const getErrorMessage = (error: unknown) => {
  if (error instanceof Error) return error.message;
  return String(error);
};

class ErrorHandler {
  reportError = (error: unknown) => {
    console.error(error);
    toast({
      title: 'An error occurred.',
      description: getErrorMessage(error),
      status: 'error',
      duration: 9000,
      isClosable: true,
    });
  };
}

export const errorHandler = new ErrorHandler();
