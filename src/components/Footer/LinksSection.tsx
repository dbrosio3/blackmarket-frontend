import React from 'react';

import { Flex, VStack, Heading, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export const LinksSection = () => {
  const { t } = useTranslation();
  return (
    <Flex width="100%" justify="space-between" pr={20}>
      <VStack color="common.white" align="start">
        <Heading as="h6" size="xs">
          {t('footer.restoredFurniture.title')}
        </Heading>
        <Text>{t('footer.restoredFurniture.entries')}</Text>
        <Text>{t('footer.restoredFurniture.rates')}</Text>
        <Text>{t('footer.restoredFurniture.categories')}</Text>
        <Text>{t('footer.restoredFurniture.sale')}</Text>
      </VStack>
      <VStack color="common.white" align="start">
        <Heading as="h6" size="xs">
          {t('footer.socialNetworks.title')}
        </Heading>
        <Text>{t('footer.socialNetworks.instagram')}</Text>
        <Text>{t('footer.socialNetworks.tikTok')}</Text>
        <Text>{t('footer.socialNetworks.msn')}</Text>
      </VStack>
      <VStack color="common.white" align="start">
        <Heading as="h6" size="xs">
          {t('footer.blackMarket.title')}
        </Heading>
        <Text>{t('footer.blackMarket.ourHistory')}</Text>
        <Text>{t('footer.blackMarket.staff')}</Text>
        <Text>{t('footer.blackMarket.workWithUs')}</Text>
      </VStack>
      <VStack color="common.white" align="start">
        <Heading as="h6" size="xs">
          {t('footer.support.title')}
        </Heading>
        <Text>{t('footer.support.chat')}</Text>
        <Text>{t('footer.support.address')}</Text>
      </VStack>
    </Flex>
  );
};
