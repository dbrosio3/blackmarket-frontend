import React from 'react';

import { Input, InputProps } from '@chakra-ui/react';

import { PasswordField } from './PasswordField';

export const InputField: React.FC<InputProps> = props =>
  props.type === 'password' ? <PasswordField {...props} /> : <Input {...props} />;
