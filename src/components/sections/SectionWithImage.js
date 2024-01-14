import { Box, Grid } from '@mui/material';
import * as React from 'react';
import '../../style/components/sections/SectionWithImage.css';
import TextWithTitle from '../TextWithTitle';
import SectionWrapper from './SectionWrapper';

export default function SectionWithImage({ src, alt, title, subtitle, details, direction, maxWidth, backgroundColor, spacing }) {

  return (
    <SectionWrapper>
      <Box className='Section-with-image-container Section' style={{ backgroundColor: backgroundColor }}>
        <Grid container maxWidth={maxWidth} direction={direction} sx={{py: spacing}}>
          <Grid item xs={12} md={6} display='flex' alignItems='center'>
            <img src={src} alt={alt} display='block' height='auto' width='100%' />
          </Grid>
          <Grid item xs={12} md={6} className='Text-wrapper'  p={{xs: 3, md: 6}}>
            <TextWithTitle
              title={title}
              titleVariant='h5'
              subtitle={subtitle}
              subtitleVariant='h6'
              details={details}
            />
          </Grid>
        </Grid>
      </Box>
    </SectionWrapper>
  );
};