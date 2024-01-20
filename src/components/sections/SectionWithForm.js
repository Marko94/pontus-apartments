import * as React from 'react';
import SectionWrapper from './SectionWrapper';
import '../../style/components/sections/SectionWithForm.css';
import { Box } from '@mui/material';
import BookingForm from '../BookingForm';

export default function SectionWithForm({spacing, formWidth, backgroundColor, maxWidth, py}) {

  return (
    <SectionWrapper py={py} backgroundColor={backgroundColor}>
      <Box className='Section-with-form-container Section'>
        <Box className='Section-with-form-content' maxWidth={maxWidth}>
          <BookingForm spacing={spacing} width={formWidth}/>
        </Box>
      </Box>
    </SectionWrapper>
  );
};