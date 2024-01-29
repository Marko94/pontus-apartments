import { Button } from '@mui/material';
import * as React from 'react';

export default function BookNowButton() {
  return (
    <Button variant='contained' color="secondary" size='large' href='/contact' disableElevation>{'Book now'}</Button>
  );
}