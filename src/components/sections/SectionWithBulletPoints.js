import { Box, Typography } from '@mui/material';
import * as React from 'react';
import '../../style/components/sections/SectionWithBulletPoints.css';
import BulletList from '../BulletList';
import SectionWrapper from './SectionWrapper';
export default function SectionWithBulletPoints({bulletList1, bulletList2, title, subtitle, decoration, details, backgroundColor, maxWidth, py, pt, keyWord}) {

  return (
    <SectionWrapper py={py} backgroundColor={backgroundColor}>
      <Box className='Section-with-bullet-points-container Section' pt={pt}>
        <Box className='Section-with-bullet-points-content' alignItems={bulletList1 && bulletList2 ? undefined : 'center'} maxWidth={maxWidth}>
          {title && 
            <Typography variant='h5' color='primary'>{title}</Typography>
          }
          <Box display='flex' flexDirection={{xs: 'column', md: 'row'}} mt={title ? 2 : 0}>
            {bulletList1 && <BulletList bulletTextArray={bulletList1} keyWord={keyWord + '_left'} spacing={1} marginRight={{xs: 0, md: 3}}/>}
            {bulletList2 && <BulletList bulletTextArray={bulletList2} keyWord={keyWord + '_right'} spacing={1}/>}
          </Box>
        </Box>
      </Box>
    </SectionWrapper>
  );
};