import React from 'react';

import { Container, chakra, ContainerProps } from '@chakra-ui/react';

const StyledContainer = chakra(Container, {
  baseStyle: {
    bg: 'white',
    width: '22.5rem',
    borderRadius: '8px',
    padding: '3rem 1rem',
  },
});

export const AuthSection: React.FC<ContainerProps> = props => (
  <StyledContainer {...props} centerContent />
);
