import React from 'react';

import { GridItem, Heading, ListItem, UnorderedList } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export const LinksColumn: React.FC<{ sectionKey: string; links: Array<string> }> = ({
  sectionKey,
  links,
}) => {
  const { t } = useTranslation();

  return (
    <GridItem w="100%">
      <UnorderedList color="common.white" flexGrow={1} listStyleType="none">
        <Heading size="xs">{t(`footer.${sectionKey}.title`)}</Heading>
        {links.map((link) => (
          <ListItem key={link}>
            <a href="/">{t(`footer.${sectionKey}.${link}`)}</a>
          </ListItem>
        ))}
      </UnorderedList>
    </GridItem>
  );
};
