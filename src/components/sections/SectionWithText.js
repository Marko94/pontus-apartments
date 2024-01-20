import * as React from 'react';
import SectionWrapper from './SectionWrapper';
import TextWithTitle from '../TextWithTitle';
import '../../style/components/sections/SectionWithText.css';
import { Box } from '@mui/material';

export default function SectionWithText({title, titleVariant, subtitle, subtitleVariant, decoration, details, backgroundColor, maxWidth, py}) {

  return (
    <SectionWrapper py={py} backgroundColor={backgroundColor}>
      <Box className='Section-with-text-container Section'>
        <Box className='Section-with-text-content' maxWidth={maxWidth}>
          <TextWithTitle
            title={title}
            titleVariant={titleVariant}
            subtitle={subtitle}
            subtitleVariant={subtitleVariant}
            decoration={decoration}
            details={details} 
            spacing={2}
          />
        </Box>
      </Box>
    </SectionWrapper>
  );
};