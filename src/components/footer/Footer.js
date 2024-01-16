import FacebookIcon from '@mui/icons-material/Facebook';
import { Box, Grid, Link, Typography } from '@mui/material';
import * as React from 'react';
import InfoPanel from '../PhoneInfoPanel';

export default function Footer(props) {

  return (
    <Box display='flex' width='100%' sx={{bgcolor: '#f7f5f2'}} justifyContent='center' py={8}>
      <Grid container direction={{xs: 'column', lg: 'row'}} width='100%' maxWidth='xl' height='100%' spacing={{xs: 4, md: 0}}>
        <Grid item xs={4}>
          <Box display='flex' flexDirection='column' alignItems='center' height='100%' textAlign='left'>
            <Box pb={3}>
              <Typography variant='h5' color='black' sx={{borderBottom: '2px solid', borderColor: 'secondary.main'}}>Location:</Typography>
            </Box>
            <Typography variant='p1' fontSize={20}>Pontus Luxury Apartments</Typography>
            <Link href='https://maps.app.goo.gl/HkwsJ14o2N1ksNi5A'><Typography variant='p1' fontSize={20}  href='https://maps.app.goo.gl/HkwsJ14o2N1ksNi5A'>Brijeg Gverovica 11 Tivat Montenegro</Typography></Link>
            
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box display='flex' flexDirection='column' alignItems='center' height='100%'>
            <Box pb={3}>
              <Typography variant='h5' color='black' sx={{borderBottom: '2px solid', borderColor: 'secondary.main'}}>Contact:</Typography>
            </Box>
            <InfoPanel fontSize={18} iconSize='large'/>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box display='flex' flexDirection='column' alignItems='center' height='100%'>
            <Box pb={3}>
              <Typography variant='h5' color='black' sx={{borderBottom: '2px solid', borderColor: 'secondary.main'}}>Social Media:</Typography>
            </Box>
            
              <Link href='https://www.facebook.com/pontus.residence' variant='link' display='flex' flexDirection='row' alignItems='center'>
                <FacebookIcon fontSize='large'/>
                <Typography fontSize={18}>Pontus Luxury Apartments</Typography>
              </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};