import { Box, Grid } from '@mui/material';
import * as React from 'react';
import CoverPhoto from '../assets/Apartments cover.jpg';
import { useLayoutEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Page from '../components/Page.js';
import { introBulletList1, introBulletList2, introDetails, introSubtitle, introTitle } from '../assets/languages/english/Apartments page content.js';
import { introBulletList1MNE, introBulletList2MNE, introDetailsMNE, introSubtitleMNE, introTitleMNE } from '../assets/languages/montenegrian/Apartments page content.js';
import SectionWithBulletPoints from '../components/sections/SectionWithBulletPoints.js';
import SectionWithApartmentDetails from '../components/sections/SectionWithApartmentDetails.js';
import SectionWithIcons from '../components/sections/SectionWithIcons.js';
import SectionWithText from '../components/sections/SectionWithText.js';
import { apartments } from '../constants/apartments.js';
import '../style/pages/Apartments.css';

const spacing = {xs: 1, md: 3};

export default function ApartmentsPage() {
  const [searchParams,] = useSearchParams();
  const [pageText, setPageText] = useState(() => 
  searchParams && searchParams.get('lang') === 'MNE' ? 
    {
      introTitle: introTitleMNE,
      introSubtitle: introSubtitleMNE,
      introDetails: introDetailsMNE,
      introBulletList1: introBulletList1MNE,
      introBulletList2: introBulletList2MNE
    } : {
      introTitle,
      introSubtitle,
      introDetails,
      introBulletList1,
      introBulletList2
    }
  );

  useLayoutEffect(() => {
    setPageText(searchParams && searchParams.get('lang') === 'MNE' ? 
    {
      introTitle: introTitleMNE,
      introSubtitle: introSubtitleMNE,
      introDetails: introDetailsMNE,
      introBulletList1: introBulletList1MNE,
      introBulletList2: introBulletList2MNE
    } : {
      introTitle,
      introSubtitle,
      introDetails,
      introBulletList1,
      introBulletList2
    });
  }, [searchParams]);

  return (
    <Page>
      <Box className='Apartments-page-container'>
        <img src={CoverPhoto} className="Cover-image" alt="Cover" />
        <Grid container direction='column' spacing={{xs: 0, md:4}} className='Apartments-content'>
          <Grid item p={0}>
            <SectionWithText
              title={pageText.introTitle}
              subtitle={pageText.introSubtitle}
              subtitleVariant='h5'
              details={pageText.introDetails}
              maxWidth={'xl'}
              py={{xs:5, md: 8}}
            />
          </Grid>
          <Grid item p={0}>
            <SectionWithIcons maxWidth={'xl'}/>
          </Grid>
          <Grid item p={0}>
            <SectionWithBulletPoints maxWidth={'xl'} bulletList1={pageText.introBulletList1} bulletList2={pageText.introBulletList2} keyWord='apartment-description'/>
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