import { ComponentStyleConfig } from '@chakra-ui/theme';

export const ThemeButton: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: 'bold',
    borderRadius: '8px',
    _disabled: {
      backgroundColor: 'gray.main',
      color: 'gray.600',
      opacity: 1,
    },
    _hover: {
      _disabled: {
        backgroundColor: 'gray.main',
        color: 'gray.600',
        opacity: 0.75,
      },
    },
    _focus: { boxShadow: 'none' },
  },
  sizes: {
    sm: {
      fontSize: 'sm',
      px: 4,
      py: 3,
    },
    md: {
      fontSize: 'md',
      h: '2.75rem',
      px: 6,
      py: 4,
    },
  },
  variants: {
    outline: {
      borderColor: 'secondary.500',
    },
  },
  defaultProps: {
    size: 'md',
  },
};
