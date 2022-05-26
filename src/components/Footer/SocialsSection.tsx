import React from 'react';

import { Grid, GridItem } from '@chakra-ui/react';

import {
  InstagramIcon,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from '@styles/theme/components/Icons/Socials';

export const SocialsSection = () => (
  <Grid color="common.white" templateColumns={'24px 24px 24px 24px'} justifyContent="end" gap={4}>
    <GridItem>
      <InstagramIcon h={6} w="auto" />
    </GridItem>
    <GridItem>
      <FacebookIcon h={6} w="auto" />
    </GridItem>
    <GridItem>
      <TwitterIcon h={6} w="auto" />
    </GridItem>
    <GridItem>
      <LinkedinIcon h={6} w="auto" />
    </GridItem>
  </Grid>
);
