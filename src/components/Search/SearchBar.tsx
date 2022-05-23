import React from 'react';

import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';

export const SearchBar = () => (
  <InputGroup
    bg="white"
    w="calc(100% - 382px)"
    display={{ base: 'none', md: 'block' }}
    borderRadius="lg"
  >
    <Input placeholder="Search for products" h="40px" />
    <InputRightElement>
      <SearchIcon />
    </InputRightElement>
  </InputGroup>
);
