import * as React from 'react';
import SectionWrapper from './SectionWrapper';
import TextWithTitle from '../TextWithTitle';
import '../../style/components/sections/SectionWithText.css';

export default function SectionWithText({title, subtitle, details}) {

  return (
    <SectionWrapper>
      <div className='Section-with-text-container'>
        <TextWithTitle
          title={title}
          subtitle={subtitle}
          details={details} 
          spacing={2}
          width={{xs: '100%', lg: 1024}}
          max-width='100vw'
        />
      </div>
    </SectionWrapper>
  );
};