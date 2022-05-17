import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import i18n from '@/lib/i18n';
import { translationWithPrefix } from '@/utils/translationWithPrefix';

import { Error, Field } from '../types';

import {
  FULL_NAME_MAX_LENGTH,
  FULL_NAME_MIN_LENGTH,
  PASSWORD_REGEX,
  USERNAME_MAX_LENGTH,
  USERNAME_MIN_LENGTH,
} from './constants';

/* localized error messages */
const tp = translationWithPrefix('error.validations');

const getLocalizedMessage = (key: Error, field: Field, value?: object) =>
  String(tp(key, { field: i18n.t(`auth.register.${field}.label`), ...value }));

const getErrorConfig = (key: Error, field: Field, value?: object) => ({
  message: getLocalizedMessage(key, field, value),
});

const getRequiredAndInvalidConfig = (field: Field) => ({
  required_error: getLocalizedMessage(Error.REQUIRED, field),
  invalid_type_error: getLocalizedMessage(Error.INVALID, field),
});

/* schema */
export const registerFormSchema = z.object({
  [Field.USER_ID]: z
    .string(getRequiredAndInvalidConfig(Field.USER_ID))
    .email(getErrorConfig(Error.INVALID, Field.USER_ID)),
  [Field.FULL_NAME]: z
    .string(getRequiredAndInvalidConfig(Field.FULL_NAME))
    .min(
      FULL_NAME_MIN_LENGTH,
      getErrorConfig(Error.TOO_SHORT, Field.FULL_NAME, { min: FULL_NAME_MIN_LENGTH })
    )
    .max(
      FULL_NAME_MAX_LENGTH,
      getErrorConfig(Error.TOO_SHORT, Field.FULL_NAME, { max: FULL_NAME_MAX_LENGTH })
    ),
  [Field.USER_NAME]: z
    .string(getRequiredAndInvalidConfig(Field.USER_NAME))
    .min(
      USERNAME_MIN_LENGTH,
      getErrorConfig(Error.TOO_SHORT, Field.USER_NAME, { min: USERNAME_MIN_LENGTH })
    )
    .max(
      USERNAME_MAX_LENGTH,
      getErrorConfig(Error.TOO_SHORT, Field.USER_NAME, { max: USERNAME_MAX_LENGTH })
    ),
  [Field.PASSWORD]: z
    .string(getRequiredAndInvalidConfig(Field.PASSWORD))
    .regex(PASSWORD_REGEX, { message: String(tp('passwordInvalid')) }),
});

/* schema adapted to formik */
export const registerFormikSchema = toFormikValidationSchema(registerFormSchema);
