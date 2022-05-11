import React from 'react';

import { Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import { PATHS } from '@/routes/paths';
import { FullWidthButton } from '@/styles/theme/components/Buttons';

export const LoginFooter = () => {
  const navigate = useNavigate();

  return (
    <>
      <Text>{`Don't have an account?`}</Text>
      <FullWidthButton
        variant="outline"
        mt="1rem"
        onClick={() => navigate(`/${PATHS.AUTH}/${PATHS.REGISTER}`)}
      >
        Sign up
      </FullWidthButton>
    </>
  );
};
