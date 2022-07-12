import React from 'react';

import { VStack, Heading, Text, useBreakpointValue, Container } from '@chakra-ui/react';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';

import { TextField } from '@components/Form';
import { FullWidthButton } from '@styles/theme/components/Buttons';

export const NewsletterSection = () => {
  const { t } = useTranslation();
  const headerSize = useBreakpointValue({ base: 'sm', md: 'md' });

  return (
    <Formik initialValues={{ email: '' }} onSubmit={() => {}}>
      <Container w="100%" maxW="400px" p={0} my={5}>
        <VStack color="common.white" align="start" w="100%" minW="250px">
          <Heading as="h5" size={headerSize}>
            {t('footer.newsletter.title')}
          </Heading>
          <TextField
            label={t('footer.newsletter.label')}
            placeholder={t('footer.newsletter.placeholder')}
            name="email"
            styles={{ bg: 'common.white', color: 'secondary.main' }}
          />
          <FullWidthButton variant="outline" borderColor="common.white">
            {t('footer.newsletter.action')}
          </FullWidthButton>
          <Text fontSize="xs">{t('footer.newsletter.disclaimer')}</Text>
        </VStack>
      </Container>
    </Formik>
  );
};
