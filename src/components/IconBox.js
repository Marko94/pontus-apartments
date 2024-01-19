import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import * as React from 'react';

export default function IconBox({width, height, icon, title, description}) {
  return (
    <Box className='Icon-box' width={width} height={height}>
      <Box className='Icon-container'>
        {icon}
        <Box className='Icon-underline'/>
      </Box>
      <Typography variant='h6'>{title}</Typography>
      <Typography>{description}</Typography>
    </Box>
  );
}