import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import PhoneInfoPanel from '../PhoneInfoPanel';
import { Grid, Hidden } from '@mui/material';
import NavbarMenu from './NavbarMenu';
import '../../style/components/Navbar.css'

export default function Navbar() {
  return (
    <AppBar position="sticky" color="inherit" sx={{minHeight:95, justifyContent: "center", zIndex: (theme) => theme.zIndex.drawer + 1}}>
      <Toolbar>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Hidden lgDown>
              <PhoneInfoPanel/>
            </Hidden>
          </Grid>
          <Grid item xs={8} display="flex" alignItems="center">
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              Pontus Luxury Apartments
            </Typography>
          </Grid>
          <Grid item xs={2} display="flex" alignItems="center" justifyContent="end">
          </Grid>
        </Grid>
      </Toolbar>
      <NavbarMenu/>
    </AppBar>
  );
}