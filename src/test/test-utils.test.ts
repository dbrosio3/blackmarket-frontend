import { TFunction } from 'i18next';

import { translationWithPrefix } from '@/utils/translationWithPrefix';

interface MockedTranslationFn extends TFunction {
  key?: string;
  options?: any;
}

test('translation with prefix works when passing only key param', () => {
  const tp = translationWithPrefix('test.translation');
  const translatedText: MockedTranslationFn = tp('key');
  expect(translatedText.key).toEqual('test.translation.key');
  expect(translatedText.options).toBeUndefined;
});

test('translation with prefix pipes the options param', () => {
  const tp = translationWithPrefix('test.translation');
  const options = { something: 'something' };
  const translatedText: MockedTranslationFn = tp('key', options);
  expect(translatedText.key).toEqual('test.translation.key');
  expect(translatedText.options).toEqual(options);
});
