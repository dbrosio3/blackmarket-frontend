import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import i18n from '@/lib/i18n';
import { translationWithPrefix } from '@/utils/translationWithPrefix';

import { Error, Field } from '../types';

/* localized error messages */
const tp = translationWithPrefix('error.validations');

const getLocalizedMessage = (key: Error, field: Field, value?: object) =>
  String(tp(key, { field: i18n.t(`auth.login.${field}.label`), ...value }));

const getRequiredConfig = (field: Field) => ({
  required_error: getLocalizedMessage(Error.REQUIRED, field),
});

/* schema */
export const loginFormSchema = z.object({
  [Field.USER_ID]: z.string(getRequiredConfig(Field.USER_ID)),
  [Field.PASSWORD]: z.string(getRequiredConfig(Field.PASSWORD)),
});

/* schema adapted to formik */
export const loginFormikSchema = toFormikValidationSchema(loginFormSchema);
