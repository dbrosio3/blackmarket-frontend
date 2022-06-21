import { chakra, Flex } from '@chakra-ui/react';

export const MaxWidthWrapper = chakra(Flex, {
  baseStyle: {
    maxWidth: { xl: '1200px' },
    width: '100%',
  },
});
