import { chakra, Button } from '@chakra-ui/react';

export const FullWidthButton = chakra(Button, {
  baseStyle: {
    w: '100%',
  },
});
