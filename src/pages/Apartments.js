import { Box } from '@mui/material';
import * as React from 'react';
import '../style/pages/Apartments.css';
import SectionWithCarousel from '../components/sections/SectionWithCarousel';
import { photosGalery } from "../constants/photos.js";

export default function ApartmentsPage() {
  return (
    <Box className='Apartments-page-container'>
      <Box maxWidth='xl' sx={{ p: {xs:0, md: 8} }}>
        <SectionWithCarousel
          photos={photosGalery}
          alt="apartment-1"
          title='Apartment 1'
          details='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          direction='row'
          padding={0}
        />
        <SectionWithCarousel
          photos={photosGalery}
          alt="apartment-2"
          title='Apartment 2'
          details='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          direction='row-reverse'
          padding={0}
        />
        <SectionWithCarousel
          photos={photosGalery}
          alt="apartment-3"
          title='Apartment 3'
          details='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          direction='row'
          padding={0}
        />
        <SectionWithCarousel
          photos={photosGalery}
          alt="apartment-4"
          title='Apartment 4'
          details='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          direction='row-reverse'
          padding={0}
        />
      </Box>
    </Box>
  );
}