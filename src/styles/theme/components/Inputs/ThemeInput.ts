import { ComponentStyleConfig } from '@chakra-ui/theme';

export const ThemeInput: ComponentStyleConfig = {
  baseStyle: {
    field: {},
  },
  sizes: {
    xs: {
      field: {
        borderRadius: 'sm',
        fontSize: 'xs',
        height: 6,
        paddingX: 2,
      },
    },
    sm: {
      field: {
        borderRadius: 'sm',
        fontSize: 'sm',
        height: 8,
        paddingX: 3,
      },
    },
    md: {
      field: {
        borderRadius: 'md',
        fontSize: 'md',
        height: '2.75rem',
        paddingX: 4,
      },
    },
    lg: {
      field: {
        borderRadius: 'md',
        fontSize: 'lg',
        height: 12,
        paddingX: 4,
      },
    },
  },
  variants: {
    outline: {
      field: {
        borderColor: 'blue.500',
        border: '1px solid',
        _focus: {
          zIndex: 1,
          borderColor: 'blue.400',
        },
        _hover: { borderColor: 'blue.400' },
      },
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'outline',
  },
};
