import React from 'react';

import { VStack, Heading, Text, Grid, GridItem } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export const LinksSection = () => {
  const { t } = useTranslation();
  return (
    <Grid
      templateColumns={{ base: 'repeat(2, 1fr)', sm: 'repeat(4, 1fr)' }}
      gap={6}
      w="100%"
      my={6}
    >
      <GridItem w="100%">
        <VStack color="common.white" align="start" flexGrow={1}>
          <Heading as="h6" size="xs">
            {t('footer.restoredFurniture.title')}
          </Heading>
          <Text>{t('footer.restoredFurniture.entries')}</Text>
          <Text>{t('footer.restoredFurniture.rates')}</Text>
          <Text>{t('footer.restoredFurniture.categories')}</Text>
          <Text>{t('footer.restoredFurniture.sale')}</Text>
        </VStack>
      </GridItem>
      <GridItem w="100%">
        <VStack color="common.white" align="start" flexGrow={1}>
          <Heading as="h6" size="xs">
            {t('footer.socialNetworks.title')}
          </Heading>
          <Text>{t('footer.socialNetworks.instagram')}</Text>
          <Text>{t('footer.socialNetworks.msn')}</Text>
        </VStack>
      </GridItem>
      <GridItem w="100%">
        <VStack color="common.white" align="start" flexGrow={1}>
          <Heading as="h6" size="xs">
            {t('footer.blackMarket.title')}
          </Heading>
          <Text>{t('footer.blackMarket.ourHistory')}</Text>
          <Text>{t('footer.blackMarket.staff')}</Text>
          <Text>{t('footer.blackMarket.workWithUs')}</Text>
        </VStack>
      </GridItem>
      <GridItem w="100%">
        <VStack color="common.white" align="start" flexGrow={1}>
          <Heading as="h6" size="xs">
            {t('footer.support.title')}
          </Heading>
          <Text>{t('footer.support.chat')}</Text>
          <Text>{t('footer.support.address')}</Text>
        </VStack>
      </GridItem>
    </Grid>
  );
};
