import React from "react";
import Page from '../components/Page';
import CoverPhoto from '../assets/Policies cover.jpg'
import '../style/pages/Policies.css';
import Squigle from '../assets/decorations/Squigle.png';
import { Box, Grid } from "@mui/material";
import SectionWithText from "../components/sections/SectionWithText";
import { useLayoutEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { generalTitle, generalBulletList1, generalBulletList2, paymentTitle, paymentDetails, poolTitle, poolBulletList1, poolBulletList2, transportTitle, transportBulletList1, transportBulletList2, introDetails, introTitle, introSubtitle, locationTitle, locationBulletList1 } from "../assets/languages/english/Policies page content";
import SectionWithBulletPoints from "../components/sections/SectionWithBulletPoints";
import { generalBulletList1MNE, generalBulletList2MNE, generalTitleMNE, introDetailsMNE, introSubtitleMNE, introTitleMNE, locationBulletList1MNE, locationTitleMNE, paymentDetailsMNE, paymentTitleMNE, poolBulletList1MNE, poolBulletList2MNE, poolTitleMNE, transportBulletList1MNE, transportBulletList2MNE, transportTitleMNE } from "../assets/languages/montenegrian/Policies page content";


export default function PoliciesPage() {
  const [searchParams,] = useSearchParams();
  const [pageText, setPageText] = useState(() => 
  searchParams && searchParams.get('lang') === 'MNE' ? 
    {
      introTitleLabel: introTitleMNE,
      introSubtitleLabel: introSubtitleMNE,
      introDetailsLabel: introDetailsMNE,
      generalTitle: generalTitleMNE,
      generalBulletLabelList1: generalBulletList1MNE,
      generalBulletLabelList2: generalBulletList2MNE,
      poolTitle: poolTitleMNE,
      poolBulletLabelList1: poolBulletList1MNE,
      poolBulletLabelList2: poolBulletList2MNE,
      transportTitle: transportTitleMNE,
      transportBulletLabelList1: transportBulletList1MNE,
      transportBulletLabelList2: transportBulletList2MNE,
      locationTitle: locationTitleMNE,
      locationBulletLabelList1: locationBulletList1MNE
    } : {
      introTitleLabel: introTitle,
      introSubtitleLabel: introSubtitle,
      introDetailsLabel: introDetails,
      generalTitle,
      generalBulletLabelList1: generalBulletList1,
      generalBulletLabelList2: generalBulletList2,
      poolTitle,
      poolBulletLabelList1: poolBulletList1,
      poolBulletLabelList2: poolBulletList2,
      transportTitle,
      transportBulletLabelList1: transportBulletList1,
      transportBulletLabelList2: transportBulletList2,
      locationTitle,
      locationBulletLabelList1: locationBulletList1
    }
  );

  useLayoutEffect(() => {
    setPageText(searchParams && searchParams.get('lang') === 'MNE' ? 
    {
      introTitleLabel: introTitleMNE,
      introSubtitleLabel: introSubtitleMNE,
      introDetailsLabel: introDetailsMNE,
      paymentTitleLabel: paymentTitleMNE,
      paymentDetailsLabel: paymentDetailsMNE,
      generalTitle: generalTitleMNE,
      generalBulletLabelList1: generalBulletList1MNE,
      generalBulletLabelList2: generalBulletList2MNE,
      poolTitle: poolTitleMNE,
      poolBulletLabelList1: poolBulletList1MNE,
      poolBulletLabelList2: poolBulletList2MNE,
      transportTitle: transportTitleMNE,
      transportBulletLabelList1: transportBulletList1MNE,
      transportBulletLabelList2: transportBulletList2MNE,
      locationTitle: locationTitleMNE,
      locationBulletLabelList1: locationBulletList1MNE
    } : {
      introTitleLabel: introTitle,
      introSubtitleLabel: introSubtitle,
      introDetailsLabel: introDetails,
      paymentTitleLabel: paymentTitle,
      paymentDetailsLabel: paymentDetails,
      generalTitle,
      generalBulletLabelList1: generalBulletList1,
      generalBulletLabelList2: generalBulletList2,
      poolTitle,
      poolBulletLabelList1: poolBulletList1,
      poolBulletLabelList2: poolBulletList2,
      transportTitle,
      transportBulletLabelList1: transportBulletList1,
      transportBulletLabelList2: transportBulletList2,
      locationTitle,
      locationBulletLabelList1: locationBulletList1
    });
  }, [searchParams]);

  return (
    <Page>
      <Box className='Policies-page-container' flex alignItems='center' justifyContent='center'>
        <Box component="img" src={CoverPhoto} className="Cover-image" alt="Cover" sx={{minHeight: {xs: '300px', md: '200px'}}}/>
        <Grid container direction='column' spacing={0} className='Policies-content'>
          <Grid item p={0}>
            <SectionWithText
              title={pageText.introTitleLabel}
              titleVariant='h4'
              decoration={Squigle}
              details={pageText.introDetailsLabel}
              py={4}
              maxWidth={'xl'}
            />
          </Grid>
          <Grid item p={0}>
            <SectionWithText
              title={pageText.paymentTitleLabel}
              titleVariant='h5'
              details={pageText.paymentDetailsLabel}
              py={4}
              maxWidth={'xl'}
            />
          </Grid>
          <Grid item p={0}>
            <SectionWithBulletPoints 
              title={pageText.generalTitle}
              bulletList1={pageText.generalBulletLabelList1}
              bulletList2={pageText.generalBulletLabelList2}
              backgroundColor={'#f7f5f2'}
              maxWidth={'xl'}
            />
          </Grid>
          <Grid item p={0}>
            <SectionWithBulletPoints 
              title={pageText.poolTitle}
              bulletList1={pageText.poolBulletLabelList1}
              bulletList2={pageText.poolBulletLabelList2}
              maxWidth={'xl'}
            />
          </Grid>
          <Grid item p={0}>
            <SectionWithBulletPoints 
              title={pageText.transportTitle}
              bulletList1={pageText.transportBulletLabelList1}
              bulletList2={pageText.transportBulletLabelList2}
              backgroundColor={'#f7f5f2'}
              maxWidth={'xl'}
            />
          </Grid>
          <Grid item p={0}>
            <SectionWithBulletPoints 
              title={pageText.locationTitle}
              bulletList1={pageText.locationBulletLabelList1}
              maxWidth={'xl'}
              pt={0}
            />
          </Grid>
        </Grid>
      </Box>
    </Page>
  );
}