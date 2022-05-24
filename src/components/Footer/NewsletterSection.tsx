import React from 'react';

import { VStack, Heading, Text } from '@chakra-ui/react';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';

import { TextField } from '@components/Form';
import { FullWidthButton } from '@styles/theme/components/Buttons';

export const NewsletterSection = () => {
  const { t } = useTranslation();

  return (
    <Formik initialValues={{ email: '' }} onSubmit={() => {}}>
      <VStack color="common.white" align="start" w="328px">
        <Heading as="h5" size="md">
          {t('footer.newsletter.title')}
        </Heading>
        <TextField
          label={t('footer.newsletter.label')}
          placeholder={t('footer.newsletter.placeholder')}
          name={'email'}
          styles={{ bg: 'common.white', color: 'secondary.main' }}
        />
        <FullWidthButton variant="outline" borderColor="common.white">
          {t('footer.newsletter.action')}
        </FullWidthButton>
        <Text fontSize="xs">{t('footer.newsletter.disclaimer')}</Text>
      </VStack>
    </Formik>
  );
};
