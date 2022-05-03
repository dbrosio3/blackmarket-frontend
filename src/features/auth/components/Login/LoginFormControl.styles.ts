import { chakra, FormControl } from '@chakra-ui/react';

export const LoginFormControl = chakra(FormControl, {
  baseStyle: {
    width: '100%',
    marginTop: '2.75rem',
    alignItems: 'baseline',
    input: {
      marginBottom: '0.75rem',
    },
  },
});
