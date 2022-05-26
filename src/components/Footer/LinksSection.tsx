import React from 'react';

import { Grid } from '@chakra-ui/react';

import { LinksColumn } from './LinksColumn';

export const LinksSection = () => (
  <Grid
    templateColumns={{ base: 'repeat(2, 1fr)', sm: 'repeat(4, 1fr)' }}
    gap={6}
    w="100%"
    my={6}
    whiteSpace="nowrap"
  >
    <LinksColumn
      sectionKey="restoredFurniture"
      links={['entries', 'rates', 'categories', 'sale']}
    />
    <LinksColumn sectionKey="socialNetworks" links={['instagram', 'tikTok', 'msn']} />
    <LinksColumn sectionKey="blackMarket" links={['ourHistory', 'staff', 'workWithUs']} />
    <LinksColumn sectionKey="support" links={['chat', 'address']} />
  </Grid>
);
