import { t, TFunction, TFunctionKeys, TOptions } from 'i18next';

/**
 * @param prefix string
 * @returns `t` translation fn with the prefix already provided
 */
export const translationWithPrefix = (prefix: string) => (
  suffix: TFunctionKeys,
  options?: TOptions
): TFunction => t(`${prefix}.${suffix}`, options);
