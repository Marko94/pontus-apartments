import { Box, Grid } from '@mui/material';
import * as React from 'react';
import HousePhoto from '../assets/Close up from see.jpg';
import CoverPhoto from '../assets/View from sea.jpg';
import SectionWithImage from '../components/sections/SectionWithImage';
import SectionWithText from '../components/sections/SectionWithText';
import '../style/pages/Home.css';

export default function HomePage() {
  return (
    <Box className='Home-page-container' flex>
      <img src={CoverPhoto} className="Cover-image" alt="Cover" />
      <Grid container maxWidth='xl' direction='column' spacing={4} className='Home-content'>
        <Grid item p={0}>
          <SectionWithText
            title="Welcome"
            subtitle="Your new favorite holiday location!"
            details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
        </Grid>
        <Grid item p={0}>
          <SectionWithImage
            src={HousePhoto}
            alt="test"
            title='Stay with us'
            subtitle='Enjoy the seaside'
            details='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            direction='row'
            padding={0}
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
          />
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
  );
}