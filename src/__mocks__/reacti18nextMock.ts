import { TFunction } from 'i18next';

const reactI18Next: { t: TFunction } = jest.createMockFromModule('react-i18next');

reactI18Next.t = (key, options) => ({
  key,
  options,
});

module.exports = reactI18Next;
