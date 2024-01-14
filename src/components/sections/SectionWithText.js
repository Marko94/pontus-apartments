import * as React from 'react';
import SectionWrapper from './SectionWrapper';
import TextWithTitle from '../TextWithTitle';
import '../../style/components/sections/SectionWithText.css';
import { Box } from '@mui/material';

export default function SectionWithText({title, subtitle, details, backgroundColor, maxWidth}) {

  return (
    <SectionWrapper>
      <Box className='Section-with-text-container Section' style={{backgroundColor: backgroundColor}}>
        <Box className='Section-with-text-content' maxWidth={maxWidth}>
          <TextWithTitle
            title={title}
            subtitle={subtitle}
            details={details} 
            spacing={2}
            max-width='100vw'
          />
        </Box>
      </Box>
    </SectionWrapper>
  );
};