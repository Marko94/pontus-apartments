import React from 'react';
import { Box, Button, Typography } from '@mui/material';

export default function NotFoundPage() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '90vh'
      }}
    >
      <Typography variant="h1">
        404
      </Typography>
      <Typography variant="h4">
        The page you're looking for doesn't exist.
      </Typography>
      <Button href='/' variant="contained" color="secondary" sx={{mt: 2}}>Back Home</Button>
    </Box>
  );
}