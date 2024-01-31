import { Box, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import React from "react";
import ReactImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import '../../style/components/sections/SectionWithCarousel.css';
import BookNowButton from '../BookNowButton';
import SectionWrapper from './SectionWrapper';
import ApartmentDetails from '../ApartmentDetails';

export default function SectionWithApartmentDetails({
  photos,
  alt,
  name,
  floor,
  doubleBeds,
  singleBeds,
  sofas,
  privateBathroom,
  wifi,
  seaView,
  airCondition,
  fullyEquippedKitchen,
  fridge,
  flatScreenTv,
  washingMachine,
  balcony,
  privateTerrace,
  sharedTerrace,
  disabledAccess,
  towels,
  iron,
  note,
  decoration,
  direction,
  spacing,
  backgroundColor,
  maxWidth,
  href
}) {
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <SectionWrapper>
      <Box className='Section-with-carousel-container Section' style={{backgroundColor: backgroundColor}}>
        <Grid container direction={{xs: 'column-reverse', md: direction || 'row'}} maxWidth={maxWidth} className='Section-with-carousel-content' sx={{py: spacing}}>
          <Grid item xs={12} md={6} display='flex' alignItems='center' borderRadius={{xs: 0, md: 4}} className='Carousel-container'>
            <ReactImageGallery
              items={photos}
              lazyLoad={true}
              infinite={true}
              showThumbnails={false}
              showBullets={true}
              showNav={smUp}
              showPlayButton={false}
            />
          </Grid>
          <Grid item xs={12} md={6} className='Text-wrapper' p={{xs: 3, md: 6}}>
            <ApartmentDetails
              title={name}
              titleVariant='h3'
              subtitleVariant='h6'
              floor={floor}
              doubleBeds={doubleBeds}
              singleBeds={singleBeds}
              sofas={sofas}
              wifi={wifi}
              privateBathroom={privateBathroom}
              seaView={seaView}
              airCondition={airCondition}
              fullyEquippedKitchen={fullyEquippedKitchen}
              fridge={fridge}
              flatScreenTv={flatScreenTv}
              washingMachine={washingMachine}
              balcony={balcony}
              privateTerrace={privateTerrace}
              sharedTerrace={sharedTerrace}
              disabledAccess={disabledAccess}
              towels={towels}
              iron={iron}
              details={note}
              decoration={decoration}
              spacing={1}
            />
            {href && 
              <Box p={2}>
                <BookNowButton href={href}/>
              </Box>
            }
          </Grid>
        </Grid>
      </Box>
    </SectionWrapper>
  );
};