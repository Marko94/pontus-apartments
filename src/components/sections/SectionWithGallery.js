import { Box } from '@mui/material';
import * as React from 'react';
import '../../style/components/sections/SectionWithGallery.css';
import PhotoGallery from '../PhotoGallery';
import SectionWrapper from './SectionWrapper';

export default function SectionWithGallery({ maxWidth, backgroundColor, py=1 }) {

  return (
    <SectionWrapper py={py} backgroundColor={backgroundColor}>
      <Box className='Section-with-gallery-container Section'>
        <PhotoGallery maxWidth={maxWidth}/>
      </Box>
    </SectionWrapper>
  );
};