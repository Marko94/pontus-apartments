import { Box, Grid } from '@mui/material';
import * as React from 'react';
import Page from '../components/Page';
import SectionWithForm from '../components/sections/SectionWithForm';
import '../style/pages/Contact.css';

export default function ContactPage() {
  return (
    <Page>
      <Box className='Contact-page-container' flex alignItems='center' justifyContent='center'>
        <Grid container direction='column' spacing={0} className='Contact-page-content' mt={12}>
          <Grid item p={0}>
            <SectionWithForm maxWidth={'lg'} spacing={2} py={2}/>
          </Grid>
          <Grid item display='flex' maxWidth={'xl'} height={{xs: 320, lg: 480, xl: 720}} justifyContent='center'>
            <Box width='100%' height='100%'>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1472.5595294984394!2d18.701716232092714!3d42.42520059074555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134c318493bdf473%3A0x1e92cacdc47948aa!2sPontus%20Luxury%20Apartments!5e0!3m2!1sen!2srs!4v1704753121543!5m2!1sen!2srs"
                width="100%"
                height="100%"
                title='location'
                className="Section"
                style={{border:0}}
                loading="lazy"
              ></iframe>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Page>
  );
}