import { chakra, Flex } from '@chakra-ui/react';

export const FooterContainer = chakra(Flex, {
  baseStyle: {
    width: '100%',
    px: 9,
    py: 4,
    backgroundColor: 'blue.main',
  },
});
