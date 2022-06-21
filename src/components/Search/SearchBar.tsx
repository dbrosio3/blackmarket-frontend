import React from 'react';

import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export const SearchBar = () => {
  const { t } = useTranslation();

  return (
    <InputGroup
      bg="common.white"
      w="calc(100% - 382px)"
      display={{ base: 'none', md: 'block' }}
      borderRadius="lg"
    >
      <Input placeholder={t('menu.searchBar.placeholder')} h="40px" />
      <InputRightElement>
        <SearchIcon />
      </InputRightElement>
    </InputGroup>
  );
};
