import * as Yup from 'yup';

Yup.setLocale({
  mixed: {
    default: { key: 'fieldInvalid' },
    required: { key: 'fieldRequired' },
  },
  string: {
    min: ({ min }) => ({ key: 'fieldTooShort', values: { min } }),
    max: ({ max }) => ({ key: 'fieldTooLong', values: { max } }),
    matches: () => ({ key: 'fieldInvalid' }),
    email: () => ({ key: 'fieldInvalid' }),
  },
});

// TODO: extraxt to constants.js
const FULL_NAME_MIN_LENGTH = 2;
const FULL_NAME_MAX_LENGTH = 50;

const USERNAME_MIN_LENGTH = 2;
const USERNAME_MAX_LENGTH = 50;

const PASSWORD_REGEX = new RegExp('^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$');

export const registerFormSchema = Yup.object().shape({
  userId: Yup.string()
    .email()
    .required(),
  fullName: Yup.string()
    .min(FULL_NAME_MIN_LENGTH)
    .max(FULL_NAME_MAX_LENGTH)
    .required(),
  userName: Yup.string()
    .min(USERNAME_MIN_LENGTH)
    .max(USERNAME_MAX_LENGTH)
    .required(),
  password: Yup.string()
    .matches(PASSWORD_REGEX)
    .required(),
});
