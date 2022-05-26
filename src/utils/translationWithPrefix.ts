import { TFunction, TFunctionKeys, TOptions } from 'i18next';

import i18n from '@/lib/i18n';

/**
 * @param prefix string
 * @returns `t` translation fn with the prefix already provided
 */
export const translationWithPrefix = (prefix: string) => (
  suffix: TFunctionKeys,
  options?: TOptions
): TFunction => i18n.t(`${prefix}.${suffix}`, options);
