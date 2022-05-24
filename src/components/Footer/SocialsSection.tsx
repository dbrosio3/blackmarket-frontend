import React from 'react';

import { Wrap } from '@chakra-ui/react';

import {
  InstagramIcon,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from '@styles/theme/components/Icons/Socials';

export const SocialsSection = () => (
  <Wrap color="common.white">
    <Wrap pl={2}>
      <InstagramIcon h={6} w="auto" />
    </Wrap>
    <Wrap pl={2}>
      <FacebookIcon h={6} w="auto" />
    </Wrap>
    <Wrap pl={2}>
      <TwitterIcon h={6} w="auto" />
    </Wrap>
    <Wrap pl={2}>
      <LinkedinIcon h={6} w="auto" />
    </Wrap>
  </Wrap>
);
