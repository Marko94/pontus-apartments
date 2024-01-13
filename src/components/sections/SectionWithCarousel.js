import { Box, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import React from "react";
import ReactImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import '../../style/components/sections/SectionWithCarousel.css';
import TextWithTitle from '../TextWithTitle';
import SectionWrapper from './SectionWrapper';

export default function SectionWithCarousel({photos, alt, title, subtitle, details, direction, spacing, backgroundColor, maxWidth}) {
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <SectionWrapper>
      <Box className='Section-with-carousel-container' style={{backgroundColor: backgroundColor}}>
        <Grid container direction={{xs: 'column-reverse', md: direction}} maxWidth={maxWidth} className='Section-with-carousel-content' sx={{py: spacing}}>
          <Grid item xs={12} md={6} display='flex' alignItems='center' className='Carousel-container'>
            <ReactImageGallery
              items={photos}
              lazyLoad={true}
              infinite={true}
              showThumbnails={false}
              showBullets={true}
              showNav={smUp}
              showPlayButton={false}
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
      </Box>
    </SectionWrapper>
  );
};