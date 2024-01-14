import React from "react";
import Page from '../components/Page';
import '../style/pages/Gallery.css';
import SectionWrapper from "../components/sections/SectionWrapper";
import PhotoGallery from "../components/PhotoGallery";
import { Box } from "@mui/material";


export default function GalleryPage() {
  return (
    <Page>
      <SectionWrapper>
        <Box className='Gallery-page-container' flex alignItems='center' justifyContent='center'>
          <PhotoGallery/>
        </Box>
      </SectionWrapper>
    </Page>
  );
}