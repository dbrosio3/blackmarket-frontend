import React from 'react';

import { GridItem, Heading, Text, VStack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export const LinksColumn: React.FC<{ sectionKey: string; links: Array<string> }> = ({
  sectionKey,
  links,
}) => {
  const { t } = useTranslation();

  return (
    <GridItem w="100%">
      <VStack color="white" align="start" flexGrow={1}>
        <Heading as="h6" size="xs">
          {t(`footer.${sectionKey}.title`)}
        </Heading>
        {links.map(link => (
          <Text key={link}>{t(`footer.${sectionKey}.${link}`)}</Text>
        ))}
      </VStack>
    </GridItem>
  );
};
