import * as React from 'react';
import SectionWrapper from './SectionWrapper';
import TextWithTitle from '../TextWithTitle';
import '../../style/components/sections/SectionWithText.css';
import { Box } from '@mui/material';
import BookNowButton from '../BookNowButton';

export default function SectionWithText({title, titleVariant, subtitle, subtitleVariant, decoration, details, showBookNowButton, backgroundColor, maxWidth, py}) {

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
          {showBookNowButton &&
            <Box mt={4}>
              <BookNowButton style={{ width: 160, height: 50 }}/>
            </Box>
          }
        </Box>
      </Box>
    </SectionWrapper>
  );
};