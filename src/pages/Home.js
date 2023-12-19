import { Box, Button, Grid } from '@mui/material';
import * as React from 'react';
import CoverPhoto from '../assets/View from sea.jpg';
import '../style/pages/Home.css'
import SectionWithImage from '../components/sections/SectionWithImage';
import SectionWrapper from '../components/sections/SectionWrapper';

export default function HomePage() {
  return (
    <Box className='Home-page-container' flex>
      <img src={CoverPhoto} className="Cover-image" alt="Cover" />
      <Grid container direction='column' spacing={4} className='Home-content'>
        <Grid item>
          <SectionWithImage
            src={CoverPhoto}
            alt="test"
            title='Stay with us'
            subtitle='Enjoy the seaside'
            details='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            direction='row'
          />
        </Grid>
        <Grid item>
          <SectionWithImage
            src={CoverPhoto}
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