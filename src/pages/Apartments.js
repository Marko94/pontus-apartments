import { Box, Grid } from '@mui/material';
import * as React from 'react';
import CoverPhoto from '../assets/Apartments cover.jpg';
import Page from '../components/Page.js';
import SectionWithCarousel from '../components/sections/SectionWithCarousel';
import SectionWithText from '../components/sections/SectionWithText.js';
import { introTitle, introSubtitle, introDetails, introBulletList1, introBulletList2 } from '../assets/languages/english/Apartments page content.js';
import { apartmentEight, apartmentEleven, apartmentFive, apartmentFour, apartmentNine, apartmentOne, apartmentSeven, apartmentSix, apartmentTen, apartmentThree, apartmentTwo } from "../constants/photos.js";
import '../style/pages/Apartments.css';
import SectionWithIcons from '../components/sections/SectionWithIcons.js';
import SectionWithBulletPoints from '../components/sections/SectionWithBulletPoints.js';

const spacing = {xs: 1, md: 3};

export default function ApartmentsPage() {
  return (
    <Page>
      <Box className='Apartments-page-container'>
        <img src={CoverPhoto} className="Cover-image" alt="Cover" />
        <Grid container direction='column' spacing={{xs: 0, md:4}} className='Apartments-content'>
          <Grid item p={0}>
            <SectionWithText
              title={introTitle}
              subtitle={introSubtitle}
              subtitleVariant='h5'
              details={introDetails}
              maxWidth={'xl'}
              sx={{ p: {xs:0, md: 8} }}
            />
          </Grid>
          <Grid item p={0}>
            <SectionWithIcons maxWidth={'xl'}/>
          </Grid>
          <Grid item p={0}>
            <SectionWithBulletPoints maxWidth={'xl'} introBulletList1={introBulletList1} introBulletList2={introBulletList2}/>
          </Grid>
          <Grid item p={0}>
            <SectionWithCarousel
              photos={apartmentOne}
              alt="apartment-1"
              title='Apartment 1'
              details='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              direction='row'
              href='/policies'
              spacing={spacing}
              backgroundColor={'#f7f5f2'}
              maxWidth={'xl'}
            />
          </Grid>
          <Grid item p={0}>
            <SectionWithCarousel
              photos={apartmentTwo}
              alt="apartment-2"
              title='Apartment 2'
              details='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              direction='row-reverse'
              spacing={spacing}
              maxWidth={'xl'}
            />
          </Grid>
          <Grid item p={0}>
            <SectionWithCarousel
              photos={apartmentThree}
              alt="apartment-3"
              title='Apartment 3'
              details='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              direction='row'
              spacing={spacing}
              backgroundColor={'#f7f5f2'}
              maxWidth={'xl'}
            />
          </Grid>
          <Grid item p={0}>
            <SectionWithCarousel
              photos={apartmentFour}
              alt="apartment-4"
              title='Apartment 4'
              details='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              direction='row-reverse'
              spacing={spacing}
              maxWidth={'xl'}
            />
          </Grid>
          <Grid item p={0}>
            <SectionWithCarousel
              photos={apartmentFive}
              alt="apartment-5"
              title='Apartment 5'
              details='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              direction='row'
              spacing={spacing}
              backgroundColor={'#f7f5f2'}
              maxWidth={'xl'}
            />
          </Grid>
          <Grid item p={0}>
            <SectionWithCarousel
              photos={apartmentSix}
              alt="apartment-6"
              title='Apartment 6'
              details='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              direction='row-reverse'
              spacing={spacing}
              maxWidth={'xl'}
            />
          </Grid>
          <Grid item p={0}>
            <SectionWithCarousel
              photos={apartmentSeven}
              alt="apartment-7"
              title='Apartment 7'
              details='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              direction='row'
              spacing={spacing}
              backgroundColor={'#f7f5f2'}
              maxWidth={'xl'}
          />
          </Grid>
          <Grid item p={0}>
            <SectionWithCarousel
              photos={apartmentEight}
              alt="apartment-8"
              title='Apartment 8'
              details='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              direction='row-reverse'
              spacing={spacing}
              maxWidth={'xl'}
            />
          </Grid>
          <Grid item p={0}>
            <SectionWithCarousel
              photos={apartmentNine}
              alt="apartment-9"
              title='Apartment 9'
              details='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              direction='row'
              spacing={spacing}
              backgroundColor={'#f7f5f2'}
              maxWidth={'xl'}
            />
          </Grid>
          <Grid item p={0}>
            <SectionWithCarousel
              photos={apartmentTen}
              alt="apartment-10"
              title='Apartment 10'
              details='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              direction='row-reverse'
              spacing={spacing}
              maxWidth={'xl'}
            />
          </Grid>
          <Grid item p={0}>
            <SectionWithCarousel
              photos={apartmentEleven}
              alt="apartment-11"
              title='Apartment 11'
              details='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              direction='row'
              spacing={spacing}
              backgroundColor={'#f7f5f2'}
              maxWidth={'xl'}
            />
          </Grid>
        </Grid>
      </Box>
    </Page>
  );
}