import { Container } from '@mui/material';
import '../../style/components/SectionWithImage.css'
import * as React from 'react';

export default function SectionWrapper(props) {

  return (
    <Container maxWidth='xl' sx={{px: 0, py: 6}}>
      {props.children}
    </Container>
  );
};