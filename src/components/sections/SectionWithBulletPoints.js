import { Box } from '@mui/material';
import * as React from 'react';
import '../../style/components/sections/SectionWithBulletPoints.css';
import BulletList from '../BulletList';
import SectionWrapper from './SectionWrapper';
export default function SectionWithBulletPoints({introBulletList1, introBulletList2, subtitle, decoration, details, backgroundColor, maxWidth, py}) {

  return (
    <SectionWrapper py={py} backgroundColor={backgroundColor}>
      <Box className='Section-with-bullet-points-container Section'>
        <Box className='Section-with-bullet-points-content' maxWidth={maxWidth} flexDirection={{xs: 'column', md: 'row'}}>
          <BulletList bulletTextArray={introBulletList1} spacing={1} marginRight={{xs: 0, md: 3}}/>
          <BulletList bulletTextArray={introBulletList2} spacing={1}/>
        </Box>
      </Box>
    </SectionWrapper>
  );
};