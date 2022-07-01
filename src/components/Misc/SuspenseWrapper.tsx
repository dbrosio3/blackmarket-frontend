import React, { Suspense } from 'react';

import { ErrorBoundary } from 'react-error-boundary';

type SuspenseWrapperProps = {
  LoadingFallback: React.ReactNode;
  ErrorFallback: React.ReactElement;
  children: React.ReactNode;
};

export const SuspenseWrapper: React.FC<SuspenseWrapperProps> = ({
  LoadingFallback,
  ErrorFallback,
  children,
}) => (
  <Suspense fallback={LoadingFallback}>
    <ErrorBoundary fallback={ErrorFallback}>{children}</ErrorBoundary>
  </Suspense>
);
