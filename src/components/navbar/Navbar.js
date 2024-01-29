import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useState } from 'react';
import PhoneInfoPanel from '../PhoneInfoPanel';
import { Grid, Hidden } from '@mui/material';
import '../../style/components/Navbar.css'
import HamburgerMenu from './HamburgerMenu';
import NavbarScrollHandler from './NavbarScrollHandler';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(true);
  return (
    <NavbarScrollHandler setIsScrolled={setIsScrolled}>
      <AppBar variant="sticky" color="transparent" className="Nav-bar" sx={{boxShadow: "none"}}>
        <Toolbar>
          <Grid container spacing={2} alignItems='center' className='Nav-bar-grid-container'>
            <Grid item xs={2}>
              <Hidden lgDown>
                <PhoneInfoPanel/>
              </Hidden>
            </Grid>
            <Grid item xs={8} display="flex" alignItems="center" justifyContent="center" sx={{ flexGrow: 1 }}>
              <Typography variant="h4" component="div">
                Pontus Luxury Apartments
              </Typography>
            </Grid>
            <Grid item xs={2} display="flex" alignItems="center" justifyContent="end">
              <HamburgerMenu backgroundColor={isScrolled ? 'none' : 'secondary.main'}/>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </NavbarScrollHandler>
  );
}