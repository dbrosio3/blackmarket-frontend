import { chakra, Container } from '@chakra-ui/react';

export const ViewPort = chakra(Container, {
  baseStyle: {
    w: '100vw',
    h: '100vh',
    maxWidth: '100vw',
    bg: 'blue.900',
    backgroundSize: 'cover',
  },
});
