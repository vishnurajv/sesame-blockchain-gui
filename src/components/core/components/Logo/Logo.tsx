import React from 'react';
import styled from 'styled-components';
import { Box, BoxProps } from '@material-ui/core';
import { Sesame } from '@sesame/icons';

const StyledSesame = styled(Sesame)`
  max-width: 85%;
  width: auto;
  height: auto;
`;

export default function Logo(props: BoxProps) {
  return (
    <Box {...props}>
      <StyledSesame />
    </Box>
  );
}
