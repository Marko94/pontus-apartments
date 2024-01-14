import { Box, Button, Grid, Hidden } from '@mui/material';
import * as React from 'react';
import HousePhoto from '../assets/Close up from see.jpg';
import CoverPhoto from '../assets/View from sea.jpg';
import ApartmentPhoto from '../assets/apartments/apartment 2/Brown 1.jpg';
import Squigle from '../assets/decorations/Squigle.png'
import Cutout from '../assets/decorations/House cutout.png'
import SectionWithImage from '../components/sections/SectionWithImage';
import SectionWithText from '../components/sections/SectionWithText';
import '../style/pages/Home.css';
import Page from '../components/Page';
import { introTitle, introDetails, apartmentsTitle, apartmentsSubtitle, apartmentsDetails } from '../assets/languages/english/Home page conent';
import SectionWrapper from '../components/sections/SectionWrapper';
import PhotoGallery from '../components/PhotoGallery';
import SectionWithGallery from '../components/sections/SectionWithGallery';

export default function HomePage() {
  return (
    <Page>
      <Box className='Home-page-container' flex>
        <img src={CoverPhoto} className="Cover-image" alt="Cover"/>
        <Grid container direction='column' spacing={0} className='Home-content'>
          <Grid item p={0}>
            <SectionWithText
              title={introTitle}
              titleVariant='h4'
              decoration={Squigle}
              details={introDetails}
              py={16}
              maxWidth={'lg'}
            />
          </Grid>
          <Grid item p={0}>
            <SectionWithImage
              src={ApartmentPhoto}
              alt="test"
              title={apartmentsTitle}
              titleVariant='h4'
              subtitle={apartmentsSubtitle}
              href={'/apartments'}
              details={apartmentsDetails}
              buttonText='View Apartments'
              direction='row'
              maxWidth={'xl'}
              py={5}
              backgroundColor={'#f7f5f2'}
              backgroundImage={Cutout}
              backgroundPosition={{xs: 'center bottom', md: 'right center'}}
            />
          </Grid>
          <Grid item p={0}>
            <SectionWithImage
              src={HousePhoto}
              alt="test"
              title='Stay with us'
              subtitle='Enjoy the seaside'
              details='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              direction='row-reverse'
              py={5}
              maxWidth={'xl'}
            />
          </Grid>
          <Grid item>
            <SectionWithGallery maxWidth={'xl'} py={5} backgroundColor={'#f7f5f2'}/>
          </Grid>
          <Grid item display='flex' maxWidth={'xl'} height={{xs: 320, lg: 480, xl: 720}} py={5} justifyContent='center'>
            <Hidden smUp>
              <Box mb={2}>
                <Button variant="outlined" href='https://maps.app.goo.gl/HkwsJ14o2N1ksNi5A'>Open location in Maps</Button>
              </Box>
            </Hidden>
            <Box maxWidth={'xl'} width='100%' height='100%'>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1472.5595294984394!2d18.701716232092714!3d42.42520059074555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134c318493bdf473%3A0x1e92cacdc47948aa!2sPontus%20Luxury%20Apartments!5e0!3m2!1sen!2srs!4v1704753121543!5m2!1sen!2srs"
                width="100%"
                height="100%"
                className="Section"
                style={{border:0}}
                loading="lazy"
              ></iframe>
            </Box>
          </Grid>
        </Grid> 
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        Learn React
        </a>
      </Box>
    </Page>
  );
}