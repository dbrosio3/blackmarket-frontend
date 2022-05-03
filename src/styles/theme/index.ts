import { extendTheme } from '@chakra-ui/react';

import { ThemeButton } from './components/Buttons';
import { ThemeInput } from './components/Inputs/';
import { ThemeLink } from './components/Link/ThemeLink';

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
  magenta: {
    main: '#b73a72',
    50: '#f9ecf2',
    100: '#eec9d9',
    200: '#e3a6c1',
    300: '#d883a9',
    400: '#cd6091',
    500: '#c23d79',
    600: '#9b3160',
    700: '#742548',
    800: '#4d1930',
    900: '#270c18',
  },
  gray: {
    main: '#e0e0e0',
    50: '#f2f2f2',
    100: '#dbdbdb',
    200: '#c4c4c4',
    300: '#adadad',
    400: '#969696',
    500: '#808080',
    600: '#636363',
    700: '#4d4d4d',
    800: '#333333',
    900: '#1a1a1a',
  },
};

// const shadows = {
//   outline: '0 0 0 3px var(--chakra-colors-secondary-50)',
// };

const components = {
  Button: ThemeButton,
  Input: ThemeInput,
  Link: ThemeLink,
};

export const blackMarketTheme = extendTheme({ colors, components });
