import { ComponentStyleConfig } from '@chakra-ui/theme';

export const ThemeButton: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: 'bold',
    borderRadius: '8px',
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
  variants: {},
  defaultProps: {
    size: 'md',
  },
};
