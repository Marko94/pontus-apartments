import { Box, Grid } from '@mui/material';
import * as React from 'react';
import CoverPhoto from '../assets/Apartments cover.jpg';
import Page from '../components/Page.js';
import { introBulletList1, introBulletList2, introDetails, introSubtitle, introTitle } from '../assets/languages/english/Apartments page content.js';
import SectionWithBulletPoints from '../components/sections/SectionWithBulletPoints.js';
import SectionWithApartmentDetails from '../components/sections/SectionWithApartmentDetails.js';
import SectionWithIcons from '../components/sections/SectionWithIcons.js';
import SectionWithText from '../components/sections/SectionWithText.js';
import { apartments } from '../constants/apartments.js';
import '../style/pages/Apartments.css';

const spacing = {xs: 1, md: 3};

export default function ApartmentsPage() {
  return (
    <Page>
      <Box className='Apartments-page-container'>
        <img src={CoverPhoto} className="Cover-image" alt="Cover" />
        <Grid container direction='column' spacing={{xs: 0, md:4}} className='Apartments-content'>
          <Grid item p={0}>
            <SectionWithText
              title={introTitle}
              subtitle={introSubtitle}
              subtitleVariant='h5'
              details={introDetails}
              maxWidth={'xl'}
              py={{xs:5, md: 8}}
            />
          </Grid>
          <Grid item p={0}>
            <SectionWithIcons maxWidth={'xl'}/>
          </Grid>
          <Grid item p={0}>
            <SectionWithBulletPoints maxWidth={'xl'} bulletList1={introBulletList1} bulletList2={introBulletList2} keyWord='apartment-description'/>
          </Grid>
          {apartments && apartments.map((apartment, index) => 
            <Grid item key={apartment.name} p={0}>
              <SectionWithApartmentDetails
                photos={apartment.photos}
                alt={apartment.name}
                name={apartment.name}
                note={apartment.note}
                floor={apartment.floor}
                doubleBeds={apartment.doubleBeds}
                singleBeds={apartment.singleBeds}
                sofas={apartment.sofas}
                wifi={apartment.wifi}
                privateBathroom={apartment.privateBathroom}
                seaView={apartment.seaView}
                airCondition={apartment.airCondition}
                fullyEquippedKitchen={apartment.fullyEquippedKitchen}
                fridge={apartment.fridge}
                flatScreenTv={apartment.flatScreenTv}
                washingMachine={apartment.washingMachine}
                balcony={apartment.balcony}
                privateTerrace={apartment.privateTerrace}
                sharedTerrace={apartment.sharedTerrace}
                disabledAccess={apartment.disabledAccess}
                towels={apartment.towels}
                iron={apartment.iron}
                direction={index % 2 === 0 ? 'row' : 'row-reverse'}
                href={`/policies?apt=${index}`}
                spacing={spacing}
                backgroundColor={index % 2 === 0 ? '#f7f5f2' : undefined}
                maxWidth={'xl'}
              />
            </Grid>
          )}
        </Grid>
      </Box>
    </Page>
  );
}