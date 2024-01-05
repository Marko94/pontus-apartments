import { Grid } from '@mui/material';
import * as React from 'react';
import '../../style/components/sections/SectionWithImage.css';
import TextWithTitle from '../TextWithTitle';
import SectionWrapper from './SectionWrapper';

export default function SectionWithImage({src, alt, title, subtitle, details, direction}) {

  return (
    <SectionWrapper>
      <Grid container direction={direction} className='Section-with-image-container'>
        <Grid item xs={12} md={6} display='flex' alignItems='center'>
          <img src={src} alt={alt} display='block' height='auto' width='100%'/>
        </Grid>
        <Grid item xs={12} md={6} className='Text-wrapper'>
          <TextWithTitle
            title={title}
            titleVariant='h5'
            subtitle={subtitle}
            subtitleVariant='h6'
            details={details}
          />
        </Grid>
      </Grid>
    </SectionWrapper>
  );
};