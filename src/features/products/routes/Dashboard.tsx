import React, { useCallback, useEffect, useState } from 'react';

import { Button, Heading, Stack, Textarea } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { useSession } from '@providers/SessionContext';

import { getProducts } from '../api/products';
import { BackgroundBox } from '../components/BackgroundBox';
import { Product } from '../types.ts';

/**
 * Dashboard not implemented yet. Currently only displays session state for debugging purposes
 */
export const Dashboard = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { t } = useTranslation();
  const { logout } = useSession();

  const getHeroProducts = useCallback(async () => {
    const response = await getProducts({ page: 1 });
    setProducts(response.data.products);
  }, []);

  useEffect(() => {
    console.log('i fire once');
    getHeroProducts();
  }, [getHeroProducts]);

  return (
    <>
      <BackgroundBox />
      <Stack h="1200px" w="100%" py={20} px={10} zIndex={0}>
        <Heading color="white">Dashboard</Heading>
        <Textarea h="100%" value={JSON.stringify(products, null, 2)} readOnly bg="white" />
        <Button onClick={logout}>{t('common.logOut')}</Button>
      </Stack>
    </>
  );
};
