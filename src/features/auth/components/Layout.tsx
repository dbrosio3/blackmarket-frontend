import React from 'react';

import { Box } from '@chakra-ui/react';

import chairsBg from '@/assets/chairs-bg.png';
import { JustChildrenProp } from '@/types';

type Props = JustChildrenProp;

export const Layout = (props: Props) => {
  return (
    <Box
      w="100vw"
      h="100vh"
      bg="secondary.900"
      bgImg={chairsBg}
      backgroundSize="cover"
      overflow="hidden"
    />
  );
};
