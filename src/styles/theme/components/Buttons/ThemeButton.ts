import { ComponentStyleConfig } from '@chakra-ui/theme';

export const ThemeButton: ComponentStyleConfig = {
  baseStyle: ({ colorScheme }) => ({
    width: 'fit-content',
    fontWeight: 'bold',
    borderRadius: '8px',
    _active: {
      outlineColor: colorScheme[100] || 'blue.activeOutline',
      outlineStyle: 'solid',
      outlineOffset: 0,
    },
    _focus: {
      boxShadow: 'none',
      outlineOffset: 2,
      outlineColor: 'blue.focus',
      outlineStyle: 'dashed',
      outlineWidth: 3,
    },
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
  }),
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
    primary: ({ colorScheme }) => ({
      color: 'common.white',
      bgColor: colorScheme[500] || 'blue.500',
      borderColor: 'transparent',
      borderWidth: 1,
      _disabled: {
        backgroundColor: 'gray.main',
        color: 'gray.600',
        opacity: 1,
      },
      _hover: {
        bgColor: colorScheme[300] || 'blue.hover',
      },
      _active: {
        bgColor: colorScheme[400] || 'blue.active',
      },
    }),
    outline: ({ colorScheme }) => ({
      bgColor: 'common.white',
      borderColor: colorScheme[500] || 'blue.500',
      _hover: {
        borderColor: colorScheme[400] || 'blue.hover',
        bgColor: 'common.white',
        _disabled: {
          color: 'gray.600',
          opacity: 0.75,
          backgroundColor: 'gray.main',
          borderColor: 'gray.600',
          outline: 'none',
        },
      },
      _active: {
        color: colorScheme[400] || 'blue.hover',
        borderColor: colorScheme[400] || 'blue.hover',
        bgColor: 'common.white',
      },
    }),
  },
  defaultProps: {
    size: 'md',
    variant: 'primary',
  },
};
