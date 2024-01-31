import { Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import * as React from 'react';
import '../style/components/IconBox.css';

export default function IconBox({width, height, icon, title, titleVariant, description, descriptionVariant, horizontal}) {
  return (
    <Stack direction={horizontal ? 'row' : 'column'} width={width} height={height} gap={0.5} className='Icon-box'>
      <Box className='Icon-container'>
        {icon}
        <Box className='Icon-underline'/>
      </Box>
      {title && <Typography variant={titleVariant || 'h6'}>{title}</Typography>}
      {description && <Typography variant={descriptionVariant}>{description}</Typography>}
    </Stack>
  );
}