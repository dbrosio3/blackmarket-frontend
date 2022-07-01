import React from 'react';

import { Textarea } from '@chakra-ui/react';
import useSWR from 'swr';

import { getProducts } from '../api/products';
import { Product } from '../types.ts';

export const ProductsHeroSection = () => {
  const { data } = useSWR('/products', getProducts, {
    suspense: true,
  });

  const products: Product[] | undefined = data?.data.products;

  return <Textarea h="100%" value={JSON.stringify(products, null, 2)} readOnly bg="common.white" />;
};
