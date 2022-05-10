import * as Yup from 'yup';

import { translationWithPrefix } from '@/utils/translationWithPrefix';

const tp = translationWithPrefix('error.validations');

export const registerFormSchema = Yup.object().shape({
  userId: Yup.string()
    .email(tp('invalidEmail'))
    .required(tp('required', { field: 'Email' })),
  fullName: Yup.string()
    .min(2, tp('Too Short!'))
    .max(50, tp('Too Long!'))
    .required(tp('required', { field: 'Full name' })),
  userName: Yup.string()
    .min(2, tp('Too Short!'))
    .max(50, tp('Too Long!'))
    .required(tp('required', { field: 'User Name' })),
  password: Yup.string()
    .min(8, tp('Too Short!'))
    .max(50, tp('Too Long!'))
    .required(tp('required', { field: 'Password' })),
});
