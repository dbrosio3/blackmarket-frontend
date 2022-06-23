import React from 'react';

import { Stack } from '@chakra-ui/react';

import { ListErrorState } from '@components/Lists';
import { SuspenseWrapper } from '@components/Misc';

import { ProductsHeroSection, ProductsHeroSkeleton } from '../components';
import { BackgroundBox } from '../components/BackgroundBox';

/**
 * Dashboard not implemented yet. Currently only displays session state for debugging purposes
 */
export const Dashboard = () => (
  <>
    <BackgroundBox />
    <Stack h="1200px" w="100%" py={20} px={10} zIndex={0}>
      <SuspenseWrapper
        LoadingFallback={<ProductsHeroSkeleton />}
        ErrorFallback={<ListErrorState />}
      >
        <ProductsHeroSection />
      </SuspenseWrapper>
    </Stack>
  </>
);
