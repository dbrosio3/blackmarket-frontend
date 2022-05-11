import React, { useState } from 'react';

import { InputGroup, Input, InputProps, InputRightElement, IconButton } from '@chakra-ui/react';

import { VisibilityOff } from '@styles/theme/components/Icons/VisibilityOff';

export const PasswordField: React.FC<InputProps> = props => {
  const [show, setShow] = useState(false);

  const toggleVisibility = () => setShow(!show);

  return (
    <InputGroup>
      <Input {...props} type={show ? 'text' : 'password'} />
      <InputRightElement>
        <IconButton
          variant="unstyled"
          aria-label="Toggle password visibility"
          onClick={toggleVisibility}
        >
          {show ? '<VisibilityOn />' : <VisibilityOff />}
        </IconButton>
      </InputRightElement>
    </InputGroup>
  );
};
