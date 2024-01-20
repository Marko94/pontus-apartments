import React from "react";
import Page from '../components/Page';
import CoverPhoto from '../assets/Policies cover.jpg'
import '../style/pages/Policies.css';
import SectionWrapper from "../components/sections/SectionWrapper";
import Squigle from '../assets/decorations/Squigle.png';
import { Box, Grid } from "@mui/material";
import SectionWithText from "../components/sections/SectionWithText";
import { generalBulletList1, generalBulletList2, poolBulletList1, poolBulletList2, transportBulletList1, transportBulletList2, introDetails, introTitle, locationBulletList1 } from "../assets/languages/english/Policies page content";
import SectionWithBulletPoints from "../components/sections/SectionWithBulletPoints";


export default function PoliciesPage() {
  return (
    <Page>
      <SectionWrapper>
        <Box className='Policies-page-container' flex alignItems='center' justifyContent='center'>
          <img src={CoverPhoto} className="Cover-image" alt="Cover"/>
          <Grid container direction='column' spacing={0} className='Policies-content'>
            <Grid item p={0}>
              <SectionWithText
                title={introTitle}
                titleVariant='h4'
                decoration={Squigle}
                details={introDetails}
                py={4}
                maxWidth={'xl'}
              />
            </Grid>
            <Grid item p={0}>
              <SectionWithBulletPoints 
                title={'General and parking'}
                bulletList1={generalBulletList1}
                bulletList2={generalBulletList2}
                backgroundColor={'#f7f5f2'}
                maxWidth={'xl'}
              />
            </Grid>
            <Grid item p={0}>
              <SectionWithBulletPoints 
                title={'Beach and pool'}
                bulletList1={poolBulletList1}
                bulletList2={poolBulletList2}
                maxWidth={'xl'}
              />
            </Grid>
            <Grid item p={0}>
              <SectionWithBulletPoints 
                title={'Parking and transport'}
                bulletList1={transportBulletList1}
                bulletList2={transportBulletList2}
                backgroundColor={'#f7f5f2'}
                maxWidth={'xl'}
              />
            </Grid>
            <Grid item p={0}>
              <SectionWithBulletPoints 
                title={'Distances to:'}
                bulletList1={locationBulletList1}
                maxWidth={'xl'}
              />
            </Grid>
          </Grid>
        </Box>
      </SectionWrapper>
    </Page>
  );
}