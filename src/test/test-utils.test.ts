import { TFunction } from 'i18next';

import { translationWithPrefix } from '@/utils/translationWithPrefix';

interface MockedTranslationFn extends TFunction {
  newKey?: string;
  options?: any;
}

test('translation with prefix works when passing only key param', () => {
  const tp = translationWithPrefix('test.translation');
  const translationTest: MockedTranslationFn = tp('key');
  expect(translationTest.newKey).toEqual('test.translation.key');
  expect(translationTest.options).toBeUndefined;
});

test('translation with prefix pipes the options param', () => {
  const tp = translationWithPrefix('test.translation');
  const options = { something: 'something' };
  const translationTest: MockedTranslationFn = tp('key', options);
  expect(translationTest.newKey).toEqual('test.translation.key');
  expect(translationTest.options).toEqual(options);
});
