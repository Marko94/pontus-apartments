import { Box, Button } from '@mui/material';
import * as React from 'react';
import CoverPhoto from '../assets/View from sea.jpg';

export default function HomePage() {
  return (
    <Box className='App-container' flex>
      <img src={CoverPhoto} className="Cover-image" alt="Cover" />
      <Button variant="contained">Hello world</Button>
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