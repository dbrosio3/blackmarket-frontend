import React from 'react';

import { JustChildrenProp } from '@/types';
import { ViewPort } from '@styles/theme/components/Misc';

export const AppLayout: React.FC<JustChildrenProp> = ({ children }) => {
  return <ViewPort bg="white">{children}</ViewPort>;
};
