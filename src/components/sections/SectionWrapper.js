import { Box } from '@mui/material';
import '../../style/components/SectionWithImage.css'
import * as React from 'react';

export default function SectionWrapper(props) {

  return (
    <Box>
      {props.children}
    </Box>
  );
};