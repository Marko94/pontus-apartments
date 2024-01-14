import { Box } from '@mui/material';
import * as React from 'react';

export default function SectionWrapper(props) {
  
  return (
    <Box 
      py={props.py} 
      sx={{
        backgroundColor: props.backgroundColor || undefined,
        backgroundImage: `url(${props.backgroundImage})` || undefined,
        backgroundRepeat: "no-repeat",
        backgroundPosition: props.backgroundPosition || undefined,
        backgroundSize: "auto",
        justifyContent: 'center'
      }}
    >
      {props.children}
    </Box>
  );
};