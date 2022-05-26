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
    xs: {
      fontSize: 'xs',
      h: 7,
      px: 4,
      py: 3,
    },
    sm: {
      fontSize: 'sm',
      h: 10,
      px: 4,
      py: 3,
    },
    md: {
      fontSize: 'md',
      h: 12,
      px: 6,
      py: 4,
    },
  },
  variants: {
    outline: props => ({
      borderColor: props.colorScheme[500] || 'blue.500',
    }),
  },
  defaultProps: {
    size: 'md',
  },
};
