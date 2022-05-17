import React, { ReactNode } from 'react';

import { InputGroup, Input, InputProps, InputRightElement, IconButton } from '@chakra-ui/react';

interface InputFieldProps extends InputProps {
  icon?: ReactNode;
}

export const InputField: React.FC<InputFieldProps> = ({
  name,
  placeholder,
  icon,
  ...restProps
}) => (
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
