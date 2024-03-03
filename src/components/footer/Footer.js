import FacebookIcon from '@mui/icons-material/Facebook';
import { Box, Grid, Link, Typography } from '@mui/material';
import * as React from 'react';
import { useLayoutEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { location, pontus, contact, socialMedia } from '../../assets/languages/english/components/Footer';
import { locationMNE, pontusMNE, contactMNE, socialMediaMNE } from '../../assets/languages/montenegrian/components/Footer';
import InfoPanel from '../PhoneInfoPanel';

export default function Footer(props) {
  const [searchParams,] = useSearchParams();
  const [pageText, setPageText] = useState(() => 
  searchParams && searchParams.get('lang') === 'MNE' ? 
    {
      location: locationMNE,
      pontus: pontusMNE,
      contact: contactMNE,
      socialMedia: socialMediaMNE
    } : {
      location,
      pontus,
      contact,
      socialMedia
    }
  );

  useLayoutEffect(() => {
    setPageText(
      searchParams && searchParams.get('lang') === 'MNE' ?
        {
          location: locationMNE,
          pontus: pontusMNE,
          contact: contactMNE,
          socialMedia: socialMediaMNE
        } : {
          location,
          pontus,
          contact,
          socialMedia
        }
    )
  },[searchParams]);

  return (
    <Box display='flex' width='100%' sx={{bgcolor: '#f7f5f2'}} justifyContent='center' py={8}>
      <Grid container direction={{xs: 'column', lg: 'row'}} width='100%' maxWidth='xl' height='100%' spacing={{xs: 4, md: 0}}>
        <Grid item xs={4}>
          <Box display='flex' flexDirection='column' alignItems='center' height='100%' textAlign='left'>
            <Box pb={3}>
              <Typography variant='h5' color='black' sx={{borderBottom: '2px solid', borderColor: 'secondary.main'}}>{pageText.location}</Typography>
            </Box>
            <Typography variant='p1' fontSize={20}>{pageText.pontus}</Typography>
            <Link href='https://maps.app.goo.gl/HkwsJ14o2N1ksNi5A'><Typography variant='p1' fontSize={20}  href='https://maps.app.goo.gl/HkwsJ14o2N1ksNi5A'>Brijeg Gverovica 11 Tivat Montenegro</Typography></Link>
            
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box display='flex' flexDirection='column' alignItems='center' height='100%'>
            <Box pb={3}>
              <Typography variant='h5' color='black' sx={{borderBottom: '2px solid', borderColor: 'secondary.main'}}>{pageText.contact}</Typography>
            </Box>
            <InfoPanel fontSize={18} iconSize='large'/>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box display='flex' flexDirection='column' alignItems='center' height='100%'>
            <Box pb={3}>
              <Typography variant='h5' color='black' sx={{borderBottom: '2px solid', borderColor: 'secondary.main'}}>{pageText.socialMedia}</Typography>
            </Box>
            
              <Link href='https://www.facebook.com/pontus.residence' variant='link' display='flex' flexDirection='row' alignItems='center'>
                <FacebookIcon fontSize='large'/>
                <Typography fontSize={18}>{pageText.pontus}</Typography>
              </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};