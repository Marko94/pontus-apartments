import * as React from 'react';
import SectionWrapper from './SectionWrapper';
import WifiIcon from '@mui/icons-material/Wifi';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import BalconyIcon from '@mui/icons-material/Balcony';
import MicrowaveIcon from '@mui/icons-material/Microwave';
import PoolOutlinedIcon from '@mui/icons-material/PoolOutlined';
import PanoramaOutlinedIcon from '@mui/icons-material/PanoramaOutlined';
import '../../style/components/sections/SectionWithIcons.css';
import { Box } from '@mui/material';
import IconBox from '../IconBox';

export default function SectionWithIcons({title, titleVariant, subtitle, decoration, details, backgroundColor, maxWidth, py}) {

  return (
    <SectionWrapper py={py} backgroundColor={backgroundColor}>
      <Box className='Section-with-icons-container Section'>
        <Box className='Section-with-icons-content' maxWidth={maxWidth}>
          <IconBox icon={<WifiIcon/>} title='Free Wifi' description='Free Wifi is available in each room and around the premises'/>
          <IconBox icon={<BeachAccessIcon/>} title='Beach Access' description='Beach chairs and umbrellas are available at no additional cost'/>
          <IconBox icon={<BalconyIcon/>} title='Balconies with sea view' description='All apartments have balconies with sea view'/>
          <IconBox icon={<MicrowaveIcon/>} title='Eqipped Kitchens' description='All apartments have kitchens with the necessary electrical appliances, stove, refrigerators and kitchen equipment'/>
          <IconBox icon={<PoolOutlinedIcon/>} title='Private Pool Area' description='Use of the freshwater pool areas with beach chairs and umbrellas is available at no additional cost'/>
        </Box>
      </Box>
    </SectionWrapper>
  );
};