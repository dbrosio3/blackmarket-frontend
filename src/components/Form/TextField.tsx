import React, { ReactNode } from 'react';

import { FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react';
import { Field, useField } from 'formik';

import { InputField } from './InputField';

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
    <FormControl isInvalid={Boolean(meta.error && meta.touched)}>
      <FormLabel>{label}</FormLabel>
      <Field as={InputField} {...field} {...props} />
      <FormErrorMessage h={2}>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};
