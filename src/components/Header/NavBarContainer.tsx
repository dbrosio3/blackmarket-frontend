import { chakra, Flex } from '@chakra-ui/react';

export const NavBarContainer = chakra(Flex, {
  baseStyle: {
    width: '100%',
    height: '91px',
    padding: 9,
    backgroundColor: 'blue.main',
  },
});
