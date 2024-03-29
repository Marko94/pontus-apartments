import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';

export default function InfoPanel({fontSize, iconSize}) {
  return (
    <React.Fragment>
      <Typography variant="p1" component="div" display="flex" alignItems="center" fontSize={fontSize}>
        <PhoneEnabledIcon fontSize={iconSize}/>
        <Box display="flex" flexDirection="column" sx={{ ml:1 }}>
          <Box display="flex" flexDirection="row" gap={'0 8px'}>
            <Link href="tel:+38269466754" flex color="inherit">
              +382 69 466 754
            </Link>
            <Typography>{"(Pavle)"}</Typography>
          </Box>
          <Box display="flex" flexDirection="row" gap={'0 8px'}>
            <Link href="tel:+38269033039" flex color="inherit">
              +382 69 033 039
            </Link>
            <Typography>{"(Jasna)"}</Typography>
          </Box>
        </Box>
      </Typography>
    </React.Fragment>
  );
}