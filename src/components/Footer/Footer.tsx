import React from 'react';

import { Flex, Heading, Text, VStack } from '@chakra-ui/react';
import { Formik } from 'formik';

import { TextField } from '@components/Form';
import { MaxWidthWrapper } from '@components/Misc';
import { FullWidthButton } from '@styles/theme/components/Buttons';

import { FooterContainer } from './FooterContainer';

export const Footer = () => (
  <FooterContainer className="Footer" justifyContent="center">
    <MaxWidthWrapper>
      <Flex grow={1} justify="space-evenly">
        <VStack color="common.white" m={5} align="start">
          <Heading as="h6" size="xs">
            Restored furniture
          </Heading>
          <Text>Entries</Text>
          <Text>Rates</Text>
          <Text>Categories</Text>
          <Text>Sale</Text>
        </VStack>
        <VStack color="common.white" m={5} align="start">
          <Heading as="h6" size="xs">
            Stay connected
          </Heading>
          <Text>Instagram</Text>
          <Text>Tik Tok</Text>
          <Text>MSN</Text>
        </VStack>
        <VStack color="common.white" m={5} align="start">
          <Heading as="h6" size="xs">
            Black Market
          </Heading>
          <Text>Our history</Text>
          <Text>Staff</Text>
          <Text>Work with us</Text>
        </VStack>
        <VStack color="common.white" m={5} align="start">
          <Heading as="h6" size="xs">
            Support
          </Heading>
          <Text>Chat</Text>
          <Text>Address</Text>
        </VStack>
      </Flex>
      <Formik initialValues={{ email: '' }} onSubmit={() => {}}>
        <VStack color="common.white" m={5} align="start" w="328px">
          <Heading as="h5" size="md">
            Subscribe to our weekly newsletter!
          </Heading>
          <TextField
            label="Email"
            placeholder="Type your email"
            name={'email'}
            styles={{ bg: 'common.white', color: 'secondary.main' }}
          />
          <FullWidthButton variant="outline" borderColor="common.white">
            Subscribe
          </FullWidthButton>
          <Text fontSize="xs">{`By subscribing you agree to receive weekly emails
           with our latest news and updates.`}</Text>
        </VStack>
      </Formik>
    </MaxWidthWrapper>
  </FooterContainer>
);
