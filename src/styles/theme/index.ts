import { extendTheme } from '@chakra-ui/react';

import { ThemeButton } from './components/Buttons';
import { ThemeInput } from './components/Inputs/';

const colors = {
  primary: {
    main: '#52c675',
    50: '#ecf9f0',
    100: '#e3fceb',
    200: '#c0edce',
    300: '#9de0b2',
    400: '#78d393',
    500: '#52c675',
    600: '#39ad5c',
    700: '#2a8646',
    800: '#1c6032',
    900: '#0c3b1d',
  },
  secondary: {
    main: '#00031a',
    50: '#e5e8ff',
    100: '#b8c0ff',
    200: '#8a97ff',
    300: '#5c6fff',
    400: '#2e46ff',
    500: '#00031a',
    600: '#0018cc',
    700: '#001299',
    800: '#000c66',
    900: '#00031a',
  },
  lightblue: {
    main: '#076ce0',
    50: '#def2ff',
    100: '#b0d6ff',
    200: '#80bbfe',
    300: '#50a0fb',
    400: '#2085f8',
    500: '#076ce0',
    600: '#0053ae',
    700: '#003c7e',
    800: '#00244e',
    900: '#000d20',
  },
};

// const shadows = {
//   outline: '0 0 0 3px var(--chakra-colors-secondary-50)',
// };

const components = {
  Button: ThemeButton,
  Input: ThemeInput,
};

export const blackMarketTheme = extendTheme({ colors, components });
