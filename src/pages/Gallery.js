import { Box, Typography } from '@mui/material';
import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import '../style/pages/Gallery.css';
import { photosGalery } from "../constants/photos";


export default function GalleryPage() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((_, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <Box className='Gallery-page-container' flex alignItems='center' justifyContent='center'>
      <Box maxWidth='xl'>
        <Typography variant='h3' pb={2}>Photo Gallery</Typography>
        <Gallery photos={photosGalery} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox} allowFullscreen={false} className="Gallery-page-modal">
              <Carousel
                currentIndex={currentImage}
                views={photosGalery.map(photo => ({
                  ...photo,
                  srcset: photo.srcSet,
                  caption: photo.title,
                }))}
                hideControlsWhenIdle={false}
                styles={{navigationPrev: {'background-color': '#00000007'}}}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </Box>
    </Box>
  );
}