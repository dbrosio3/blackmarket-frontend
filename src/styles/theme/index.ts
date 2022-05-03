import { extendTheme } from '@chakra-ui/react';

const colors = {
  primary: {
    50: '#ecf9f0',
    100: '#e3fceb',
    200: '#c0edce',
    300: '#9de0b2',
    400: '#78d393',
    500: '#52c675', // main
    600: '#39ad5c',
    700: '#2a8646',
    800: '#1c6032',
    900: '#0c3b1d',
  },
  secondary: {
    50: '#e5e8ff',
    100: '#b8c0ff',
    200: '#8a97ff',
    300: '#5c6fff',
    400: '#2e46ff',
    500: '#001dff',
    600: '#0018cc',
    700: '#001299',
    800: '#000c66',
    900: '#00031a', // main
  },
};

export const blackMarketTheme = extendTheme({ colors });
