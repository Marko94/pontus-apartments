import { Box } from '@mui/material';
import * as React from 'react';

export default function SectionWrapper(props) {
  
  return (
    <Box className="Section" sx={{backgroundColor: props.backgroundColor || undefined}}>
      {props.children}
    </Box>
  );
};