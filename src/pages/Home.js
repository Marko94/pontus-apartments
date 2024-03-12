import { Box, Grid } from '@mui/material';
import * as React from 'react';
import { useLayoutEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import CoverPhoto from '../assets/Cover.jpg';
import ApartmentPhoto from '../assets/apartments/apartment 2/Brown 1.jpg';
import Cutout from '../assets/decorations/House cutout.png';
import Squigle from '../assets/decorations/Squigle.png';
import PoolPhoto from '../assets/gallery/Gallery 1.jpg';
import { apartmentsDetails, apartmentsSubtitle, apartmentsTitle, introDetails, introTitle, policiesDetails, policiesSubtitle, policiesTitle, viewApartmentsButton, viewPoliciesButton } from '../assets/languages/english/Home page conent';
import Page from '../components/Page';
import SectionWithGallery from '../components/sections/SectionWithGallery';
import SectionWithImage from '../components/sections/SectionWithImage';
import SectionWithText from '../components/sections/SectionWithText';
import '../style/pages/Home.css';
import { apartmentsDetailsMNE, apartmentsSubtitleMNE, apartmentsTitleMNE, introDetailsMNE, introTitleMNE, policiesDetailsMNE, policiesSubtitleMNE, policiesTitleMNE, viewApartmentsButtonMNE, viewPoliciesButtonMNE } from '../assets/languages/montenegrian/Home page conent';

export default function HomePage() {
  const [searchParams,] = useSearchParams();
  const {search} = useLocation();
  const [pageText, setPageText] = useState(() => 
  searchParams && searchParams.get('lang') === 'MNE' ? 
    {
      apartmentsDetails: apartmentsDetailsMNE,
      apartmentsSubtitle: apartmentsSubtitleMNE,
      apartmentsTitle: apartmentsTitleMNE,
      introDetails: introDetailsMNE,
      introTitle: introTitleMNE,
      policiesDetails: policiesDetailsMNE,
      policiesSubtitle: policiesSubtitleMNE,
      policiesTitle: policiesTitleMNE,
      viewApartmentsButton: viewApartmentsButtonMNE,
      viewPoliciesButton: viewPoliciesButtonMNE
    } : {
      apartmentsDetails,
      apartmentsSubtitle,
      apartmentsTitle,
      introDetails,
      introTitle,
      policiesDetails,
      policiesSubtitle,
      policiesTitle,
      viewApartmentsButton,
      viewPoliciesButton
    }
  );

  useLayoutEffect(() => {
    setPageText(searchParams && searchParams.get('lang') === 'MNE' ? 
    {
      apartmentsDetails: apartmentsDetailsMNE,
      apartmentsSubtitle: apartmentsSubtitleMNE,
      apartmentsTitle: apartmentsTitleMNE,
      introDetails: introDetailsMNE,
      introTitle: introTitleMNE,
      policiesDetails: policiesDetailsMNE,
      policiesSubtitle: policiesSubtitleMNE,
      policiesTitle: policiesTitleMNE,
      viewApartmentsButton: viewApartmentsButtonMNE,
      viewPoliciesButton: viewPoliciesButtonMNE
    } : {
      apartmentsDetails,
      apartmentsSubtitle,
      apartmentsTitle,
      introDetails,
      introTitle,
      policiesDetails,
      policiesSubtitle,
      policiesTitle,
      viewApartmentsButton,
      viewPoliciesButton
    });
  }, [searchParams]);

  return (
    <Page>
      <Box className='Home-page-container' flex>
        <Box component="img" src={CoverPhoto} className="Cover-image" alt="Cover" sx={{aspectRatio: {xs: 24/18, md:24/9}, minHeight: {xs: '300px', md: '200px'}}}/>
        <Grid container direction='column' spacing={0} className='Home-content'>
          <Grid item p={0}>
            <SectionWithText
              title={pageText.introTitle}
              titleVariant='h4'
              decoration={Squigle}
              details={pageText.introDetails}
              showBookNowButton={true}
              py={10}
              maxWidth={'xl'}
            />
          </Grid>
          <Grid item p={0}>
            <SectionWithImage
              src={ApartmentPhoto}
              alt="test"
              title={pageText.apartmentsTitle}
              titleVariant='h4'
              subtitle={pageText.apartmentsSubtitle}
              href={`/apartments${search}`}
              details={pageText.apartmentsDetails}
              buttonText={pageText.viewApartmentsButton}
              direction='row'
              maxWidth={'xl'}
              py={5}
              backgroundColor={'#f7f5f2'}
              backgroundImage={Cutout}
              backgroundPosition={{xs: 'center bottom', md: 'right center'}}
              px={{xs: 0.25}}
            />
          </Grid>
          <Grid item p={0}>
            <SectionWithImage
              src={PoolPhoto}
              title={pageText.policiesTitle}
              titleVariant='h4'
              subtitle={pageText.policiesSubtitle}
              href={`/policies${search}`}
              details={pageText.policiesDetails}
              buttonText={pageText.viewPoliciesButton}
              direction='row-reverse'
              py={5}
              maxWidth={'xl'}
              px={{xs: 0.25}}
            />
          </Grid>
          <Grid item>
            <SectionWithGallery maxWidth={'xl'} py={5} backgroundColor={'#f7f5f2'}/>
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