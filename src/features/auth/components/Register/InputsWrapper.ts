import { chakra, Wrap } from '@chakra-ui/react';

export const InputsWrapper = chakra(Wrap, {
  baseStyle: {
    width: '100%',
    marginTop: '1.75rem',
    alignItems: 'baseline',
    input: {
      marginBottom: '0.75rem',
    },
  },
});
