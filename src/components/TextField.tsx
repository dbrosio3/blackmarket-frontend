import React, { ReactNode } from 'react';

import { FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react';
import { Field, useField } from 'formik';

import { CustomInput } from './Inputs/CustomInput';

type Props = {
  key: string;
  name: string;
  label: string;
  placeholder: string;
  icon?: ReactNode;
};

export const TextField: React.FC<Props> = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <FormControl isInvalid={Boolean(!meta.error && meta.touched)}>
      <FormLabel mb={0.75}>{label}</FormLabel>
      <Field as={CustomInput} {...field} {...props} />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};
