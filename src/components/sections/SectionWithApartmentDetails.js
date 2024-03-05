import { Box, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useLayoutEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import React from "react";
import ReactImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import '../../style/components/sections/SectionWithCarousel.css';
import BookNowButton from '../BookNowButton';
import SectionWrapper from './SectionWrapper';
import ApartmentDetails from '../ApartmentDetails';

export default function SectionWithApartmentDetails({
  alt,
  decoration,
  apartment,
  direction,
  spacing,
  backgroundColor,
  maxWidth,
  href
}) {
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('sm'));

  const [searchParams,] = useSearchParams();
  const [pageText, setPageText] = useState(() => 
  searchParams && searchParams.get('lang') === 'MNE' ? 
    {
      floor: apartment.floorMNE,
      note: apartment.notesMNE
    } : {
      floor: apartment.floor,
      note: apartment.notes
    }
  );

  useLayoutEffect(() => {
    setPageText(searchParams && searchParams.get('lang') === 'MNE' ? 
    {
      floor: apartment.floorMNE,
      note: apartment.notesMNE
    } : {
      floor: apartment.floor,
      note: apartment.notes
    });
  }, [searchParams, apartment.floorMNE, apartment.floor, apartment.notesMNE, apartment.notes]);
  return (
    <SectionWrapper>
      <Box className='Section-with-carousel-container Section' style={{backgroundColor: backgroundColor}}>
        <Grid container direction={{xs: 'column-reverse', md: direction || 'row'}} maxWidth={maxWidth} className='Section-with-carousel-content' sx={{py: spacing}}>
          <Grid item xs={12} md={6} display='flex' alignItems='center' borderRadius={{xs: 0, md: 4}} className='Carousel-container'>
            <ReactImageGallery
              items={apartment.photos}
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
              title={apartment.name}
              titleVariant='h3'
              subtitleVariant='h6'
              floor={pageText.floor}
              doubleBeds={apartment.doubleBeds}
              singleBeds={apartment.singleBeds}
              sofas={apartment.sofas}
              wifi={apartment.wifi}
              privateBathroom={apartment.privateBathroom}
              seaView={apartment.seaView}
              airCondition={apartment.airCondition}
              fullyEquippedKitchen={apartment.fullyEquippedKitchen}
              fridge={apartment.fridge}
              flatScreenTv={apartment.flatScreenTv}
              washingMachine={apartment.washingMachine}
              balcony={apartment.balcony}
              privateTerrace={apartment.privateTerrace}
              sharedTerrace={apartment.sharedTerrace}
              disabledAccess={apartment.disabledAccess}
              towels={apartment.towels}
              iron={apartment.iron}
              details={pageText.note}
              decoration={apartment.decoration}
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