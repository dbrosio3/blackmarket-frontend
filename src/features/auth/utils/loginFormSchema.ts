import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import i18n from '@/lib/i18n';
import { translationWithPrefix } from '@/utils/translationWithPrefix';

enum Errors {
  REQUIRED = 'fieldRequired',
  INVALID = 'fieldInvalid',
  TOO_SHORT = 'fieldTooShort',
  TOO_LONG = 'fieldTooLong',
}
enum Fields {
  USER_ID = 'userId',
  PASSWORD = 'password',
}

/* localized error messages */
const tp = translationWithPrefix('error.validations');

const getLocalizedMessage = (key: Errors, field: Fields, value?: object) =>
  String(tp(key, { field: i18n.t(`auth.login.${field}.label`), ...value }));

const getRequiredConfig = (field: Fields) => ({
  required_error: getLocalizedMessage(Errors.REQUIRED, field),
});

/* schema */
export const loginFormSchema = z.object({
  [Fields.USER_ID]: z.string(getRequiredConfig(Fields.USER_ID)),
  [Fields.PASSWORD]: z.string(getRequiredConfig(Fields.PASSWORD)),
});

/* schema adapted to formik */
export const loginFormikSchema = toFormikValidationSchema(loginFormSchema);
