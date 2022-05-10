import React, { ReactNode } from 'react';

import { InputGroup, Input, InputRightElement, IconButton } from '@chakra-ui/react';

type Props = {
  key: string;
  name: string;
  label: string;
  placeholder: string;
  icon?: ReactNode;
};

export const InputField: React.FC<Props> = ({ name, placeholder, icon, ...restProps }) => (
  <InputGroup>
    <Input id={name} placeholder={placeholder} {...restProps} />
    {icon && (
      <InputRightElement>
        <IconButton variant="unstyled" aria-label="Toggle password visibility">
          {icon}
        </IconButton>
      </InputRightElement>
    )}
  </InputGroup>
);
