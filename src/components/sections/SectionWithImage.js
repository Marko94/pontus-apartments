import { Box, Grid, Typography } from '@mui/material';
import * as React from 'react';
import '../../style/components/SectionWithImage.css';
import SectionWrapper from './SectionWrapper';

export default function SectionWithImage({src, alt, title, subtitle, details, direction}) {

  return (
    <SectionWrapper>
      <Grid container direction={direction}>
        <Grid item xs={12} md={6} display='flex'>
          <img src={src} alt={alt} width='100%'/>
        </Grid>
        <Grid item xs={12} md={6} className='Text-wrapper'>
          <Box className='Text-container'>
            <Typography variant='h5' color='primary'>{title}</Typography>
            <Typography variant='h6' color='primary'>{subtitle}</Typography>
            <Typography variant='p1' color='black'>{details}</Typography>
          </Box>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
};