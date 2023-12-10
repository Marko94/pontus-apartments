import { Container } from '@mui/material';
import '../../style/components/SectionWithImage.css'
import * as React from 'react';

export default function SectionWrapper(props) {

  return (
    <Container sx={{padding: 0}}>
      {props.children}
    </Container>
  );
};