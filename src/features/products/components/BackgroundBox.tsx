import { Box, chakra } from '@chakra-ui/react';

export const BackgroundBox = chakra(Box, {
  baseStyle: {
    w: '100%',
    h: '386px',
    bg: 'blue.main',
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 0,
  },
});
