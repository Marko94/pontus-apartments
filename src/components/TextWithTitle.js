import { Grid, Typography } from '@mui/material';
import * as React from 'react';

export default function TextWithTitle({
  title,
  titleVariant='h3',
  subtitle,
  subtitleVariant='h4',
  decoration,
  details,
  detailsVariant='p1',
  spacing=0,
  width
}) {

  return (   
    <Grid container direction='column' alignItems='center' spacing={spacing} width={width} className='Text-with-title-container'>
      <Grid item display='flex' alignItems='center'>
        <Typography variant={titleVariant} color='primary'>{title}</Typography>
      </Grid>
      <Grid item display='flex' alignItems='center'>
        <Typography variant={subtitleVariant} color='primary'>{subtitle}</Typography>
        {decoration && 
          <img src={decoration}/>
        }
      </Grid>
      <Grid item display='flex' alignItems='center'>
        <Typography variant={detailsVariant} color='black' align='justify' pt={1} sx={{ whiteSpace: "pre-wrap" }}>{details}</Typography>
      </Grid>
    </Grid>
  );
};