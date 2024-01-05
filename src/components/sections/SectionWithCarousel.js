import { Grid } from '@mui/material';
import React from "react";
import Carousel from 'react-images';
import '../../style/components/sections/SectionWithCarousel.css';
import TextWithTitle from '../TextWithTitle';
import SectionWrapper from './SectionWrapper';

export default function SectionWithCarousel({photos, alt, title, subtitle, details, direction}) {

  return (
    <SectionWrapper>
      <Grid container direction={{xs: 'column-reverse', md: direction}} className='Section-with-carousel-container'>
        <Grid item xs={12} md={6} display='flex' alignItems='center' className='Carousel-container'>
          <Carousel
            views={photos.map(photo => ({
              ...photo,
              srcset: photo.srcSet,
              caption: photo.title,
            }))}
            hideControlsWhenIdle={false}
            alt={alt}
            components={{Footer: undefined}}
          />
        </Grid>
        <Grid item xs={12} md={6} className='Text-wrapper' p={{xs: 3, md: 6}}>
          <TextWithTitle
            title={title}
            titleVariant='h3'
            subtitle={subtitle}
            subtitleVariant='h6'
            details={details}
            spacing={1}
          />
        </Grid>
      </Grid>
    </SectionWrapper>
  );
};