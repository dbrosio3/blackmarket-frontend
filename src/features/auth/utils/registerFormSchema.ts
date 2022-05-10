import { t } from 'i18next';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { translationWithPrefix } from '@/utils/translationWithPrefix';

import {
  FULL_NAME_MAX_LENGTH,
  FULL_NAME_MIN_LENGTH,
  PASSWORD_REGEX,
  USERNAME_MAX_LENGTH,
  USERNAME_MIN_LENGTH,
} from './constants';

/* schema */
export const registerFormSchema = z.object({
  userId: z.string().email(),
  fullName: z
    .string()
    .min(FULL_NAME_MIN_LENGTH)
    .max(FULL_NAME_MAX_LENGTH),
  userName: z
    .string()
    .min(USERNAME_MIN_LENGTH)
    .max(USERNAME_MAX_LENGTH),
  password: z.string().regex(PASSWORD_REGEX),
});

/* schema adapted to formik */
export const registerFormikSchema = toFormikValidationSchema(registerFormSchema);

/* localized error messages */
const tp = translationWithPrefix('error.validations');

const customErrorMap: z.ZodErrorMap = (issue, ctx) => {
  const field = t(`auth.register.${issue.path}.label`);
  const valueIsUndefined = ctx.data === undefined;
  const valueIsTooShort = issue.code === z.ZodIssueCode.too_small;
  const valueIsTooLong = issue.code === z.ZodIssueCode.too_big;
  const fieldIsPassword =
    issue.code === z.ZodIssueCode.invalid_string && String(issue.path) === 'password';
  if (valueIsUndefined) {
    return { message: String(tp('fieldRequired', { field })) };
  }
  if (valueIsTooShort) {
    return { message: String(tp('fieldTooShort', { field, min: issue.minimum })) };
  }
  if (valueIsTooLong) {
    return { message: String(tp('fieldTooLong', { field, max: issue.maximum })) };
  }
  if (fieldIsPassword) {
    return { message: String(tp('passwordInvalid')) };
  }
  return { message: String(tp('fieldInvalid', { field })) };
};

/* setup */
z.setErrorMap(customErrorMap);
