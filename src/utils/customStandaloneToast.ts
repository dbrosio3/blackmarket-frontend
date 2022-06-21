import { createStandaloneToast } from '@chakra-ui/react';

import { blackMarketTheme } from '@styles/theme';

const { ToastContainer, toast: customToast } = createStandaloneToast({
  theme: blackMarketTheme,
});

export { ToastContainer, customToast };
