import { chakra, FormControl } from '@chakra-ui/react';

export const RegisterFormControl = chakra(FormControl, {
  baseStyle: {
    width: '100%',
    marginTop: '1.75rem',
    alignItems: 'baseline',
    input: {
      marginBottom: '0.75rem',
    },
  },
});
