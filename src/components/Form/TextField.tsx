import React, { ReactNode } from 'react';

import { FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react';
import { Field, useField } from 'formik';

import { useHelpTextSpacing } from '@/hooks/useHelpTextSpacing';

import { InputField } from './InputField';

type TextFieldProps = {
  name: string;
  label: string;
  placeholder: string;
  icon?: ReactNode;
  autoComplete?: string;
  styles?: object;
};

export const TextField: React.FC<TextFieldProps> = ({ label, styles, ...props }) => {
  const [field, meta] = useField(props);

  const { helpTextSpacing } = useHelpTextSpacing({ message: meta.error });

  return (
    <FormControl isInvalid={Boolean(meta.error && meta.touched)}>
      <FormLabel>{label}</FormLabel>
      <Field as={InputField} {...field} {...props} {...styles} />
      <FormErrorMessage h={helpTextSpacing}>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};
