import { Box } from '@mui/material';
import * as React from 'react';
import '../style/pages/Apartments.css';
import SectionWithCarousel from '../components/sections/SectionWithCarousel';
import { apartmentOne, apartmentTwo, apartmentThree, apartmentFour, apartmentFive, apartmentSix, apartmentSeven, apartmentEight, apartmentNine, apartmentTen, apartmentEleven } from "../constants/photos.js";

const spacing = {xs: 1, md: 3};

export default function ApartmentsPage() {
  return (
    <Box className='Apartments-page-container'>
      <Box maxWidth='xl' sx={{ p: {xs:0, md: 8} }}>
        <SectionWithCarousel
          photos={apartmentOne}
          alt="apartment-1"
          title='Apartment 1'
          details='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          direction='row'
          spacing={spacing}
        />
        <SectionWithCarousel
          photos={apartmentTwo}
          alt="apartment-2"
          title='Apartment 2'
          details='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          direction='row-reverse'
          spacing={spacing}
        />
        <SectionWithCarousel
          photos={apartmentThree}
          alt="apartment-3"
          title='Apartment 3'
          details='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          direction='row'
          spacing={spacing}
        />
        <SectionWithCarousel
          photos={apartmentFour}
          alt="apartment-4"
          title='Apartment 4'
          details='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          direction='row-reverse'
          spacing={spacing}
        />
        <SectionWithCarousel
          photos={apartmentFive}
          alt="apartment-5"
          title='Apartment 5'
          details='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          direction='row'
          spacing={spacing}
        />
        <SectionWithCarousel
          photos={apartmentSix}
          alt="apartment-6"
          title='Apartment 6'
          details='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          direction='row-reverse'
          spacing={spacing}
        />
        <SectionWithCarousel
          photos={apartmentSeven}
          alt="apartment-7"
          title='Apartment 7'
          details='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          direction='row'
          spacing={spacing}
        />
        <SectionWithCarousel
          photos={apartmentEight}
          alt="apartment-8"
          title='Apartment 8'
          details='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          direction='row-reverse'
          spacing={spacing}
        />
        <SectionWithCarousel
          photos={apartmentNine}
          alt="apartment-9"
          title='Apartment 9'
          details='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          direction='row'
          spacing={spacing}
        />
        <SectionWithCarousel
          photos={apartmentTen}
          alt="apartment-10"
          title='Apartment 10'
          details='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          direction='row-reverse'
          spacing={spacing}
        />
        <SectionWithCarousel
          photos={apartmentEleven}
          alt="apartment-11"
          title='Apartment 11'
          details='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          direction='row'
          spacing={spacing}
        />
      </Box>
    </Box>
  );
}