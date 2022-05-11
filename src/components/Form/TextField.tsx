import React, { ReactNode } from 'react';

import { FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react';
import { Field, useField } from 'formik';

import { InputField } from './InputField';

type TextFieldProps = {
  name: string;
  label: string;
  placeholder: string;
  icon?: ReactNode;
};

export const TextField: React.FC<TextFieldProps> = ({ label, ...props }) => {
  console.table(props);

  const [field, meta] = useField(props);

  // simple condition to add spacing when the help text is too long
  const errorMessageHeight = meta.error && meta.error.length > 43 ? 8 : 2;

  return (
    <FormControl isInvalid={Boolean(meta.error && meta.touched)}>
      <FormLabel>{label}</FormLabel>
      <Field as={InputField} {...field} {...props} />
      <FormErrorMessage h={errorMessageHeight}>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};
