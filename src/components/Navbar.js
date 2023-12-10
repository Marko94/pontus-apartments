import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import PhoneInfoPanel from './PhoneInfoPanel';
import { Grid } from '@mui/material';

export default function Navbar() {
  return (
    <AppBar position="sticky" color="inherit" sx={{minHeight:95, justifyContent: "center"}}>
        <Toolbar>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <PhoneInfoPanel />
                </Grid>
                <Grid item xs={4} display="flex" alignItems="center">
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Pontus Luxury Apartments
                    </Typography>
                </Grid>
                <Grid item xs={4} display="flex" alignItems="center" justifyContent="end">
                    <Button variant='contained'>Book Online</Button>
                </Grid>
            </Grid>
        </Toolbar>
    </AppBar>
  );
}