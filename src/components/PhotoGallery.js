import { Box, Typography } from '@mui/material';
import React, { useCallback, useState } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import Gallery from "react-photo-gallery";
import { photosGalery } from "../constants/photos";
import '../style/components/PhotoGallery.css';


export default function PhotoGallery({maxWidth, title}) {
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
    <Box maxWidth={maxWidth}>
      {title && 
        <Typography variant='h3' pb={2}>{title}</Typography>
      }
      <Gallery photos={photosGalery} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox} allowFullscreen={false} className="Gallery-modal">
            <Carousel
              currentIndex={currentImage}
              views={photosGalery.map(photo => ({
                ...photo,
                srcset: photo.srcSet,
                caption: photo.title,
              }))}
              hideControlsWhenIdle={false}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </Box>
  );
}