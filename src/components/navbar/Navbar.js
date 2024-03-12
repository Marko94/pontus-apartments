import { Box, Grid, Hidden, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import { useState } from 'react';
import logo from '../../assets/decorations/Pontius Logo - Small.png';
import '../../style/components/Navbar.css';
import PhoneInfoPanel from '../PhoneInfoPanel';
import HamburgerMenu from './HamburgerMenu';
import NavbarScrollHandler from './NavbarScrollHandler';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(true);
  return (
    <NavbarScrollHandler setIsScrolled={setIsScrolled}>
      <AppBar variant="sticky" className="Nav-bar" sx={{boxShadow: "none"}}>
        <Toolbar>
          <Grid container spacing={2} alignItems='center' className='Nav-bar-grid-container'>
            <Hidden lgDown>
              <Grid item xs={0} lg={3} xl={2}>
                <PhoneInfoPanel/>
              </Grid>
            </Hidden>
            <Grid item xs={9} lg={6} xl={8} display="flex" alignItems="center" sx={{ flexGrow: 1, justifyContent: {xs: 'left', lg: 'center'} }}>
              <Box bgcolor={isScrolled ? "#1c2a3eF6" : 'transparent'} borderRadius={50} height='64px' width='64px' display='flex' sx={{transition: '0.5s background-color ease'}}>
                <img src={logo} alt='logo' sx={{objectFit: 'contain'}}/>
              </Box>
              <Typography variant="h4" component="div" sx={{fontSize: {xs: "18px", sm: "20px", md: "24px"}, whiteSpace: 'pre-wrap', textAlign: 'left', ml: '8px'}}>
                {'Pontus Luxury\nApartments'}
              </Typography>
            </Grid>
            <Grid item xs={3} xl={2} display="flex" alignItems="center" justifyContent="end">
              <HamburgerMenu backgroundColor={isScrolled ? 'none' : 'secondary.main'}/>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </NavbarScrollHandler>
  );
}