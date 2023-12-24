import { Box } from '@mui/material';
import * as React from 'react';

export default function SectionWrapper(props) {

  return (
    <Box>
      {props.children}
    </Box>
  );
};