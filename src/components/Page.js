import { Box } from '@mui/material';
import reveal from '../helpers/onSectionReveal';
import * as React from 'react';

export default function Page(props) {
    //forces the section load animation to trigger on page load
    React.useLayoutEffect (() => {
      reveal();
    }, []);
  
    window.addEventListener("pageshow", reveal);
    window.addEventListener("scroll", reveal);
  
  return (
    <Box className="Page">
      {props.children}
    </Box>
  );
};