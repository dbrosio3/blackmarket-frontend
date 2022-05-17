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

enum Errors {
  REQUIRED = 'fieldRequired',
  INVALID = 'fieldInvalid',
  TOO_SHORT = 'fieldTooShort',
  TOO_LONG = 'fieldTooLong',
}
enum Fields {
  USER_ID = 'userId',
  FULL_NAME = 'fullName',
  USER_NAME = 'userName',
  PASSWORD = 'password',
}

/* localized error messages */
const tp = translationWithPrefix('error.validations');

const getLocalizedMessage = (key: Errors, field: Fields, value?: object) =>
  String(tp(key, { field: t(`auth.register.${field}.label`), ...value }));

const getErrorConfig = (key: Errors, field: Fields, value?: object) => ({
  message: getLocalizedMessage(key, field, value),
});

const getRequiredAndInvalidConfig = (field: Fields) => ({
  required_error: getLocalizedMessage(Errors.REQUIRED, field),
  invalid_type_error: getLocalizedMessage(Errors.INVALID, field),
});

/* schema */
export const registerFormSchema = z.object({
  [Fields.USER_ID]: z
    .string(getRequiredAndInvalidConfig(Fields.USER_ID))
    .email(getErrorConfig(Errors.INVALID, Fields.USER_ID)),
  [Fields.FULL_NAME]: z
    .string(getRequiredAndInvalidConfig(Fields.FULL_NAME))
    .min(
      FULL_NAME_MIN_LENGTH,
      getErrorConfig(Errors.TOO_SHORT, Fields.FULL_NAME, { min: FULL_NAME_MIN_LENGTH })
    )
    .max(
      FULL_NAME_MAX_LENGTH,
      getErrorConfig(Errors.TOO_SHORT, Fields.FULL_NAME, { max: FULL_NAME_MAX_LENGTH })
    ),
  [Fields.USER_NAME]: z
    .string(getRequiredAndInvalidConfig(Fields.USER_NAME))
    .min(
      USERNAME_MIN_LENGTH,
      getErrorConfig(Errors.TOO_SHORT, Fields.USER_NAME, { min: USERNAME_MIN_LENGTH })
    )
    .max(
      USERNAME_MAX_LENGTH,
      getErrorConfig(Errors.TOO_SHORT, Fields.USER_NAME, { max: USERNAME_MAX_LENGTH })
    ),
  [Fields.PASSWORD]: z
    .string(getRequiredAndInvalidConfig(Fields.PASSWORD))
    .regex(PASSWORD_REGEX, { message: String(tp('passwordInvalid')) }),
});

/* schema adapted to formik */
export const registerFormikSchema = toFormikValidationSchema(registerFormSchema);
