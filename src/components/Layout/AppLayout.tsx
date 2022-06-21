import React from 'react';

import { JustChildrenProp } from '@/types';
import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { MaxWidthWrapper } from '@components/Misc';

import { MainContainer } from './MainContainer';

export const AppLayout: React.FC<JustChildrenProp> = ({ children }) => (
  <MainContainer>
    <Header />
    <MaxWidthWrapper>{children}</MaxWidthWrapper>
    <Footer />
  </MainContainer>
);
