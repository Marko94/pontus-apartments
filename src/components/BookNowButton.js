import { Button } from '@mui/material';
import * as React from 'react';

export default function BookNowButton({style, href}) {
  return (
    <Button variant='contained' color="secondary" size='large' href={href || '/contact'} disableElevation style={style} >{'Book now'}</Button>
  );
}