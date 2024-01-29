import { Box, Button, Grid } from '@mui/material';
import * as React from 'react';
import '../../style/components/sections/SectionWithImage.css';
import TextWithTitle from '../TextWithTitle';
import SectionWrapper from './SectionWrapper';

export default function SectionWithImage({ src, alt, title, titleVariant = 'h4', subtitle, decoration, details, buttonText, direction, maxWidth, backgroundColor, backgroundImage, backgroundPosition, spacing, py=1, href }) {

  return (
    <SectionWrapper py={py} backgroundColor={backgroundColor} backgroundImage={backgroundImage} backgroundPosition={backgroundPosition}>
      <Box className='Section-with-image-container Section'>
        <Grid container maxWidth={maxWidth} direction={direction} sx={{py: spacing}}>
          <Grid item xs={12} md={6} display='flex' alignItems='center' className='Image-container' borderRadius={{xs: 0, md: 4}}>
            <img src={src} alt={alt} display='block' height='auto' width='100%' />
          </Grid>
          <Grid item xs={12} md={6} className='Text-wrapper'  p={{xs: 3, md: 6}}>
            <TextWithTitle
              title={title}
              titleVariant={titleVariant}
              subtitle={subtitle}
              subtitleVariant='h6'
              decoration={decoration}
              details={details}
            />
            {href && 
              <Box p={2}>
                <Button variant='contained' color="secondary" href={href} disableElevation>{buttonText || 'Book now'}</Button>
              </Box>
            }
          </Grid>
        </Grid>
      </Box>
    </SectionWrapper>
  );
};