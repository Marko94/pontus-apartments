import CircleIcon from '@mui/icons-material/Circle';
import { Grid, Typography } from '@mui/material';
import * as React from 'react';
import '../style/components/BulletList.css';

export default function BulletList({bulletTextArray, spacing, width, marginRight, keyWord}) { 
  return (
    <Grid container direction='column' spacing={spacing} width={width} className='Bullet-list' mr={marginRight} mt={0}>
      {bulletTextArray.map((elementText, index) => 
        <Grid item display='flex' alignItems='baseline' key={keyWord + index}>
          <CircleIcon color='secondary' className='Bullet-icon' sx={{p: '2px'}}/>
          <Typography variant='p1'>{elementText}</Typography>
        </Grid>
      )}
    </Grid>
  );
};