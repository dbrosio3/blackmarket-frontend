import { chakra, Flex } from '@chakra-ui/react';

export const FooterContainer = chakra(Flex, {
  baseStyle: {
    width: '100%',
    // minHeight: '363px',
    padding: 9,
    backgroundColor: 'secondary.main',
  },
});
